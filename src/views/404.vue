<template>
  <main>
    <div class="page-404">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <a href="#"><i class="fa-home-line"></i></a>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/404">404</router-link></li>
        </ul>
        <div class="page-sub-title">
          <h1><i class="fa-title"></i>Страница не найдена</h1>
        </div>
        <div class="page-404-frame">
          <router-link to="/" class="arrow-back-404"><i class="fa-arrow-line-back"></i> Назад</router-link>
          <img src="../assets/images/404.png" class="photo-404" alt="">
          <router-link to="/" class="back-main-page">На главную <i class="fa-arrow-line"></i></router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>