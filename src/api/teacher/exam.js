
import request from '@/utils/request';

export const getSupervise = (payload) => {
    return request({
        url: '/teacher/supervise',
        method: 'post',
        // data: payload
    })
}

export const getStudentGrade = (payload) => {
    return request({
        url: '/teacher/getGrade',
        method: 'post',
        // data: payload
    })
}

export const getStudentAnswer = (payload) => {
    return request({
        url: '/teacher/getAnswer',
        method: 'post',
        // data: payload
    })
}