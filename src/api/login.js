import request from '@/utils/request';

// 1.获取图片验证码
// export const getLogin = (payload) => {
//     return request({
//         url: '/login',
//         method: 'get',
        
//         // 图片验证码 response类型设置成blob，图片才能显示出来
//         responseType: "blob"
//     })
// }

// 2.获取手机验证码
export const getLogin = (payload) => {
    return request({
        url: '/login',
        method: 'post',
        data: payload
    })
}
