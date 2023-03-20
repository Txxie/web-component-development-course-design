import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils';
import {
    getSongDetailAction,
    changeSequenceAction,
    changeCurrentIndexAndSongAction,
    changeCurrentLyricIndexAction
} from '../store/actionCreators';

import { message } from "antd";
import { NavLink } from 'react-router-dom';
import { Slider } from 'antd';
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style';//导入样式组件


const HJWAppPlayerBar = memo(() => {
    // props and state
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // redux hooks
    const { currentSong, sequence, lyricList, currentLyricIndex } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        sequence: state.getIn(["player", "sequence"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getSongDetailAction(1394433798));
    }, [dispatch]);
    const audioRef = useRef();
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play().then(res => {
            setIsPlaying(true);
        }).catch(err => {
            setIsPlaying(false);
        });
    }, [currentSong]);

    // ather handle
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(duration, "mm:ss");
    const showCurrentTime = formatDate(currentTime, "mm:ss");

    // other function
    const playMusic = useCallback(() => {
        // 通过点击来到此函数内，如果发现上次状态是正在播放，则此函数需要使音频组件调用暂停pause()函数,反之调用播放play()函数
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);//每次点击状态都要发生一次改变
        // console.log(currentSong.id);
        // audioRef.current.src = getPlaySong(currentSong.id);
        // audioRef.current.play();
    }, [isPlaying]);

    const changeMusic = (tag) => {
        // 逻辑太多，最好另外封装一个函数
        dispatch(changeCurrentIndexAndSongAction(tag));
    }
    // const changeMusic = useCallback((tag) => {
    //     // 逻辑太多，最好另外封装一个函数
    //     dispatch(changeCurrentSong(tag));
    // })

    const handleMusicEnded = () => {
        if (sequence === 2) {//单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            dispatch(changeCurrentIndexAndSongAction(1));
        }
    }

    const timeUpdate = (e) => {
        // console.log(e.target.currentTime);
        if (!isChanging) {
            setCurrentTime(e.target.currentTime * 1000);//乘以1000转化为毫秒数传入format-util函数
            setProgress(currentTime / duration * 100);
        }

        let i = 0;
        for (; i < lyricList.length; i++) {
            let lyricItem = lyricList[i];
            if (e.target.currentTime * 1000 < lyricItem.time) {
                break;
            }
        }

        if (currentLyricIndex !== i - 1) {
            dispatch(changeCurrentLyricIndexAction(i - 1));

            const content = lyricList[i - 1] && lyricList[i - 1].content
            // console.log(lyricList[i - 1]);
            message.open({
                key: "lyric",//解决显示多个 的问题
                content: content,
                duration: 0,//设0时不自动关闭
                className: "lyric-class"//自定义样式，在全局内写
            })
        }
        // console.log(lyricList[i - 1]);

    }

    const changeSequence = () => {
        let currentSequence = sequence + 1;
        if (currentSequence > 2) {
            currentSequence = 0;
        }
        dispatch(changeSequenceAction(currentSequence));
    }

    const sliderChange = useCallback((value) => {
        setIsChanging(true);
        const currentTime = value / 100 * duration;
        setCurrentTime(currentTime);
        setProgress(value);//一但滑动滑块，进度要跟着滑块发送改变
    }, [duration]);

    const sliderAfterChange = useCallback((value) => {
        const currentTime = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime * 1000);
        setIsChanging(false);

        if (!isPlaying) {
            playMusic();
        }

    }, [duration, isPlaying, playMusic]);

    return (
        <PlaybarWrapper>
            <div className='content wrap-v2'>
                <Control isPlaying={isPlaying}>
                    <button className='sprite_player prev' onClick={e => changeMusic(-1)}></button>
                    <button className='sprite_player play' onClick={e => playMusic()}></button>
                    <button className='sprite_player next' onClick={e => changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className='image'>
                        <NavLink to="/player">
                            <img src={getSizeImage(picUrl, 35)} alt="" />
                        </NavLink>
                    </div>
                    <div className='info'>
                        <div className='song'>
                            <span className='song-name'>{currentSong.name}</span>
                            <a href='#/' className='singer-name'>{singerName}</a>
                        </div>
                        <div className='progress'>
                            <Slider defaultValue={30}
                                value={progress}
                                onChange={sliderChange}
                                onAfterChange={sliderAfterChange} />
                            <div className='time'>
                                <span className='now-time'>{showCurrentTime}</span>
                                <span className='divider'></span>
                                <span className='duration'>{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="sprite_player btn favor"></button>
                        <button className="sprite_player btn share"></button>
                    </div>
                    <div className="right sprite_player">
                        <button className="sprite_player btn volume"></button>
                        <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
                        <button className="sprite_player btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => handleMusicEnded(e)} />
        </PlaybarWrapper>
    )
})

export default HJWAppPlayerBar;