<template>
  <form class="user-form login-form">
    <input type="text" :class="{invalid: !$v.phone.required && $v.phone.$dirty || !$v.phone.minLength && $v.phone.$dirty}" v-model="phone" v-maska="'+ 998 - ## - ### - ## - ##'" name="phone" class="user-input" placeholder="+ 998 - __ - ___ - __ - __" required>
    <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">Введите номер телефона</div>
    <div class="error" v-if="!$v.phone.minLength && $v.phone.$dirty">Введите коректный номер телефона.</div>
    <input type="password" :class="{invalid: !$v.password.required && $v.password.$dirty}" v-model="password" name="password" class="user-input" placeholder="Пароль" required>
    <div class="error" v-if="!$v.password.required && $v.password.$dirty">Введите пароль</div>
    <div class="error" v-if="!$v.password.minLength && $v.password.$dirty">Пароль должен иметь минимум {{ $v.password.$params.minLength.min }} символов.</div>
    <input type="password" :class="{invalid: !$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty}" v-model="repeatPassword" name="password" class="user-input" placeholder="Повторите пароль" required>
    <div class="error" v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty">Пароли не совпадают</div>
    <label class="check-label" @click="check = !check">
      <span class="user-check" :class="{'check-active': check}">
          <i class="fa-check"></i>
          <input type="checkbox" required>
      </span>
      <p @click="check = !check">Я принимаю условия и даю согласие на обработку персональных данны</p>
    </label>
    <div class="user-button">
      <label class="user-form-sub" @click.prevent="submitHandler">
        <input type="submit">Регистрация
        <i class="fa-out"></i>
      </label>
      <router-link to="/login">У меня есть аккаунт</router-link>
    </div>
  </form>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      phone: '',
      password: '',
      repeatPassword: '',
      check: false,
    }
  },
  validations: {
    phone: {
      required,
      minLength: minLength(26)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
  },
  created() {
    this.phone = this.$store.getters.getTelNumber
  },
  methods:{
    async submitHandler(){
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      const user = {
        user:{
          referrer: localStorage.getItem('referrer') || '',
          phone: this.phone.replace(/-|\s/g, "").replace(/[{()}]/g, ''),
          password: this.password
        }
      }
      try{
        await this.$store.dispatch('registerUser', user)
        await this.$router.push('/code')
      }catch (e) {console.log(e)}
    }
  }
}
</script>