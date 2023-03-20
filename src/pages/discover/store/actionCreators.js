import * as actionTypes from './constants';

import {
    getTopBanners,
} from '@/services/discover';

// 把拿到的数据放进redux里面
const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        // 在这里发送网络请求
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res));
        })
    }
}
