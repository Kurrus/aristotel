import axios from "axios";

const getCategory = async (context) => {
    await context.commit('setLoading', true)
    const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/category-list/`)).data
    if (response){
        await context.commit('setCategory', response.result)
    }else{
        await context.commit('setError', response.code)
        throw response
    }
};


export default {
    getCategory,
}