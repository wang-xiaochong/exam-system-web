import request from '@/utils/request';

export const getSubjects = () => {
    return request({
        url: '/teacher/getSubjects',
        method: 'get',
        // 图片验证码 response类型设置成blob，图片才能显示出来
        // responseType: "blob"
    })
}