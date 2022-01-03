
import request from '@/utils/request';

export const getSupervise = (payload) => {
    return request({
        url: '/teacher/supervise',
        method: 'post',
        // data: payload
    })
}
