import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/main.scss'
import Maska from 'maska'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
// import VueProgressBar from 'vue-progressbar'
// Vue.use(VueProgressBar, {
//   color: 'rgb(29,79,49)',
//   failedColor: 'red',
//   height: '12px'
// })
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)
Vue.use(Maska)
Vue.config.productionTip = false
window.addEventListener('load', async ()=>{
  if ('serviceWorker' in navigator){
    try{
      await navigator.serviceWorker.register('./sw.js')
    }catch (e){console.log(e)}
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
