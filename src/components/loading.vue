<template>
  <div class="loader">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body {
  background-color: black;
}

.loader {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  position: relative;
}

.blob {
  position: absolute;
  left: 180px;
  top: 180px;
  width: 10px;
  height: 10px;
  border-radius: 15px;
  background-color: #040154;
  content: "";
  transform: translateY(-40px);
  @for $i from 1 to 8 {
    &:nth-child(#{$i}) {
      animation: spin 1.5s infinite ease-in-out;
      animation-delay: #{$i/10}s;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg) translateY(-40px) rotate(0deg) ;
  }
  70% {
    transform: rotate(360deg) translateY(-40px) rotate(-360deg);
  }
}
</style>