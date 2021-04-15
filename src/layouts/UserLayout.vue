<template>
  <div>
    <Header/>
    <main>
      <div class="user">
        <div class="section-frame">
          <div class="user-frame">
            <div class="user-section">
              <div class="user-photo">
                <img src="../assets/images/user.png" alt="">
              </div>
              <h3 class="user-name">Иван Иванов</h3>
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
                  <router-link to="/profile"><i class="fa-user"></i>Профиль</router-link>
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
    }
  },
  mounted() {

  },
  methods: {
    popupUser(e) {
      this.active = e
    },
    logoutPopupFunc(e) {
      this.logoutPopup = e
    },
    logout(e){
      console.log(e)
    }
  },
  components: {
    Header,
    MobileBar,
    Footer,
    PopupUser,
    DeleteCoursePopup
  }
}
</script>