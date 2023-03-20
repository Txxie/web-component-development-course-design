import React, { memo } from 'react';

import { NavLink } from 'react-router-dom';
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';

const HJWAppHeader = memo(() => {
    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>
                <HeaderLeft>
                    <a href='#/discover' className='logo'>logo</a>
                    <ul className='select-list'>
                        <li className="select-item">
                            {/* <a href='/todo'>发现音乐</a> */}
                            <NavLink to="/discover" exact>发现音乐</NavLink>
                        </li>
                        <li className="select-item">
                            <NavLink to='/myrecommend'>精选歌单</NavLink>
                            {/* <a href='/todo'>精选歌单</a> */}
                        </li>
                        <li className="select-item">
                            <NavLink to='/ranking'>所有歌单</NavLink>
                            {/* <a href='/todo'>所有歌单</a> */}
                        </li>
                        <li className="select-item">
                            <NavLink to="/player">我的播放</NavLink>
                            {/* <a href='/todo'>我的播放</a> */}
                        </li>
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
                    <div className='center'>我的音乐小屋</div>
                    <div className=''>登录</div>
                </HeaderRight>
            </div>
            <div className='divider'></div>
        </HeaderWrapper>
    )
})

export default HJWAppHeader;