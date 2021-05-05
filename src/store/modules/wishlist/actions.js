 import axios from "axios";

const getWishlist = async (context) => {
        const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/carts/v1/active/wishlist`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
        if (response){
            await context.commit('setWishlist', response.data)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const addWishlist = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/carts/v1/add/to/wishlist`, obj, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
        if (response){
            await context.commit('setNotification', response.code)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const removeWishlist = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/carts/v1/remove/desire/course`, obj, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
        if (response){
            await context.commit('setNotification', response.code)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};


export default {
    getWishlist,
    addWishlist,
    removeWishlist,
}