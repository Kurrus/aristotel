<template>
  <header class="header">
    <div class="section-frame">
      <div class="header-top">
        <ul>
          <li><a href="#">Вопросы и ответы</a></li>
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
            <router-link to="/login"><i class="fa-out"></i>Вход</router-link>
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
      navMenu: false
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
}
</script>