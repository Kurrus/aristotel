<template>
  <header class="header">
    <div class="section-frame">
      <div class="header-top">
        <ul>
          <li><router-link to="/faq">Вопросы и ответы</router-link></li>
          <li><a href="#">Инструкция</a></li>
        </ul>
        <a href="tel:97 931 99 77" class="header-phone"><i class="fa-phone"></i>97 931 99 77</a>
      </div>
    </div>
    <div class="header-content">
      <div class="section-frame">
        <div class="header-bar">
          <router-link to="/" class="logo">
            <img @click="upTop" src="../assets/images/logo.svg" alt="">
          </router-link>
          <nav class="main-nav">
            <ul>
              <li class="active-page"><router-link to="/courses"><i class="fa-square"></i>Каталог</router-link></li>
              <li><a href="#">Новости и акции</a></li>
              <li><a href="#">Сотрудичество</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </nav>
          <div class="header-button">
            <router-link to="/cart"><i class="fa-cart-fill"></i>Корзина</router-link>
            <router-link v-if="token && user" to="/profile"><i class="fa-user"></i>
              Профиль
              <svg class="invalid" v-if="user.first_name === '' || user.last_name === '' || user.full_name === '' || user.date_birth === '' || user.login === '' || user.city === '' || user.street === ''" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path>
              </svg>
            </router-link>
            <router-link v-else to="/login"><i class="fa-out"></i>Вход</router-link>
          </div>
          <div class="burger" @click="navMenu = !navMenu">
            <span></span>
            <span></span>
            <span></span>
            <i class="fa-close menu-close"></i>
          </div>
        </div>
      </div>
    </div>
    <transition v-on:enter="enter" v-on:leave="leave">
      <div class="mob-menu" v-show="navMenu">
      <nav class="main-nav">
        <ul>
          <li class="active-page" @click="navMenu = false"><router-link to="/courses"><i class="fa-square"></i>Каталог</router-link></li>
          <li @click="navMenu = false"><a href="#">Новости и акции</a></li>
          <li @click="navMenu = false"><a href="#">Сотрудичество</a></li>
          <li @click="navMenu = false"><a href="#">Контакты</a></li>
          <li @click="navMenu = false"><a href="#">Вопросы и ответы</a></li>
          <li @click="navMenu = false"><a href="#">Инструкция</a></li>
        </ul>
      </nav>
      <a href="tel:97 931 99 77" class="header-phone"><i class="fa-phone"></i>97 931 99 77</a>
    </div>
    </transition>
  </header>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  data() {
    return {
      navMenu: false,
      token: !!localStorage.getItem('access')
    }
  },
  methods: {
    setClass: function (navMenu) {
      if (navMenu=== true) {
        return 'open'
      }
      return 'close'
    },

    enter: function (el, done) {
      Velocity(el, 'slideDown', {
            duration: 300,
            easing: "easeInBack"
          },
          {complete: done})
    },

    leave: function (el, done) {
      Velocity(el, 'slideUp', {
            duration: 300,
            easing: "easeInBack"
          },
          {complete: done})
    },
    upTop() {
      window.scrollTo(0, 0)
    }

  },
  computed: {
    user() {
      return this.$store.getters.getUserCredentials;
    }
  },
}
</script>