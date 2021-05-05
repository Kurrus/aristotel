<template>
  <div v-if="data" class="courses-item" :class="{'courses-slide': slide, 'courses-item-finish': data.status.toUpperCase() === 'FINISHED', 'courses-item-opacity': opacity}">
    <div
        v-if="data.status.toUpperCase() === 'FINISHED'|| data.status.toUpperCase() === 'NEW'|| data.status.toUpperCase() === 'DOWNLOADING'" class="courses-item-status"
        :class="{'status-work': work, 'status-finish': data.status.toUpperCase() === 'FINISHED', 'status-new': data.status.toUpperCase() === 'NEW', 'status-load': data.status.toUpperCase() === 'DOWNLOADING'}"
    >
      <img v-if="work" src="../assets/images/status/work.svg" alt="">
      <img v-if="data.status.toUpperCase() === 'FINISHED' || opacity" src="../assets/images/status/finish.svg" alt="">
      <img v-if="data.status.toUpperCase() === 'NEW'" src="../assets/images/status/new.svg" alt="">
      <img v-if="data.status.toUpperCase() === 'DOWNLOADING'" src="../assets/images/status/load.svg" alt="">
      <span v-if="work">В процессе</span>
      <span v-if="data.status.toUpperCase() === 'FINISHED' || opacity">Завершено</span>
      <span v-if="data.status.toUpperCase() === 'NEW'">Новинка</span>
      <span v-if="data.status.toUpperCase() === 'DOWNLOADING'">Курс загружается</span>
    </div>
    <i v-if="close" @click="$emit('close', {event: true, id: data.id})" class="courses-del-desires js-popup-desires fa-close"></i>
    <div class="courses-item-photo" >

      <img :src="domain+data.image" alt="">
      <div v-if="work" class="courses-item-progres">
        <span class="progres-line" style="width: 33%;"></span>
      </div>
    </div>
    <div class="courses-item-content">
      <div class="courses-info">
        <p>{{ data.category }}</p>
        <a :href="`${url || '/course'}/${data.id}`"  @click.prevent="upTop(`${url || '/course'}/${data.id}`)">{{ data.name }}</a>
      </div>
      <div class="courses-purchase">
        <div class="courses-price">
          <span v-if="data.old_price">{{ parseInt(data.old_price) }}UZS </span>
          <p>{{ parseInt(data.price) }} UZS</p>
        </div>
        <a :href="`${url || '/course'}/2`"  @click.prevent="upTop(`${url || '/course'}/2`)" class="courses-btn">Читать</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domain: process.env.VUE_APP_API_URL
    }
  },
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
    data: {},

  },
  methods:{
    upTop(e){
      window.scrollTo(0, 0)
      this.$router.push(e)
    }
  }
}
</script>