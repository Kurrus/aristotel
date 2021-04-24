const setError = (state, payload) => {
    state.error = payload;
    setTimeout(()=>{
        state.error = null
    }, 3000)
};
const setNotification = (state, payload) => {
    state.notification = payload;
    setTimeout(()=>{
        state.notification = null
    }, 3000)
};
export default {
    setError,
    setNotification
};