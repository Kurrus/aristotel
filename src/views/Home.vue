<template>
  <main>
    <div class="main">
      <div class="section-frame">
        <div class="main-frame">
          <div class="main-content">
            <h1>Изучай, развивайся и <br> зарабатывай</h1>
            <p>Регистрируйся и получай доступ к более чем 200 курсам</p>
            <router-link to="/registration"><span>Регистрация</span> <i class="fa-out"></i></router-link>
          </div>
          <img src="../assets/images/main.jpg" class="main-photo" alt="">
          <router-link to="/registration" class="main-btn mob-content">Регистрация <i class="fa-out"></i></router-link>
        </div>
      </div>
    </div>
    <div class="advantages">
      <div class="section-frame">
        <div class="advantages-list">
          <div class="advantages-item">
            <div class="advantages-photo">
              <img src="../assets/images/advantages/advantages-1.png" alt="">
            </div>
            <p>Удобное хранение всех курсов и инфорамации</p>
          </div>
          <div class="advantages-item">
            <div class="advantages-photo">
              <img src="../assets/images/advantages/advantages-2.png" alt="">
            </div>
            <p>Подарки и скидки для постоянных пользователей</p>
          </div>
          <div class="advantages-item">
            <div class="advantages-photo">
              <img src="../assets/images/advantages/advantages-3.png" alt="">
            </div>
            <p>Создавайте свои курсы и выводите деньги</p>
          </div>
        </div>
      </div>
    </div>
    <div class="courses">
      <div class="section-frame">
        <div class="page-sub-title">
          <h2><i class="fa-title"></i>Здравствуйте, выбирайте понравившиеся курсы</h2>
        </div>
        <div class="courses-list">
          <CoursesCard :finish="true" />
          <CoursesCard :new_product="true" />
          <CoursesCard :work="true" />
          <CoursesCard :finish="true" />
          <CoursesCard :new_product="true" />
          <CoursesCard :work="true" />
          <CoursesCard :finish="true" />
          <CoursesCard :new_product="true" />
          <CoursesCard :work="true" />
          <CoursesCard :finish="true" />
          <CoursesCard :new_product="true" />
          <CoursesCard :work="true" />
        </div>
        <a href="/courses" @click.prevent="upTop('/courses')" class="courses-all-btn">Все курсы <i class="fa-arrow-line"></i></a>
      </div>
    </div>
    <div class="certified">
      <div class="section-frame">
        <div class="certified-frame">
          <div class="certified-content">
            <div class="page-sub-title sub-title-white">
              <h2><i class="fa-title"></i> Сертифицированные курсы</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="/certified-courses" @click.prevent="upTop('/certified-courses')" class="certified-desc">Все курсы <i class="fa-arrow-line"></i></a>
          </div>
          <div class="courses-wrapp">
            <VueSlickCarousel v-bind="settings"  class="courses-slider">
              <CoursesCard :slide="true" />
              <CoursesCard :slide="true" />
              <CoursesCard :slide="true" />
              <CoursesCard :slide="true" />
              <template #prevArrow>
                <span class="slider-arrow slider-arrow-prev courses-prev">
                  <i class="fa-arrow-prev"></i>
                </span>
              </template>
              <template #nextArrow>
                <span class="slider-arrow slider-arrow-next courses-next">
                  <i class="fa-arrow-next"></i>
                </span>
              </template>
            </VueSlickCarousel>
          </div>
          <a href="/certified-courses" @click.prevent="upTop('/certified-courses')" class="certified-mob">Все сертифицированные курсы <i class="fa-arrow-line"></i></a>
        </div>
      </div>
    </div>
    <div class="soon">
      <img src="../assets/images/bg/soon-bg.svg" class="soon-icon" alt="">
      <div class="section-frame">
        <div class="soon-frame">
          <div class="courses-wrapp">
            <VueSlickCarousel v-bind="settings"  class="courses-slider">

              <CoursesCard :slide="true" />
              <CoursesCard :slide="true" />
              <CoursesCard :slide="true" />
              <CoursesCard :slide="true" />


              <template #prevArrow>
                <span class="slider-arrow slider-arrow-prev courses-prev">
                  <i class="fa-arrow-prev"></i>
                </span>
              </template>
              <template #nextArrow>
                <span class="slider-arrow slider-arrow-next courses-next">
                  <i class="fa-arrow-next"></i>
                </span>
              </template>
            </VueSlickCarousel>
          </div>
          <div class="soon-content">
            <div class="page-sub-title">
              <h2><i class="fa-title"></i> Скоро на сайте</h2>
            </div>
            <p>К вашему пристовлению эти курсы скором времени будут опубликованы на нашем сайте будьте терпеливы!! С уважениет Аристотель </p>
            <a href="/certified-courses" @click.prevent="upTop('/certified-courses')" class="desc-soon">Все сертифицированные курсы <i class="fa-arrow-line"></i></a>
          </div>
        </div>
        <a href="/courses" @click.prevent="upTop('/courses')" class="mob-soon">Все курсы<i class="fa-arrow-line"></i></a>
      </div>
    </div>
    <div class="referal-program">
      <div class="section-frame">
        <div class="referal-program-content">
          <img src="../assets/images/referal.jpg" class="referal-program-photo" alt="">
          <div class="referal-program-info">
            <div class="page-sub-title referal-program-title">
              <h2><i class="fa-title"></i> Реферальная программа</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <a href="#" class="desc-referal">Присоединиться <i class="fa-arrow-line"></i></a>
          </div>
        </div>
        <a href="#" class="mob-referal">Присоединиться <i class="fa-arrow-line"></i></a>
      </div>
    </div>
    <div class="news">
      <div class="section-frame">
        <div class="page-sub-title sub-title-white">
          <h2><i class="fa-title"></i> Новости</h2>
        </div>
        <p class="news-descriptor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div class="news-wrapp">
          <VueSlickCarousel v-bind="settings_news"  class="news-slider">
            <div class="news-slide news-item">
              <div class="news-photo">
                <img src="../assets/images/news/news.jpg" alt="">
              </div>
              <div class="news-info">
                <div class="news-item-title">
                  <h3>Заголовок новости</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                </div>
                <div class="news-date">
                  <span>28.01.2021</span>
                  <a href="#">Читать</a>
                </div>
              </div>
            </div>
            <div class="news-slide news-item">
              <div class="news-photo">
                <img src="../assets/images/news/news.jpg" alt="">
              </div>
              <div class="news-info">
                <div class="news-item-title">
                  <h3>Заголовок новости</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                </div>
                <div class="news-date">
                  <span>28.01.2021</span>
                  <a href="#">Читать</a>
                </div>
              </div>
            </div>
            <div class="news-slide news-item">
              <div class="news-photo">
                <img src="../assets/images/news/news.jpg" alt="">
              </div>
              <div class="news-info">
                <div class="news-item-title">
                  <h3>Заголовок новости</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                </div>
                <div class="news-date">
                  <span>28.01.2021</span>
                  <a href="#">Читать</a>
                </div>
              </div>
            </div>
            <div class="news-slide news-item">
              <div class="news-photo">
                <img src="../assets/images/news/news.jpg" alt="">
              </div>
              <div class="news-info">
                <div class="news-item-title">
                  <h3>Заголовок новости</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                </div>
                <div class="news-date">
                  <span>28.01.2021</span>
                  <a href="#">Читать</a>
                </div>
              </div>
            </div>
            <div class="news-slide news-item">
              <div class="news-photo">
                <img src="../assets/images/news/news.jpg" alt="">
              </div>
              <div class="news-info">
                <div class="news-item-title">
                  <h3>Заголовок новости</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                </div>
                <div class="news-date">
                  <span>28.01.2021</span>
                  <a href="#">Читать</a>
                </div>
              </div>
            </div>
            <div class="news-slide news-item">
              <div class="news-photo">
                <img src="../assets/images/news/news.jpg" alt="">
              </div>
              <div class="news-info">
                <div class="news-item-title">
                  <h3>Заголовок новости</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....</p>
                </div>
                <div class="news-date">
                  <span>28.01.2021</span>
                  <a href="#">Читать</a>
                </div>
              </div>
            </div>
            <template #prevArrow>
                <span class="slider-arrow slider-arrow-prev courses-prev">
                  <i class="fa-arrow-prev"></i>
                </span>
            </template>
            <template #nextArrow>
                <span class="slider-arrow slider-arrow-next courses-next">
                  <i class="fa-arrow-next"></i>
                </span>
            </template>
          </VueSlickCarousel>
        </div>
        <a href="#" class="news-all">Все новости <i class="fa-arrow-line"></i></a>
      </div>
    </div>
  </main>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import CoursesCard from "@/components/CoursesCard";
export default {
  name: 'Home',
  data() {
    return {
      settings: {
        slidesToShow: 2,
        infinite: true,
        adaptiveHeight: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      },
      settings_news: {
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      }
    }
  },
  methods:{
    upTop(e){
      window.scrollTo(0, 0)
      this.$router.push(e)
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('getUserCredentials')
    }catch (e){
      // localStorage.removeItem('access')
    }
  },
  components: {
    VueSlickCarousel,
    CoursesCard
  }
}
</script>
