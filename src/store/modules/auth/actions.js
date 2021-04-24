import axios from "axios";
import router from "@/router";

const registerUser = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/create`, obj)).data
        if (response.success){
            await context.commit('setNotification', response.code)
            await context.commit('setTelNumber', obj.user.phone)
        }else{
            await context.commit('setTelNumber', obj.user.phone)
            await context.commit('setError', response.code)
            if (response.code === 100){
                throw await router.push('/login')
            }
            if (response.code === 101){
                await context.dispatch('resendSms', obj.user)
            }

        }
};
const resendSms = async (context, obj) => {
    const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/resend/sms`, obj)).data
    if (response.success){
        await context.commit('setNotification', response.code)
    }else {
        await context.commit('setError', response.code)
    }
};
const activateCode = async (context, obj) => {
    const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/activate`, obj)).data
    if (response.success){
        await context.commit('setNotification', response.code)
        if (response.code === 106){
            throw response
        }
    }else {
        await context.commit('setError', response.code)
    }
};
const login = async (context, obj) => {
    const response = (await axios.post(`${process.env.VUE_APP_API_URL}/auth-token/create`, obj)).data
    localStorage.setItem('access', response.access)
    if (response.success){
        await context.commit('setNotification', response.code)
    }else {
        await context.commit('setError', response.code)
    }
};
const forgot = async (context, obj) => {
    const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/password/reset`, obj)).data
    if (response.success){
        await context.commit('setTelNumber', obj.phone)
        await context.commit('setNotification', response.code)
    }else {
        await context.commit('setError', response.code)
    }
};
const forgotCode = async (context, obj) => {
    const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/before/restore`, obj)).data
    if (response.success){
        await context.commit('setCode', obj.sms)
        await context.commit('setNotification', response.code)
    }else {
        await context.commit('setError', response.code)
    }
};
const forgotNewPassword = async (context, obj) => {
    const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/password/restore`, obj)).data
    if (response.success){
        await context.commit('setCode', obj.code)
        await context.commit('setNotification', response.code)
    }else {
        await context.commit('setError', response.code)
    }
};
const logout = async () => {
    await localStorage.removeItem('access')
};
export default {
    registerUser,
    resendSms,
    activateCode,
    login,
    forgot,
    forgotCode,
    forgotNewPassword,
    logout
}