<template>
  <form class="user-form login-form">
    <span style="font-size: 14px; margin-bottom: 20px; display:block; color: #9293BA;">На этот номер {{ phone }} отправлено сообщение с кодом подтверждения</span>
    <input type="text" v-maska="'####'" :class="{invalid: !$v.code.required && $v.code.$dirty}" v-model="code" class="user-input" placeholder="Введите код" required>
    <div class="error" v-if="!$v.code.required && $v.code.$dirty">Введите код подтверждения</div>
    <router-link style="font-size: 14px; margin-bottom: 20px; display:block; color: #9293BA; text-decoration: underline" to="/registration">Ввести другой номер</router-link>
    <div class="user-button">
      <label class="user-form-sub" @click.prevent="submitActivate">
        <input type="submit">Подтвердить
        <i class="fa-out"></i>
      </label>
    </div>
  </form>
</template>

<script>
import {required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      code: false
    }
  },
  validations: {
    code: {
      required
    }
  },
  mounted() {
    if (!this.phone){
      this.$router.push('/registration')
    }
  },
  methods:{
    async submitActivate(){
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      const user = {
        phone: this.phone,
        sms: this.code
      }
      try{
        await this.$store.dispatch('forgotCode', user)
        await this.$router.push('/new-password')
      }catch (e) {console.log(e)}
    }
  },
  computed:{
    phone(){
      return this.$store.getters.getTelNumber
    }
  }
}
</script>