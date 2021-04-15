<template>
  <main>
    <div class="registration">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/"><i class="fa-home-line"></i></router-link>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/registration">Регистрация</router-link></li>
        </ul>
        <div class="page-sub-title reg-title">
          <h1><i class="fa-title"></i>Регистрация</h1>
        </div>
        <div class="registration-content">
          <img src="../../assets/images/registration.png" alt="">
          <form v-if="!codeCheck" class="user-form login-form">
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
          <form v-else class="user-form login-form">
            <input type="text" v-model="code" class="user-input" placeholder="Введите код" required>
            <div class="user-button">
              <label class="user-form-sub" @click.prevent="submitActivate">
                <input type="submit">Подтвердить
                <i class="fa-out"></i>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
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
      code: null,
      codeCheck: false
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
    }
  },
  methods:{
    async submitHandler(){
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      const user = {
        user:{
          phone: this.phone.replace(/-|\s/g, "").replace(/[{()}]/g, ''),
          password: this.password
        }
      }
      try{
        await this.$store.dispatch('registerUser', user)
        this.codeCheck = true
      }catch (e){
        if (e.user.error){
          this.$store.commit('setError', e.user.error)
        }
      }
    }
  }
}
</script>