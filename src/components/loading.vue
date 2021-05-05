<template>
  <div v-if="loading" class="loading">
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
    <div class="container">
      <span class="object"></span>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    loading(){
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss" scoped>

.loading{
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #F4F6F8;
  z-index: 9;
  @media (max-width: 991px) {
    z-index: 11;
  }
}
.container {
  width: 128px;
  height: 128px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 300px auto;
}

.container:nth-child(1) {
  transform: rotate(0deg);
}

.container:nth-child(2) {
  transform: rotate(18deg);
}

.container:nth-child(3) {
  transform: rotate(36deg);
}

.container:nth-child(4) {
  transform: rotate(54deg);
}

.container:nth-child(5) {
  transform: rotate(72deg);
}

.container:nth-child(6) {
  transform: rotate(90deg);
}

.container:nth-child(7) {
  transform: rotate(108deg);
}

.container:nth-child(8) {
  transform: rotate(126deg);
}

.container:nth-child(9) {
  transform: rotate(144deg);
}

.container:nth-child(10) {
  transform: rotate(162deg);
}

.container:nth-child(11) {
  transform: rotate(180deg);
}

.container:nth-child(12) {
  transform: rotate(198deg);
}

.container:nth-child(13) {
  transform: rotate(216deg);
}

.container:nth-child(14) {
  transform: rotate(234deg);
}

.container:nth-child(15) {
  transform: rotate(252deg);
}

.container:nth-child(16) {
  transform: rotate(270deg);
}

.container:nth-child(17) {
  transform: rotate(288deg);
}

.container:nth-child(18) {
  transform: rotate(306deg);
}

.container:nth-child(19) {
  transform: rotate(324deg);
}

.container:nth-child(20) {
  transform: rotate(342deg);
}

.container .object {
  position: absolute;
  top: 56px;
  left: 112px;
  background: RGB(0,0,0);
  border-radius: 16px;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    width: 16px;
    height: 16px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
}

.container:nth-child(1) .object {
  animation-delay: 0s;
}

.container:nth-child(2) .object {
  animation-delay: 0.05s;
}

.container:nth-child(3) .object {
  animation-delay: 0.1s;
}

.container:nth-child(4) .object {
  animation-delay: 0.15s;
}

.container:nth-child(5) .object {
  animation-delay: 0.2s;
}

.container:nth-child(6) .object {
  animation-delay: 0.25s;
}

.container:nth-child(7) .object {
  animation-delay: 0.3s;
}

.container:nth-child(8) .object {
  animation-delay: 0.35s;
}

.container:nth-child(9) .object {
  animation-delay: 0.4s;
}

.container:nth-child(10) .object {
  animation-delay: 0.45s;
}

.container:nth-child(11) .object {
  animation-delay: 0.5s;
}

.container:nth-child(12) .object {
  animation-delay: 0.55s;
}

.container:nth-child(13) .object {
  animation-delay: 0.6s;
}

.container:nth-child(14) .object {
  animation-delay: 0.65s;
}

.container:nth-child(15) .object {
  animation-delay: 0.7s;
}

.container:nth-child(16) .object {
  animation-delay: 0.75s;
}

.container:nth-child(17) .object {
  animation-delay: 0.8s;
}

.container:nth-child(18) .object {
  animation-delay: 0.85s;
}

.container:nth-child(19) .object {
  animation-delay: 0.9s;
}

.container:nth-child(20) .object {
  animation-delay: 0.95s;
}
</style>