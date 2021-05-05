<template>
  <form action="#" method="post" class="user-form login-form">
    <input type="text" :class="{invalid: !$v.phone.required && $v.phone.$dirty}" v-model="phone"  name="phone" class="user-input" placeholder="Введите номер телефона или логин" required>
    <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">Введите номер телефона или логин</div>
    <input type="password" :class="{invalid: !$v.password.required && $v.password.$dirty}" v-model="password" name="password" class="user-input" placeholder="Пароль" required>
    <div class="error" v-if="!$v.password.required && $v.password.$dirty">Введите пароль</div>
    <div class="error" v-if="!$v.password.minLength && $v.password.$dirty">Пароль должен иметь минимум {{ $v.password.$params.minLength.min }} символов.</div>
    <router-link to="/forgot" class="log-password">Забыли пароль?</router-link>
    <div class="user-button">
      <label class="user-form-sub">
        <input type="submit" @click.prevent="submitLogin">Вход
        <i class="fa-out"></i>
      </label>
      <router-link to="/registration">Регистрация</router-link>
    </div>
<!--    <div class="social-login">-->
<!--      <h3>Вход через</h3>-->
<!--      <div class="social-login-list">-->
<!--        <a href="#" class="login-facebook"><i class="fa-facebook"></i> Facebook</a>-->
<!--        <a href="#" class="login-telegram"><i class="fa-telegram"></i> Telegram</a>-->
<!--      </div>-->
<!--    </div>-->
  </form>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      phone: '',
      password: '',
    }
  },
  validations: {
    phone: {
      required,
    },
    password: {
      required,
      minLength: minLength(6)
    },
  },

  created() {
    this.phone = this.$store.getters.getTelNumber
  },
  methods:{
    async submitLogin(){
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      const data = {
        phone: this.phone.replace(/-|\s/g, "").replace(/[{()}]/g, ''),
        password: this.password
      }
      try{
        await this.$store.dispatch('login', data)
        await this.$router.push('/')
      }catch (e) {
        await this.$store.commit('setError', 'not-auth')
      }
    },
    yourCallbackFunction (user) {
      // gets user as an input
      // id, first_name, last_name, username,
      // photo_url, auth_date and hash
      console.log(user)
    }
  },
}
</script>