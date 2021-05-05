<template>
  <div v-if="user" class="user-content-section">
    <div class="page-sub-title user-sub-title">
      <h2><i class="fa-title"></i>Пригласить друга</h2>
    </div>
    <div class="cart-login">

      <div class="social-login cart-social">
        <h3>Нажмите на ссылку чтобы скопировать</h3>
        <p class="invite-link" @click="copy($event.target.textContent)"><i class="fa-copy"></i><span>{{ loc }}/?referrer={{ user.ref }}</span></p>
      </div>
      <div class="courses-title-frame cart-title invite-title">
        <i class="fa-title"></i>
        <h2>Что нужно сделать чтобы получить бонус</h2>
      </div>
      <div class="social-row">
        <div class="social-login">
          <div class="cart-social">
            <img src="../../assets/images/referral.svg" alt="">
            <h3>Пригласить друга через Реферальную ссылку</h3>
          </div>
        </div>
        <div class="social-login">
          <div class="cart-social">
            <img src="../../assets/images/authentication.svg" alt="">
            <h3>Друг должен Зарегистрироваться</h3>
          </div>
        </div>
        <div class="social-login">
          <div class="cart-social">
            <img src="../../assets/images/credit-card.svg" alt="">
            <h3>Друг должен купить любой курс</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loc: document.location.origin
    }
  },
  computed:{
    user(){
      return this.$store.getters.getUserCredentials
    }
  },
  methods:{
    copy(str){
      const el = document.createElement('textarea');
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.$store.commit('setNotification', 'copy')
    }
  }
}
</script>