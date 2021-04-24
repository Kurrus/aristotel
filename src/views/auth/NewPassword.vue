<template>
  <form class="user-form login-form">
    <input type="password" :class="{invalid: !$v.password.required && $v.password.$dirty}" v-model="password" name="password" class="user-input" placeholder="Пароль" required>
    <div class="error" v-if="!$v.password.required && $v.password.$dirty">Введите пароль</div>
    <div class="error" v-if="!$v.password.minLength && $v.password.$dirty">Пароль должен иметь минимум {{ $v.password.$params.minLength.min }} символов.</div>
    <input type="password" :class="{invalid: !$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty}" v-model="repeatPassword" name="password" class="user-input" placeholder="Повторите пароль" required>
    <div class="error" v-if="!$v.repeatPassword.sameAsPassword && $v.repeatPassword.$dirty">Пароли не совпадают</div>
    <div class="user-button">
      <label class="user-form-sub" @click.prevent="submitHandler">
        <input type="submit">Подтвердить
        <i class="fa-out"></i>
      </label>
    </div>
  </form>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      code: '',
      phone: '',
      password: '',
      repeatPassword: '',
    }
  },
  validations: {
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
    this.code = this.$store.getters.getCode
  },
  methods:{
    async submitHandler(){
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      const user = {
        phone: this.phone,
        sms: this.code,
        password1: this.password,
        password2: this.repeatPassword
      }
      try{
        await this.$store.dispatch('forgotNewPassword', user)
        await this.$router.push('/login')
      }catch (e) {console.log(e)}
    }
  }
}
</script>