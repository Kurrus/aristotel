<template>
  <div class="user-content-section">
    <div class="page-sub-title user-sub-title">
      <h2><i class="fa-title"></i>Профиль</h2>
    </div>
    <div class="profile-list">
      <div class="profile-item">
        <div class="profile-title">
          <div class="courses-title-frame cart-title">
            <i class="fa-title"></i>
            <h2>Личные данные</h2>
          </div>
          <i class="fa-reset profile-icon"></i>
        </div>
        <form action="#" method="post" class="user-form user-form-input">
          <input type="text" name="" class="user-profile-input" placeholder="Имя" required>
          <input type="text" name="" class="user-profile-input" placeholder="Отчество" required>
          <input type="text" name="" class="user-profile-input" placeholder="Фамилия" required>
          <div class="date-label">
            <p>Дата рождения</p>
            <input type="text" name="" class="date-input day-input" placeholder="20" required>
            <input type="text" name="" class="date-input month-input" placeholder="ноябрь" required>
            <input type="text" name="" class="date-input year-input" placeholder="1999" required>
          </div>
          <input type="text" name="" class="user-profile-input input-mask" v-maska="'+ 998 - ## - ### - ## - ##'" placeholder="+ 998 - __ - ___ - __ - __" required>
          <div></div>
          <label class="user-profile-select">
            <select name="city" >
              <option value="">г. Ташкент</option>
              <option value="">г. Чирчик</option>
              <option value="">г. Абай</option>
              <option value="">г. Токай</option>
            </select>
            <i class="fa-arrow-next"></i>
          </label>
          <input type="text" name="street" class="user-profile-input" placeholder="ул. Курская, 24 / 2" required>
        </form>
      </div>
      <div class="profile-item">
        <div class="profile-title">
          <div class="courses-title-frame cart-title">
            <i class="fa-title"></i>
            <h2>Пароль</h2>
          </div>
          <i class="fa-reset profile-icon"></i>
        </div>
        <form action="#" method="post" class="user-form user-form-password">
          <input type="password" name="" class="user-profile-input" placeholder="Старый пароль" required>
          <input type="password" name="" class="user-profile-input" placeholder="Новый пароль" required>
          <input type="password" name="" class="user-profile-input" placeholder="Повторите новый пароль" required>
          <label class="user-sub">
            <input type="submit">Применить
          </label>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>