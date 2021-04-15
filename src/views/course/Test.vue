<template>
  <main>
    <div class="courses-page">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/"><i class="fa-home-line"></i></router-link>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/user">Мой кабинет</router-link></li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/test/2">Ведение деловых отчетов</router-link></li>
        </ul>
      </div>
      <div class="courses-main-info">
        <div class="section-frame">
          <div class="courses-main-content">
            <div class="page-sub-title sub-title-white courses-title">
              <div class="courses-title-star">
                <h1><i class="fa-title"></i> Ведение деловых отчетов <span class="desc-lesson">13 УРОКОВ</span></h1>
                <span class="mob-counter-lesson">13 УРОКОВ</span>
              </div>

              <p>Бизнес администрирование</p>
            </div>
            <div class="courses-data-frame courses-single-data-frame">
              <p class="courses-main-data">? Количество вопросов <span>9</span></p>
              <p class="courses-main-data"> Количество попыток <span>3</span>/5</p>
            </div>
          </div>
        </div>
      </div>
      <div class="courses-content">
        <div class="section-frame">
          <div class="courses-test">
            <ul class="courses-test-counter">
              <li class="active-step">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
            <div class="courses-test-question">
              <div class="courses-title-frame cart-title courses-test-title">
                <i class="fa-title"></i>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?</h2>
              </div>
              <div class="test-question-list">
                <div class="test-question-item">
                  <div class="cart-ckeck question-ckeck">
                    <div class="cart-ckeck-icon"></div>
                    <p><b>А.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div class="test-question-item">
                  <div class="cart-ckeck question-ckeck">
                    <div class="cart-ckeck-icon"></div>
                    <p><b>В.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div class="test-question-item">
                  <div class="cart-ckeck question-ckeck">
                    <div class="cart-ckeck-icon"></div>
                    <p><b>Б.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
                <div class="test-question-item">
                  <div class="cart-ckeck question-ckeck">
                    <div class="cart-ckeck-icon"></div>
                    <p><b>Г.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>

            </div>
            <div class="courses-test-btn">
              <a href="#" class="courses-test-arrow"><i class="fa-arrow-line-back"></i> предыдущий вопрос</a>
              <a href="#" class="courses-test-reply">ответить <i class="fa-check"></i></a>
              <a href="#" class="courses-test-arrow">Следущий вопрос<i class="fa-arrow-line"></i></a>
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