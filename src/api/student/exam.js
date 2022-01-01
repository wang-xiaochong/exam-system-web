
import request from '@/utils/request';

export const getQuestions = (payload) => {
    return request({
        url: '/student/getQuestions',
        method: 'post',
        // data: payload
    })
}
