const setUserCredentials = (state, payload) => {
    state.user = payload;
};
const setFaq = (state, payload) => {
    state.faq = payload;
};
export default {
    setUserCredentials,
    setFaq,
};