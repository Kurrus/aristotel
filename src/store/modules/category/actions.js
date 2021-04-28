import axios from "axios";

const getCategory = async (context) => {
        const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/category-list/`)).data
        if (response){
            await context.commit('setCategory', response.result)
        }else{
            await context.commit('setError', response.code)
            throw response
        }
};
const getCategory2 = async () => {
        const response = (await axios.get(`${process.env.VUE_APP_API_URL}/api/courses/v1/course-list`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            }
        })).data
    console.log(response)
        // if (response){
        //     await context.commit('setCategory', response.result)
        // }else{
        //     await context.commit('setError', response.code)
        //     throw response
        // }
};


export default {
    getCategory,
    getCategory2,
}