const setTelNumber = (state, payload) => {
    state.tel_number = payload;
};
const setCode = (state, payload) => {
    state.code = payload;
};
export default {
    setTelNumber,
    setCode
};