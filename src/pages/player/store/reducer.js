// 使用immutable转成不可变对象
import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
    currentSong: {},
    playList: [
        {
            "name": "世界は恋に落ちている",
            "id": 28891491,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 1049332,
                    "name": "CHiCO with HoneyWorks",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "TV动画《青春之旅》片头曲:TVアニメ「アオハライド」OPテーマ"
            ],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 42,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 2922404,
                "name": "世界は恋に落ちている",
                "picUrl": "https://p2.music.126.net/RhGtJYu6ho54UE1Zaz_EMQ==/109951165049895019.jpg",
                "tns": [],
                "pic_str": "109951165049895019",
                "pic": 109951165049895020
            },
            "dt": 311353,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 12454182,
                "vd": -60741,
                "sr": 44100
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 7472527,
                "vd": -58253,
                "sr": 44100
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4981699,
                "vd": -56640,
                "sr": 44100
            },
            "sq": null,
            "hr": null,
            "a": null,
            "cd": "1",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 270336,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 42,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rurl": null,
            "rtype": 0,
            "mst": 9,
            "cp": 2706476,
            "mv": 0,
            "publishTime": 1407254400000,
            "tns": [
                "我的世界已坠入爱河"
            ]
        },
        {
            "name": "麻雀",
            "id": 1407551413,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 4292,
                    "name": "李荣浩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 22,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 83878976,
                "name": "麻雀",
                "picUrl": "https://p1.music.126.net/JzsER44sOReoM6mR8XKnsw==/109951165182029540.jpg",
                "tns": [],
                "pic_str": "109951165182029540",
                "pic": 109951165182029540
            },
            "dt": 252757,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 10112685,
                "vd": -47454,
                "sr": 48000
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6067629,
                "vd": -44880,
                "sr": 48000
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4045101,
                "vd": -43296,
                "sr": 48000
            },
            "sq": {
                "br": 1008273,
                "fid": 0,
                "size": 31856048,
                "vd": -47518,
                "sr": 48000
            },
            "hr": {
                "br": 1769760,
                "fid": 0,
                "size": 55914991,
                "vd": -47444,
                "sr": 48000
            },
            "a": null,
            "cd": "01",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 536879104,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 22,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rurl": null,
            "rtype": 0,
            "mv": 10904989,
            "mst": 9,
            "cp": 1416577,
            "publishTime": 0
        },
        {
            "name": "李白",
            "id": 27678655,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 4292,
                    "name": "李荣浩",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "600907000001520562",
            "fee": 8,
            "v": 64,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 2659088,
                "name": "模特",
                "picUrl": "https://p2.music.126.net/0uZ_bKtm4E188Uk9LFN1qg==/109951163187393370.jpg",
                "tns": [],
                "pic_str": "109951163187393370",
                "pic": 109951163187393380
            },
            "dt": 273442,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 10940125,
                "vd": -23409,
                "sr": 44100
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 6564093,
                "vd": -20800,
                "sr": 44100
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4376076,
                "vd": -19057,
                "sr": 44100
            },
            "sq": {
                "br": 899538,
                "fid": 0,
                "size": 30746508,
                "vd": -23476,
                "sr": 44100
            },
            "hr": null,
            "a": null,
            "cd": "1",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 8704,
            "originCoverType": 1,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 64,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mst": 9,
            "cp": 1416577,
            "rtype": 0,
            "rurl": null,
            "mv": 5331161,
            "publishTime": 1379347200007
        }
    ],
    currentSongIndex: 0,
    sequence: 0, //0表示列表循环播放、1表示随机播放，2表示单曲循环播放
    lyricList: [],
    currentLyricIndex: 0
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index);
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence);
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList", action.lyricList);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index);
        default:
            return state;
    }
}

export default reducer;