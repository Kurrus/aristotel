<template>
  <main v-if="course">
    <div class="courses-page">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/"><i class="fa-home-line"></i></router-link>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/courses">Все курсы</router-link></li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link :to="'/course/'+  course.id ">{{ course.name }}</router-link></li>
        </ul>
      </div>
      <div class="courses-main-info">
        <div class="section-frame">
          <div class="courses-main-content">
            <div class="page-sub-title sub-title-white courses-title">
              <h1><i class="fa-title"></i> {{ course.name }} <span class="desc-lesson">13 УРОКОВ</span></h1>
              <span class="mob-counter-lesson">13 УРОКОВ</span>
              <p>{{ course.category }}</p>
            </div>
            <div class="courses-data-frame">
              <p class="courses-main-data"><i class="fa-clock"></i>Последнее обновление: <span>03.02.2021</span></p>
              <p class="courses-main-data"><i class="fa-user"></i> Проходят курс <span>20 человек</span></p>
            </div>

            <div class="courses-main-btn">
              <a href="#" class="courses-save">Сохранить <i class="fa-save"></i></a>
              <div class="courses-share">
                <p>Поделится</p>
                <ul>
                  <li>
                    <a href="#"><i class="fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-telegram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa-vk"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="courses-content">
        <div class="section-frame">
          <div class="courses-content-frame">
            <div class="courses-content-information">
              <div class="courses-content-item">
                <div class="courses-content-title">
                  <i class="fa-title"></i>
                  <h3>Описание</h3>
                </div>
                <div class="courses-content-body">
                  <div class="courses-content-info">
                    <p class="content-active" :class="{'content-active': descRead}" v-html="course.description"></p>
                    <template v-if="false">

                      <transition v-on:enter="enter" v-on:leave="leave">
                        <p v-if="descRead" class="courses-content-hide">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                      </transition>
                      <span @click="descRead = true" v-if="!descRead" class="courses-plus content-plus"><i class="fa-title"></i></span>
                    </template>
                  </div>
                </div>
              </div>
              <div class="courses-content-item">
                <div class="courses-content-title">
                  <i class="fa-title"></i>
                  <h3>Материалы курса</h3>
                </div>
                <div class="courses-content-body">
                  <div v-for="(item, index) in material" :key="index" class="courses-material-item">
                    <div class="material-header">
                      <h3>{{ item.name }} <span>{{ item.lessons }}</span></h3>
                      <span class="courses-plus" @click="item.open = !item.open"><i class="fa-title"></i></span>
                    </div>
                    <transition v-on:enter="enter" v-on:leave="leave">
                      <div v-show="item.open" class="material-body">
                      <div class="material-body-item material-complet">
                        <p><i class="fa-check"></i> Что такое продажи и как начать продавать лучше всех</p>
                        <i class="fa-lock-open material-lock-open"></i>
                      </div>
                      <div class="material-body-item material-complet">
                        <p><i class="fa-check"></i> Что такое продажи и как начать продавать лучше всех</p>
                        <i class="fa-lock-open material-lock-open"></i>
                      </div>
                      <div class="material-body-item">
                        <p><img src="../../assets/images/icon/play.svg" alt=""> Что такое продажи и как начать продавать лучше всех</p>
                        <i class="fa-lock material-lock"></i>
                      </div>
                      <div class="material-body-item">
                        <p><i class="fa-test"></i> ТЕСТ</p>
                        <i class="fa-lock material-lock"></i>
                      </div>
                    </div>
                    </transition>
                  </div>
                </div>
              </div>
              <div class="courses-content-item">
                <div class="courses-reviews-title">
                  <div class="courses-content-title">
                    <i class="fa-title"></i>
                    <h3>Отзывы о курсе</h3>
                  </div>
                  <a href="#" class="reviews-btn js-reviews-log">Оставить отзыв</a>
                </div>

                <div class="courses-content-body" v-if="reviews">
                  <div class="average-rating">
                    <p>Средняя оценка <span>{{reviews.average_rate}}</span></p>
                    <div class="average-stars">
                      <i v-for="i in 5" :key="i" class="fa-star" :class="{'average-star-active': i <= parseInt(reviews.average_rate)}"></i>
                      <span>({{ reviews.count }})</span>
                    </div>
                  </div>
                  <div class="reviews-list">
                    <div class="reviews-item" v-for="item in reviews.result" :key="item.id">
                      <div class="reviews-info">
                        <div class="reviews-name">
                          <img :src="(item.user_image ? domain : '') + (item.user_image || require('../../assets/images/reviews-photo.png'))" alt="">
                          <h4>{{ item.user_name }}</h4>
                          <span>{{ item.date_after }} дней  назад</span>
                        </div>
                        <div class="reviews-stars">
                          <i v-for="i in 5" :key="i" class="fa-star" :class="{'average-star-active': i <= item.rate}"></i>
                        </div>
                      </div>
                      <p class="reviews-text" v-html="item.review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                  </div>
                  <a href="#" class="reviews-all">еще отзывы <i class="fa-arrow-line"></i></a>
                </div>
              </div>
            </div>
            <div class="courses-content-cart">
              <img :src="course.image" class="courses-content-photo" alt="">
              <div class="courses-cart-info">
                <div class="courses-cart-product">
                  <div class="courses-cart-price">
                    <span>{{ parseInt(course.old_price) }} UZS </span>
                    <p>{{ parseInt(course.price) }} UZS</p>
                  </div>
                  <div class="courses-cart-star">
                    <i v-for="i in 5" :key="i" class="fa-star" :class="{'average-star-active': i <= 5}"></i>
                  </div>
                </div>
                <div class="courses-cart-btn">
                  <a href="#" class="courses-add-cart">Добавить в корзину <i class="fa-cart-fill"></i></a>
                  <a href="#" class="buy-now js-reviews-reg">Купить сейчас</a>
                </div>
                <div class="courses-cart-description">
                  <h3>Этот курс включает</h3>
                  <ul>
                    <li><i class="fa-book"></i>13 уроков</li>
                    <li><i class="fa-infinity"></i>Безлимитный доступ</li>
                    <li><i class="fa-certificate"></i>Сертификат</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="interest">
            <div class="page-sub-title">
              <h2><i class="fa-title"></i> Вас может заинтересовать</h2>
            </div>
            <div class="courses-list">
              <CoursesCard :finish="true"/>
              <CoursesCard :work="true"/>
              <CoursesCard :new_product="true"/>
              <CoursesCard :finish="true"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CoursesCard from "@/components/CoursesCard";
import Velocity from "velocity-animate";


export default {
  data() {
    return {
      descRead: false,
      material: [
        { open:false, name: 'Введение', lessons: '1 уроков'},
        { open:false, name: 'Знакомство с прдметом', lessons: '3 уроков'},
        { open:false, name: 'Все отличительные свойства', lessons: '5 уроков'},
        { open:false, name: 'Применения', lessons: '4 уроков'},
        { open:false, name: 'Практика', lessons: '7 уроков'},
        { open:false, name: 'Повторение пройденного материала', lessons: '2 уроков'},
        { open:false, name: 'Подготовка к экзаменационным билетам', lessons: '3 уроков'},
      ],
      domain: process.env.VUE_APP_API_URL
    }
  },
  async mounted() {
    await this.$store.dispatch('getCourse', this.$route.params.id)
    await this.$store.dispatch('getReviewsById', this.$route.params.id)
  },
  computed:{
    course(){
      return this.$store.getters.getCourse
    },
    reviews(){
      return this.$store.getters.getReviews
    }
  },
  methods:{
    enter: function (el, done) {
      Velocity(el, 'slideDown', {
            duration: 300,
            easing: "easeInBack"
          },
          {complete: done})
    },

    leave: function (el, done) {
      Velocity(el, 'slideUp', {
            duration: 300,
            easing: "easeInBack"
          },
          {complete: done})
    },
  },
  components:{
    CoursesCard
  }
}
</script>