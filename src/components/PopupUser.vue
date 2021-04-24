<template>
  <transition v-on:enter="enter" v-on:leave="leave">
    <div class="user-popup-frame target-frame" @click="$emit('active', false)" v-show="active">
      <div class="user-popup-box" :class="{'user-popup-active': active}">
        <div class="user-popup-info">
          <div class="user-popup-photo">
            <img src="../assets/images/user.png" alt="">
          </div>
          <div class="user-popup-name">
            <h3>Иван Иванов</h3>
            <p class="user-info-bonus">Мои бонусы <span>2 <i class="fa-user-bonus"></i></span></p>
          </div>
        </div>
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
          <li v-if="user" :class="{'user-active-page' : $route.path === '/profile'}">
            <router-link to="/profile">
              <i class="fa-user"></i>
              Профиль
              <svg class="invalid" v-if="user.first_name === '' || user.last_name === '' || user.full_name === '' || user.date_birth === '' || user.login === '' || user.city === '' || user.street === ''" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path>
              </svg>
            </router-link>
          </li>
          <li class="user-link-out js-popup-out">
            <a href="#"><i class="fa-out"></i>Выход</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
  },
  methods: {

    setClass: function (active) {
      if (active === true) {
        return 'open'
      }
      return 'close'
    },

    enter: function (el, done) {
      Velocity(el, 'fadeIn', {
            duration: 200,
            easing: "easeInBack"
          },
          {complete: done})
    },

    leave: function (el, done) {
      Velocity(el, 'fadeOut', {
            duration: 200,
            easing: "easeInBack"
          },
          {complete: done})
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUserCredentials;
    }
  },
}
</script>