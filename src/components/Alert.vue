<template>
  <div class="alert" v-if="error || notification">
    <p class="error" v-if="error">{{error}}</p>
    <p class="notification" v-if="notification">{{notification}}</p>
  </div>
</template>

<script>
import messages from "@/utils/messages";


export default {
  computed:{
    error(){
      return messages[this.$store.getters.getError]
    },
    notification(){
      return messages[this.$store.getters.getNotification]
    }
  }
}
</script>

<style lang="scss">
.alert{
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 25px;
  left: 0;
  right: 0;
  z-index: 10000;

  .error{
    color: #fff;
    background: tomato;
    padding: 25px;
    margin-bottom: 20px;
  }
  .notification{
    color: #fff;
    background: #6CBAF7;
    padding: 25px;
  }
}
</style>