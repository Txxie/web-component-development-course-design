import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../store/actionCreators';

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';
//拿到数据
//useSelector有一个小问题，
//它默认返回的对象进行的是“===”引用比较，会耗费性能，解决方法是依赖react-redux提供的shallowEqual函数，使它进行浅层比较
const HJWTopBanner = memo(() => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch();
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["discover", "topBanners"])
    }), shallowEqual);

    // 发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);
    const bannerRef = useRef();
    //useCallback（）使用场景：把一个回调函数传入自定义组件内部，
    //需要使用useCallback函数对该回调函数进行包裹，并且设置依赖，只有当依赖发送改变时，才会组件重绘
    const bannerChange = useCallback((from, to) => {
        setCurrentIndex(to);
    }, []);

    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl) + "?imageView&blur=40x20";

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={e => bannerRef.current.prev()}></button>
                    <button className='btn right' onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default HJWTopBanner;