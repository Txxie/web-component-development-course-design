// recommend里发送的网络请求
import request from './request';

// getTopBanners是发送网络请求的函数
export function getTopBanners() {
    return request({
        url: "/banner"
    })
}