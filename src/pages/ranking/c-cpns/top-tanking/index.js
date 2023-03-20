import React, { memo, useEffect } from 'react';
// 引入classnames库，以便使用js来动态判断是否为组件添加class
import classNames from "classnames";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { TopRankingWrapper } from './style';

import { getSizeImage } from "@/utils/format-utils";

import {
    changeCurrentIndex,
    getRanking
} from "../../store/actionCreators"

const HJWTopRanking = memo(() => {
    const { topList, currentIndex } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"]),
        currentIndex: state.getIn(["ranking", "currentIndex"])
    }), shallowEqual);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getTops());
    // }, [dispatch]);
    // hooks
    useEffect(() => {
        const id = (topList[currentIndex] && topList[currentIndex].id);
        if (!id) return;
        dispatch(getRanking(id));
    }, [topList, dispatch, currentIndex]);

    // handle function
    const hanldeItemClick = (index) => {
        dispatch(changeCurrentIndex(index));
        const id = topList[currentIndex].id;
        dispatch(getRanking(id));
    }
    return (
        <TopRankingWrapper>
            {
                topList.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                    }
                    return (
                        <div key={item.id}>
                            {header}
                            <div className={classNames("item", { "active": index === currentIndex })}
                                onClick={e => hanldeItemClick(index)}>
                                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="update">{item.updateFrequency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </TopRankingWrapper>
    )
})

export default HJWTopRanking;