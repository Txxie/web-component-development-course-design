//这个文件的作用：创建store

//添加相关的依赖
import { createStore, applyMiddleware, compose } from 'redux';//applyMiddleware作用：通过applyMiddleware合并多个中间件

import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;






























