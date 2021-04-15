<template>
  <main>
    <div class="registration">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/"><i class="fa-home-line"></i></router-link>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/login">Вход</router-link></li>
        </ul>
        <div class="page-sub-title reg-title">
          <h1><i class="fa-title"></i>Вход</h1>
        </div>
        <div class="registration-content">
          <img src="../../assets/images/registration.png" alt="">
          <form action="#" method="post" class="user-form login-form">
            <input type="text" name="login" class="user-input" placeholder="Логин или телефон" required>
            <input type="password" name="password" class="user-input" placeholder="Пароль" required>
            <a href="#" class="log-password">Забыли пароль?</a>
            <div class="user-button">
              <label class="user-form-sub">
                <input type="submit">Вход
                <i class="fa-out"></i>
              </label>
              <router-link to="/registration">Регистрация</router-link>
            </div>
            <div class="social-login">
              <h3>Вход через</h3>
              <div class="social-login-list">
                <a href="#" class="login-facebook"><i class="fa-facebook"></i> Facebook</a>
                <a href="#" class="login-telegram"><i class="fa-telegram"></i> Telegram</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>