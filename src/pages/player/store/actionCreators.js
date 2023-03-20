import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from '@/utils/math-utils';
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
})

const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

const changeLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
});

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const sequence = getState().getIn(["player", "sequence"]);
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
        const playList = getState().getIn(["player", "playList"]);

        switch (sequence) {
            case 1://随机播放
                // 事先封装好一个工具函数getRandomNumber用于获取随机数，再从这里调用
                let randomIndex = getRandomNumber(playList.length);
                while (randomIndex === currentSongIndex) {
                    randomIndex = getRandomNumber(playList.length);
                }
                currentSongIndex = randomIndex;
                break;

            default://顺序播放
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        }

        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        dispatch(getLyricAction(currentSong.id));
    }
}

export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 根据ids查找playList中是否存在该歌曲
        const playList = getState().getIn(["player", "playList"]);
        const songIndex = playList.findIndex((song) => song.id === ids);
        // console.log("songIndex", songIndex);

        let song = null;
        // 没找到歌曲SongIndex为-1
        if (songIndex !== -1) {//可以找到歌曲
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));

            dispatch(getLyricAction(song.id));
        } else {
            // 没有找到歌曲，则请求歌曲数据
            getSongDetail(ids).then(res => {
                song = res.songs && res.songs[0];
                // console.log("song", song);
                if (!song) return;

                // 将最新请求到的歌曲添加到播放列表
                const newPlayList = [...playList];
                newPlayList.push(song);

                // 更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song));

                // 请求歌词数据
                dispatch(getLyricAction(song.id));
            })
        }
        //  if (!song) return;
        //  dispatch(getLyricAction(song.id));//song为null，获取不到歌词数据
        // getSongDetail(ids).then(res => {
        //     dispatch(changeCurrentSongAction(res.songs[0]));
        //     console.log(res.songs[0]);
        // })
    }
}

export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric;
            // console.log("lyric", lyric);
            const lyricList = parseLyric(lyric);
            // console.log("lyricList", lyricList);
            dispatch(changeLyricListAction(lyricList));
        })
    }
}