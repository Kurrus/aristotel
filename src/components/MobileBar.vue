<template>
  <div class="mob-bar">
    <div class="section-frame">
      <ul class="mob-bottom-link">
        <li>
          <a href="#">
            <i class="fa-home"></i>
            <p>Главная</p>
          </a>
        </li>
        <li>
          <a href="courses-all.html" class="js-popup-courses">
            <i class="fa-list"></i>
            <p>Курсы</p>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-cart"></i>
            <p>Корзина</p>
          </a>
        </li>
        <li @click.prevent="$emit('active', active = true)">
          <a href="user.html" class="js-popup-user">
            <i class="fa-out"></i>
            <p>Профиль</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
}
</script>