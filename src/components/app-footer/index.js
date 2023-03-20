import React, { memo, Fragment } from 'react';//引入react的Fragment组件优化性能，减少真实dom的渲染

import { footerImages } from "@/common/local-data";//导入数据

import {
    AppFooterWrapper,
    FooterLeft,
    FooterRight,
} from './style';

const HJWAppFooter = memo(() => {
    return (
        <AppFooterWrapper>
            <div className="wrap-v2 content">
                <FooterLeft>
                    <div className="link">
                        <a href="/todo" target="_blank" rel="noopener noreferrer">黄嘉雯的音乐小站</a>
                    </div>
                    <div>计算机科学与技术202</div>
                    <div>1190580010</div>
                </FooterLeft>
                <FooterRight className="right">
                    {
                        footerImages.map((item, index) => {
                            return (
                                <Fragment key={item.title}>
                                    <li className="item" key={item.link}>
                                        <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                                        <span className="title">{item.title}</span>
                                    </li>
                                </Fragment>
                            )
                        })
                    }
                </FooterRight>
            </div>
        </AppFooterWrapper>
    )
})

export default HJWAppFooter;