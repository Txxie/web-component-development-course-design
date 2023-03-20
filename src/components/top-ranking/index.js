import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
// components里的组件使用player组件的actionCreators，建议是把player组件的actionCreators在player中store中的index.js进行统一导入和导出
// import { getSongDetailAction } from '@/pages/player/store/actionCreators';
import { getSongDetailAction } from '@/pages/player/store';

import { TopRankingWrapper } from './style';

const HJWTopRanking = memo((props) => {
    const { info } = props;
    // const { tracks = [] } = info.tracks;
    // console.log(info.tracks);
    const track = Array.isArray(info.tracks) ? info.tracks : [];

    // redux hooks
    const dispatch = useDispatch();

    const playMusic = (item) => {
        // console.log(item.id);
        dispatch(getSongDetailAction(item.id));
    }

    return (
        <TopRankingWrapper>
            <div className='header'>
                <div className='image'>
                    <img src={getSizeImage(info.coverImgUrl)} alt="" />
                    <a href='/todo' className='image_cover'>rankings</a>
                </div>
                <div className='info'>
                    <a href='/todo'>{info.name}</a>
                    <div>
                        <button className='btn play sprite_02'></button>
                        <button className='btn favor sprite_02'></button>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    track.slice(0, 10).map((item, index) => {
                        return (
                            <div key={item.id} className="list-item">
                                <div className="rank">{index + 1}</div>
                                <div className="info">
                                    <span className="name text-nowrap">{item.name}</span>
                                    <div className="operate">
                                        <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                                        <button className="btn sprite_icon2 addto"></button>
                                        <button className="btn sprite_02 favor"></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className='list'>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
                <div className="list-item">
                    <div className='rank'>1</div>
                    <div className='info'>
                        <span className='name'>歌曲</span>
                        <div className='operate'>
                            <button className='btn sprite_02 play'></button>
                            <button className="btn sprite_icon2 addto"></button>
                            <button className='btn sprite_02 favor'></button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='footer'>
                <a href='/todo'>查看全部 &gt;</a>
            </div>
        </TopRankingWrapper>
    )
})

export default HJWTopRanking;