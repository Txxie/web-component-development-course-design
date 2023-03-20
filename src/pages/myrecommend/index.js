import React, { memo } from 'react';//可以不加分号，但尽量加
import { HJWHopRecommend } from './hot-recommend';

const HJWMyRecommend = memo(() => {
    return (
        <div>
            <HJWHopRecommend />
        </div>
    )
})

export default HJWMyRecommend;