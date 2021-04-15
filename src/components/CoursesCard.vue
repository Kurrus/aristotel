<template>
  <div class="courses-item" :class="{'courses-slide': slide, 'courses-item-finish': finish, 'courses-item-opacity': opacity}">
    <div v-if="work || finish || new_product || load || opacity" class="courses-item-status" :class="{'status-work': work, 'status-finish': finish, 'status-new': new_product, 'status-load': load}">
      <img v-if="work" src="../assets/images/status/work.svg" alt="">
      <img v-if="finish || opacity" src="../assets/images/status/finish.svg" alt="">
      <img v-if="new_product" src="../assets/images/status/new.svg" alt="">
      <img v-if="load" src="../assets/images/status/load.svg" alt="">
      <span v-if="work">В процессе</span>
      <span v-if="finish || opacity">Завершено</span>
      <span v-if="new_product">Новинка</span>
      <span v-if="load">Курс загружается</span>
    </div>
    <i v-if="close" @click="$emit('close', true)" class="courses-del-desires js-popup-desires fa-close"></i>
    <div class="courses-item-photo" >
      <img :src="require(`../assets/images/courses/courses-2.jpg`)" alt="">
      <div v-if="work" class="courses-item-progres">
        <span class="progres-line" style="width: 33%;"></span>
      </div>
    </div>
    <div class="courses-item-content">
      <div class="courses-info">
        <p>Бизнес администрирование</p>
        <a :href="`${url || '/course'}/2`"  @click.prevent="upTop(`${url || '/course'}/2`)">Ведение деловых отчетов</a>
      </div>
      <div class="courses-purchase">
        <div class="courses-price">
          <span>10 000 UZS </span>
          <p>8.000 UZS</p>
        </div>
        <a :href="`${url || '/course'}/2`"  @click.prevent="upTop(`${url || '/course'}/2`)" class="courses-btn">Читать</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: {
      type: Boolean,
      default: false
    },
    work: {
      type: Boolean,
      default: false
    },
    finish: {
      type: Boolean,
      default: false
    },
    new_product: {
      type: Boolean,
      default: false
    },
    load: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ''
    },
  },
  methods:{
    upTop(e){
      window.scrollTo(0, 0)
      this.$router.push(e)
    }
  }
}
</script>