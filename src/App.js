// 导入第三方的东西放在最上面进行导入
import React, { memo } from 'react';//减少渲染次数，提高性能
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';


// 导入功能性的东西
import routes from './router';
import store from './store';

// 导入组件
import { HashRouter } from 'react-router-dom';
import HJWAppHeader from '@/components/app-header';
import HJWAppFooter from '@/components/app-footer';
import HJWAppPlayerBar from './pages/player/app-player-bar';


const App = memo(() => {
    return (
        <Provider store={store}>
            <HashRouter>
                <HJWAppHeader />
                {renderRoutes(routes)}
                <HJWAppFooter />
                <HJWAppPlayerBar />
            </HashRouter>
        </Provider>
    )
})

export default App;