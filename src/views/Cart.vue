<template>
  <main>
    <div class="cart">
      <div class="section-frame">
        <div class="page-sub-title">
          <h1><i class="fa-title"></i>Корзина</h1>
        </div>
        <div class="cart-list">
          <div class="cart-item">
            <div class="cart-photo">
              <img src="../assets/images/cart/cart-1.jpg" alt="">
            </div>
            <div class="cart-info">
              <h3>Ведение деловых отчетов</h3>
              <p><span>8.000</span> UZS</p>
            </div>
            <a href="#" class="cart-delete">
              <i class="fa-close"></i>
            </a>
          </div>
          <div class="cart-item">
            <div class="cart-photo">
              <img src="../assets/images/cart/cart-1.jpg" alt="">
            </div>
            <div class="cart-info">
              <h3>Ведение деловых отчетов</h3>
              <p><span>8.000</span> UZS</p>
            </div>
            <a href="#" class="cart-delete">
              <i class="fa-close"></i>
            </a>
          </div>
        </div>
        <div class="cart-total">
          <p>Общая стоимость:</p>
          <span><b>16.000 </b>  UZS</span>
        </div>
        <div class="cart-login">
          <div class="courses-title-frame cart-title">
            <i class="fa-title"></i>
            <h2>Пожалуйста зарегистрируйтесь или войдите в аккаунт, что бы купить курс</h2>
          </div>
          <router-link to="/login" class="cart-log">Вход <i class="fa-out"></i></router-link>
          <router-link to="/registration" class="cart-reg"><span>Регистрация</span></router-link>
          <div class="social-login cart-social">
            <h3>Вход через</h3>
            <div class="social-login-list">
              <a href="#" class="login-facebook"><i class="fa-facebook"></i> Facebook</a>
              <a href="#" class="login-telegram"><i class="fa-telegram"></i> Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>