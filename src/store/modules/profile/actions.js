import axios from "axios";
// import router from "@/router";

const getUserCredentials = async (context) => {
        context.commit('setLoading', true)
        const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/profiles/v1/detail`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
        if (response.success){
            await context.commit('setUserCredentials', response.profile)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const profileUpdate = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/profiles/v1/update`, obj,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                "Content-Type": "multipart/form-data"
            }
        })).data
        if (response.success){
            await context.commit('setNotification', response.code)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const checkPassword = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/before/change`, obj,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
        if (response.success){
            await context.commit('setNotification', response.code)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const newPassword = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/password/change`, obj,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
        if (response.success){
            await context.commit('setNotification', response.code)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const faqList = async (context) => {
        const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/support/v1/faqs/list`)).data
        if (response.success){
            await context.commit('setFaq', response.result)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};

export default {
    getUserCredentials,
    profileUpdate,
    checkPassword,
    newPassword,
    faqList
}