import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import profile from './modules/profile'
import notification from './modules/notification'
import category from './modules/category'
import courses from './modules/courses'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    notification,
    auth,
    profile,
    category,
    courses
  }
})
