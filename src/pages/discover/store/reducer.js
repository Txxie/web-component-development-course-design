import { Map } from 'immutable';//集成immutable优化性能

import * as actionTypes from "./constants";

const defaultState = Map({
    topBanners: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set("topBanners", action.topBanners);
        default:
            return state;
    }
}

export default reducer;