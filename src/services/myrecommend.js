import request from './request';

export function getHotRecommends(limit) {
    return request({
        url: "/personalized",
        params: {
            limit
        }
    })
}