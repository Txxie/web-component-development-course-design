// 封装公共组件
import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import PropTypes from 'prop-types';

const HJWThemeHeaderRCM = memo((props) => {
    const { title } = props;

    return (
        <HeaderWrapper>
            <div className='left'>
                <h3 className='title'>{title}</h3>
            </div>
            <div className='right'>
                <a href='todo'>更多</a>
            </div>
        </HeaderWrapper>
    )
})

HJWThemeHeaderRCM.PropTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}
HJWThemeHeaderRCM.defaultProps = {
    keywords: []
}

export default HJWThemeHeaderRCM;