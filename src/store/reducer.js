//这个文件的作用是合并多个reducer
import { combineReducers } from 'redux-immutable';

// as的作用是重命名，为了防止命名冲突
import { reducer as discoverReducer } from "../pages/discover/store";
import { reducer as recommendReducer } from "../pages/myrecommend/store";
import { reducer as rankingReducer } from "../pages/ranking/store";
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({//传入一个对象
    discover: discoverReducer,
    recommend: recommendReducer,
    ranking: rankingReducer,
    player: playerReducer
});

export default cReducer;
