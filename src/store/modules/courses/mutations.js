const setCourses = (state, payload) => {
    state.courses = payload;
};
const setCourse = (state, payload) => {
        payload.material.map(e=>{
            e.open = false
            e.lessons_count = e.lessons.length
        })
    state.course = payload;
};
const setReviews = (state, payload) => {
    state.reviews = payload;
};
const pushReviews = (state, payload) => {
    state.reviews.page = payload.result.page;
    payload.result.map(e => {state.reviews.result.push(e)})
};

export default {
    setCourses,
    setCourse,
    setReviews,
    pushReviews
};