const setCourses = (state, payload) => {
    state.courses = payload;
};
const setCourse = (state, payload) => {
    state.course = payload;
};
const setReviews = (state, payload) => {
    state.reviews = payload;
};

export default {
    setCourses,
    setCourse,
    setReviews
};