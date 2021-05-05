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
              <p class="courses-main-data"><i class="fa-clock"></i>Последнее обновление: <span>{{ course.last_update }}</span></p>
              <p class="courses-main-data"><i class="fa-user"></i> Проходят курс <span>{{ course.person_count }} человек</span></p>
            </div>

            <div class="courses-main-btn">
              <a href="#" v-if="hasWishlist" class="courses-save">Сохранено<i class="fa-save"></i></a>
              <a href="#" v-else class="courses-save" @click.prevent="pushWishlist(course.id)">Сохранить <i class="fa-save"></i></a>
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
                  <div v-for="(item, index) in course.material" :key="index" class="courses-material-item">
                      <div class="material-header">
                        <h3>{{ item.name }} <span>{{ item.lessons_count }} уроков</span></h3>
                        <span class="courses-plus" @click="item.open = !item.open"><i class="fa-title"></i></span>
                      </div>
                      <transition v-on:enter="enter" v-on:leave="leave">
                        <div v-show="item.open"  class="material-body">
                          <div v-for="les in item.lessons" :key="les.id" class="material-body-item">
                            <p class="single-complet">
                              <svg v-if="les.process === 'new'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.75 3C10.75 2.58579 11.0858 2.25 11.5 2.25H16.5C16.9142 2.25 17.25 2.58579 17.25 3V21C17.25 21.4142 16.9142 21.75 16.5 21.75H11.5C11.0858 21.75 10.75 21.4142 10.75 21V3ZM12.25 3.75V20.25H15.75V3.75H12.25Z" fill="#CBCBDE"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 3C15.75 2.58579 16.0858 2.25 16.5 2.25H21.5C21.9142 2.25 22.25 2.58579 22.25 3V21C22.25 21.4142 21.9142 21.75 21.5 21.75H16.5C16.0858 21.75 15.75 21.4142 15.75 21V3ZM17.25 3.75V20.25H20.75V3.75H17.25Z" fill="#CBCBDE"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50349 2.42778C3.54293 2.02032 3.90182 1.71975 4.30988 1.75243L9.55988 2.17289C9.7603 2.18894 9.94589 2.28479 10.075 2.43894C10.2041 2.59309 10.2659 2.79262 10.2465 2.99275L8.49651 21.0723C8.45707 21.4798 8.09819 21.7803 7.69013 21.7476L2.44013 21.3272C2.2397 21.3111 2.05412 21.2153 1.92502 21.0611C1.79592 20.907 1.73412 20.7075 1.75349 20.5073L3.50349 2.42778ZM4.92544 3.30653L3.31998 19.8929L7.07456 20.1935L8.68003 3.60722L4.92544 3.30653Z" fill="#CBCBDE"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.75C19.4142 6.75 19.75 7.08579 19.75 7.5V9C19.75 9.41421 19.4142 9.75 19 9.75C18.5858 9.75 18.25 9.41421 18.25 9V7.5C18.25 7.08579 18.5858 6.75 19 6.75Z" fill="#CBCBDE"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.75C14.4142 6.75 14.75 7.08579 14.75 7.5V9C14.75 9.41421 14.4142 9.75 14 9.75C13.5858 9.75 13.25 9.41421 13.25 9V7.5C13.25 7.08579 13.5858 6.75 14 6.75Z" fill="#CBCBDE"/>
                              </svg>
                              <img v-if="les.process === 'progress'" src="../../assets/images/icon/play.svg" alt="">
                              <i v-if="les.process === 'finished'" class="fa-check"></i>
                              {{ les.name }}
                            </p>
                            <i v-if="les.is_blocked" class="fa-lock material-lock"></i>
                            <i v-else class="fa-lock-open material-lock-open"></i>
                          </div>
                          <!--                        <div class="material-body-item material-complet">-->
                          <!--                          <p><i class="fa-check"></i> Что такое продажи и как начать продавать лучше всех</p>-->
                          <!--                          <i class="fa-lock-open material-lock-open"></i>-->
                          <!--                        </div>-->
                          <!--                        <div class="material-body-item">-->
                          <!--                          <p><img src="../../assets/images/icon/play.svg" alt=""> Что такое продажи и как начать продавать лучше всех</p>-->
                          <!--                          <i class="fa-lock material-lock"></i>-->
                          <!--                        </div>-->
                          <!--                        <div class="material-body-item">-->
                          <!--                          <p><i class="fa-test"></i> ТЕСТ</p>-->
                          <!--                          <i class="fa-lock material-lock"></i>-->
                          <!--                        </div>-->
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
                    <p>Средняя оценка <span>{{reviews.average_rate || 0}}</span></p>
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
                  <a href="#" v-if="reviews.last_page >= reviews.page" class="reviews-all" @click.prevent="loadMore">еще отзывы <i class="fa-arrow-line"></i></a>
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
                  <div class="courses-cart-star" v-if="reviews">
                    <i v-for="i in 5" :key="i" class="fa-star" :class="{'average-star-active': i <= parseInt(reviews.average_rate || 0)}"></i>
                  </div>
                  <div class="courses-cart-star" v-else>
                    <i v-for="i in 5" :key="i" class="fa-star" :class="{'average-star-active': i <= 0}"></i>
                  </div>
                </div>
                <div class="courses-cart-description">
                  <h3>Этот курс включает</h3>
                  <ul>
                    <li><i class="fa-book"></i>{{count_lesson}} уроков</li>
                    <li v-if="course.permission"><i class="fa-infinity"></i>Безлимитный доступ</li>
                    <li v-if="course.certificate"><i class="fa-certificate"></i>Сертификат</li>
                  </ul>
                </div>
                <div class="courses-cart-btn">
                  <a href="#" class="courses-add-cart">Добавить в корзину <i class="fa-cart-fill"></i></a>
                  <a href="#" class="buy-now js-reviews-reg">Купить сейчас</a>
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
      count_lesson: 0,
      material: [
        { open:false, name: 'Введение', lessons: '1 уроков'},
        { open:false, name: 'Знакомство с прдметом', lessons: '3 уроков'},
        { open:false, name: 'Все отличительные свойства', lessons: '5 уроков'},
        { open:false, name: 'Применения', lessons: '4 уроков'},
        { open:false, name: 'Практика', lessons: '7 уроков'},
        { open:false, name: 'Повторение пройденного материала', lessons: '2 уроков'},
        { open:false, name: 'Подготовка к экзаменационным билетам', lessons: '3 уроков'},
      ],
      domain: process.env.VUE_APP_API_URL,
      hasWishlist: false
    }
  },
  async mounted() {

    await this.$store.dispatch('getCourse', this.$route.params.id)
    await this.$store.dispatch('getReviewsById', {id: this.$route.params.id, page: 1})

    this.course.material.map(e=>{
      this.count_lesson += e.lessons_count
    })
    await this.hasWish()
  },

  computed:{
    course(){
      return this.$store.getters.getCourse
    },
    reviews(){
      return this.$store.getters.getReviews
    },
    wishlist(){
      return this.$store.getters.getWishlist
    },
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

    async loadMore(){
      await this.$store.dispatch('getReviewsById', {id: this.$route.params.id, page: this.reviews.page + 1})
    },

    async pushWishlist(id){
      let obj = {
        courses: [id]
      }
      await this.$store.dispatch('addWishlist', obj)
      await this.hasWish()
    },
    async hasWish(){
      await this.$store.dispatch('getWishlist')
      if (this.wishlist){
        this.wishlist.map(el => {
          el.id === this.course.id ? this.hasWishlist = true : this.hasWishlist = false;
        })
      }
      await this.$store.commit('setLoading', false)
    }
  },
  components:{
    CoursesCard,
  }
}
</script>