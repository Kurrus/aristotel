<template>
  <div class="alert" v-if="error">
    {{error}}
  </div>
</template>

<script>
export default {
  computed:{
    error(){
      return this.$store.getters.getError
    }
  }
}
</script>

<style lang="scss">
.alert{
  position: fixed;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  background: tomato;
  padding: 25px;
  z-index: 10000;
}
</style>