<template>
  <div>
    <Header/>
    <main>
      <div class="user">
        <div class="section-frame">
          <div class="user-frame">
            <div class="user-section" v-if="user">
              <div class="user-photo">
                <img :src="(user.image ? domain : '') + (user.image || require('../assets/images/user.png'))" alt="">
                <label for="editImg"><img src="../assets/images/camera-solid.svg" alt=""></label>
                <input @change="userUpdate($event)" type="file" accept=".png, .jpg, .jpeg" id="editImg">
              </div>
              <h3 class="user-name">{{user.first_name}}</h3>
              <p class="user-info-bonus">Мои бонусы <span>2 <i class="fa-user-bonus"></i></span></p>
              <ul class="user-menu">
                <li :class="{'user-active-page' : $route.path === '/user'}">
                  <router-link to="/user"><i class="fa-book"></i>Мои курсы</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/desires'}">
                  <router-link to="/desires"><i class="fa-save-fill"></i>Список желаний</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/certificates'}">
                  <router-link to="/certificates"><i class="fa-certificate"></i>Мои сертификаты</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/bonus'}">
                  <router-link to="/bonus"><i class="fa-bonus"></i>Бонусы</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/faq'}">
                  <router-link to="/faq"><i class="fa-faq"></i>Вопросы и ответы</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/notification'}">
                  <span class="user-notification">1</span>
                  <router-link to="/notification"><i class="fa-notification"></i>Уведомления</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/invite'}">
                  <router-link to="/invite"><i class="fa-user-group"></i>Пригласить друга</router-link>
                </li>
                <li :class="{'user-active-page' : $route.path === '/profile'}">
                  <router-link to="/profile">
                    <i class="fa-user"></i>
                    Профиль
                    <svg class="invalid" v-if="user.first_name === '' || user.last_name === '' || user.full_name === '' || user.date_birth === '' || user.login === '' || user.city === '' || user.street === ''" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                      <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path>
                    </svg>
                  </router-link>
                </li>
                <li class="user-link-out js-popup-out">
                  <a @click.prevent="logoutPopup = true" href="#"><i class="fa-out"></i>Выход</a>
                </li>
              </ul>
            </div>
            <router-view/>
          </div>
        </div>
      </div>
    </main>
    <MobileBar @active="popupUser"/>
    <PopupUser @active="popupUser" :active="active"/>
    <Footer/>
    <DeleteCoursePopup @close="logoutPopupFunc" :logout-event="true" @logout="logout" v-if="logoutPopup" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import MobileBar from "@/components/MobileBar";
import Footer from "@/components/Footer";
import PopupUser from "@/components/PopupUser";
import DeleteCoursePopup from "@/components/DeleteCoursePopup";
export default {
  data() {
    return {
      active: false,
      logoutPopup: false,
      domain: process.env.VUE_APP_API_URL,
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('getUserCredentials')
      await this.$store.dispatch('faqList')
      await this.$store.dispatch('getWishlist')
      this.$store.commit('setLoading', false)
    }catch (e){
      // localStorage.removeItem('access')
    }

  },
  methods: {
    popupUser(e) {
      this.active = e
    },
    logoutPopupFunc(e) {
      this.logoutPopup = e
    },
    async userUpdate(event){
      let user = new FormData();
      user.append('image', event.target.files[0]);
      user.append('first_name', this.user.first_name);
      user.append('last_name', this.user.last_name);
      user.append('full_name', this.user.full_name);
      user.append('phone', this.user.phone.replace(/-|\s/g, "").replace(/[{()}]/g, ''));
      user.append('country', "Узбекистан");
      user.append('city', this.user.city);
      user.append('date_birth', this.user.date_birth || '');
      user.append('street', this.user.street);

      try {
        await this.$store.dispatch('profileUpdate', user)
        await this.$store.dispatch('getUserCredentials')
      } catch (e) {
        console.log(e)
      }
    },
    async logout(e){
      if (e){
        await this.$store.dispatch('logout')
        await this.$router.push('/login')
      }

    }
  },

  computed: {
    user() {
      return this.$store.getters.getUserCredentials;
    },
  },
  components: {
    Header,
    MobileBar,
    Footer,
    PopupUser,
    DeleteCoursePopup,
  }
}
</script>