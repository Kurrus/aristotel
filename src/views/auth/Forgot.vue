<template>
  <form action="#" method="post" class="user-form login-form">
    <input type="text" :class="{invalid: !$v.phone.required && $v.phone.$dirty || !$v.phone.minLength && $v.phone.$dirty}" v-model="phone" v-maska="'+ 998 - ## - ### - ## - ##'" name="phone" class="user-input" placeholder="+ 998 - __ - ___ - __ - __" required>
    <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">Введите номер телефона</div>
    <div class="error" v-if="!$v.phone.minLength && $v.phone.$dirty">Введите коректный номер телефона.</div>
    <div class="user-button">
      <label class="user-form-sub">
        <input type="submit" @click.prevent="submitForgot">Подтвердить
        <i class="fa-out"></i>
      </label>
    </div>
  </form>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      phone: '',
    }
  },
  validations: {
    phone: {
      required,
      minLength: minLength(26)
    },
  },
  created() {
    this.phone = this.$store.getters.getTelNumber
  },
  methods:{
    async submitForgot(){
      this.$v.$touch()
      if (this.$v.$invalid){
        return
      }
      const data = {
        phone: this.phone.replace(/-|\s/g, "").replace(/[{()}]/g, ''),
      }
      try{
        await this.$store.dispatch('forgot', data)
        await this.$router.push('/forgot-code')
      }catch (e) {console.log(e)}
    }
  }
}
</script>