import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style';

const HJWPlayer = memo(() => {
    const { currentSong, lyricList, currentLyricIndex } = useSelector(state => ({
        currentSong: state.getIn(["player", "currentSong"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }), shallowEqual);
    const lyricListone = lyricList.slice(0, lyricList.length / 2);
    const lyricListtwo = lyricList.slice(lyricList.length / 2, lyricList.length);
    // console.log(lyricList.length);

    return (
        <PlayerWrapper>
            <div className='content wrap-v2'>
                <PlayerLeft>
                    <img src={currentSong.al.picUrl} className='playimg' alt='' />
                    <div className='info'>
                        <div>{currentSong.name}</div>
                        <div>{currentSong.ar[0].name}</div>
                    </div>
                </PlayerLeft>
                <PlayerRight>
                    <div className='lycleft'>
                        {
                            lyricListone.map((item, index) => {
                                return (
                                    <p className={currentLyricIndex === index ? "lycactive" : null}>{item.content}</p>
                                )
                            })
                        }
                    </div>
                    <div className='lycright'>
                        {
                            lyricListtwo.map((item, index) => {
                                return (
                                    <p className={currentLyricIndex === lyricList.length / 2 + index ? "lycactive" : null}>{item.content}</p>
                                )
                            })
                        }
                    </div>
                    {/* {
                        lyricList.map((item, index) => {
                            return (
                                <p className={currentLyricIndex === index ? "lycactive" : null}>{item.content}</p>
                            )
                        })
                    } */}
                    {/* {
                        [0, 1].map((item, index) => {
                            return (
                                <div key={item} className={index === 0 ? "lyrleft" : "lycright"}>
                                    {
                                        lyricList.slice(item * 10, (item + 1) * 10).map((iten, idx) => {
                                            return <HJWLyc key={iten.id}
                                                info={iten}
                                                idxx={idx}
                                                cindex={currentLyricIndex} />
                                        })
                                    }
                                </div>
                            )
                        })
                    } */}
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})

export default HJWPlayer;