<template>
  <div class="user-content-section" v-if="faq">
    <div class="page-sub-title user-sub-title">
      <h2><i class="fa-title"></i>Вопросы и ответы</h2>
    </div>
    <div class="user-faq">
      <div class="courses-material-item user-faq-item" v-for="(item, index) in faq" :key="index">
        <div @click="item.is_active = !item.is_active" :class="{'courses-active' : item.is_open}" class="material-header">
          <h3>{{ item.question }}</h3>
          <span class="courses-plus"><i class="fa-title"></i></span>
        </div>
        <transition v-on:enter="enter" v-on:leave="leave">
          <div v-show="!item.is_active" class="material-body user-faq-body" style="display: none;">
            <p>{{item.answer}}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  methods: {
    enter: function (el, done) {
      Velocity(el, 'slideDown', {
            duration: 200,
            easing: "easeInBack"
          },
          {complete: done})
    },
    leave: function (el, done) {
      Velocity(el, 'slideUp', {
            duration: 200,
            easing: "easeInBack"
          },
          {complete: done})
    },
  },
  computed: {
    faq() {
      return this.$store.getters.getFaq;
    }
  },
}
</script>