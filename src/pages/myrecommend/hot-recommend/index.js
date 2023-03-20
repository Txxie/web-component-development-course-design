import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { HOT_RECOMMEND_LIMIT } from '@/common/constants';

import HJWThemeHeaderRCM from '@/components/theme-header-rcm';
import HJWSongsCover from '@/components/songs-cover';

import { HotRecommendWrapper } from './style';
import { getHotRecommendAction } from '../store/actionCreators';

const HJWHopRecommend = memo(() => {
    // redux hooks
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // other hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
    }, [dispatch]);

    return (
        <HotRecommendWrapper className='wrap-v2'>
            <HJWThemeHeaderRCM title="我的推荐" />
            <div className='recommend-list'>
                {
                    hotRecommends.map((item, index) => {
                        return <HJWSongsCover key={item.id} info={item}></HJWSongsCover>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})

export { HJWHopRecommend };
