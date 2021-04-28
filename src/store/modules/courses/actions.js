import axios from "axios";

const getCourses = async (context) => {
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/course-list`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })).data
    if (response.success){
        await context.commit('setCourses', response.result)
    }else{
        await context.commit('setError', response.code)
        throw response
    }
};
const getCourse = async (context,id) => {
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
        await context.commit('setCourses', response.result)
    }else{
        await context.commit('setError', response.code)
        throw response
    }
};
const getReviewsById = async (context,id) => {
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/reviews/v1/review-list-create/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    })).data
    if (response.success){
        await context.commit('setReviews', response)
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