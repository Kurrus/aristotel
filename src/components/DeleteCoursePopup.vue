<template>
  <transition v-on:enter="enter" v-on:leave="leave">
    <div class="popup-frame target-frame" @click="$emit('close', false)">
      <div class="js-popup popup-desires reviews-popup-reg target-box" v-if="deleteEvent">
        <i @click="$emit('close', false)" class="fa-close reviews-popup-close"></i>
        <div class="reviews-popup-content">
          <div class="reviews-popup-title">
            <i class="fa-title"></i>
            <h3>Вы точно хотите удалить курс?</h3>
          </div>
          <div class="reviews-popup-button">
            <a href="#" class="logout" @click.prevent="$emit('delete', true)">Удалить <i class="fa-close"></i></a>
            <a href="#" class="cart-reg" @click.prevent="$emit('close', false)"><span>Отменить</span></a>
          </div>
        </div>
      </div>
      <div class="js-popup popup-out reviews-popup-reg target-box" v-if="logoutEvent">
        <i @click="$emit('close', false)" class="fa-close reviews-popup-close"></i>
        <div class="reviews-popup-content">
          <div class="reviews-popup-title">
            <i class="fa-title"></i>
            <h3>Вы хотите выйти из аккаунта?</h3>
          </div>
          <div class="reviews-popup-button">
            <a href="#" @click.prevent="$emit('logout', true)" class="logout">Выйти <i class="fa-out"></i></a>
            <a href="#" @click.prevent="$emit('close', false)" class="cart-reg"><span>Остаться на странице</span></a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  props: {
    deleteEvent: {
      type: Boolean,
      default: false
    },
    logoutEvent: {
      type: Boolean,
      default: false
    },
  },
  methods: {
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
}
</script>