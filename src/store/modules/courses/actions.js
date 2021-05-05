import axios from "axios";

const getCourses = async (context) => {
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/course-list?per_page=10`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })).data
    if (response.success){
        await context.commit('setCourses', response)
        await context.commit('setLoading', false)
    }else{
        await context.commit('setError', response.code)
        throw response
    }
};
const getCourse = async (context,id) => {
    await context.commit('setLoading', true)
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/course-detail/${id}/`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })).data
    if (response.success){
        await context.commit('setCourse', response.result)
    }else{
        await context.commit('setError', response.code)
        throw response
    }
};
const getCoursesById = async (context,id) => {
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/course-list/?cat=${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })).data
    if (response.success){
        await context.commit('setCourses', response)
    }else{
        await context.commit('setCourses', [])
        await context.commit('setError', response.code)
        throw response
    }
};
const getReviewsById = async (context, obj) => {
    let url = ''
    if (obj.page){
        url = `&page=${obj.page}`
    }else{
        url = ''
    }
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/reviews/v1/review-list-create/${obj.id}?per_page=1${url}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })).data
    if (response.success){
        if (obj.page > 1){
            await context.commit('pushReviews', response)
        }else{
            await context.commit('setReviews', response)
        }

    }else{
        await context.commit('setError', response.code)
        throw response
    }
};
export default {
    getCourses,
    getCoursesById,
    getCourse,
    getReviewsById
}