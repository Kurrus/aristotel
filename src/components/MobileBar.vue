<template>
  <div class="mob-bar">
    <div class="section-frame">
      <ul class="mob-bottom-link">
        <li>
          <a href="#">
            <i class="fa-home"></i>
            <p>Главная</p>
          </a>
        </li>
        <li>
          <a href="courses-all.html" class="js-popup-courses">
            <i class="fa-list"></i>
            <p>Курсы</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-cart"></i>
            <p>Корзина</p>
          </a>
        </li>
        <li v-if="token && user" @click.prevent="$emit('active', active = true)">
          <a href="user.html" class="js-popup-user">
            <i class="fa-user"></i>
            <p>Профиль</p>
            <svg class="invalid" v-if="user.first_name === '' || user.last_name === '' || user.full_name === '' || user.date_birth === '' || user.login === '' || user.city === '' || user.street === ''" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
              <path fill="currentColor" d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"></path>
            </svg>
          </a>
        </li>
        <li v-else>
          <router-link to="/login" class="js-popup-user">
            <i class="fa-out"></i>
            <p>Вход</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      token: !!localStorage.getItem('access')
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUserCredentials;
    }
  },
}
</script>