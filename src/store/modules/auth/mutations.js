const setError = (state, payload) => {
    state.error = payload;
    setTimeout(()=>{
        state.error = null
    }, 3000)
};
export default {
    setError,
};