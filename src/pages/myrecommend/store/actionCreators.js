import * as actionTypes from './constants';

import { getHotRecommends } from '@/services/myrecommend';

const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})

export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommends(limit).then(res => {
            dispatch(changeHotRecommendAction(res));
            // console.log(res);
        })
    }
}
