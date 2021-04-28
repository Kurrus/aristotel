const setCategory = (state, payload) => {
    payload.map(e=>{
        e.is_open = false
        e.children.map(e=>{
            e.is_open = false
        })
    })
    state.category = payload;
};
export default {
    setCategory
};