import axios from "axios";

const registerUser = async (context, obj) => {
        const response = (await axios.post(`${process.env.VUE_APP_API_URL}/api/auth/v1/create`, obj)).data
        if (response.user.error){
            throw response
        }
};
export default {
    registerUser
}