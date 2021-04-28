<template>
  <main>
    <div class="courses-all">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li><router-link to="/"><i class="fa-home-line"></i></router-link></li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/courses">Все курсы</router-link></li>
        </ul>
        <div class="page-sub-title">
          <h1><i class="fa-title"></i>Все курсы</h1>
        </div>
        <div class="courses-all-frame">
          <div class="courses-category">
            <div class="courses-category-title" @click="categoryMobile">
              <h3>Категории курсов</h3>
              <i class="fa-category-square"></i>
            </div>
            <transition v-on:enter="enter" v-on:leave="leave">
              <div class="courses-category-list" v-show="category_open">
                <div class="courses-category-item" v-for="item in category" :key="item.id">
                  <h4 @click="openItem(item), CoursesById(item.id)" :class="{'courses-active' : item.is_open}">{{ item.title }}<i
                      class="fa-arrow-next"></i></h4>
                  <transition v-on:enter="enter" v-on:leave="leave">
                    <ul v-show="item.is_open">
                      <li v-for="itm in item.children" :key="itm.id"><a href="#" @click.prevent="CoursesById(itm.id)">{{ itm.title }}</a></li>
                    </ul>
                  </transition>
                </div>
              </div>
            </transition>

          </div>
          <div class="courses-all-box">
            <div class="courses-all-list">
              <CoursesCard v-for="item in courses" :key="item.id" :data="item" :finish="true"/>
            </div>
            <a href="#" class="courses-all-hide">Еще курсы <i class="fa-arrow-line"></i></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CoursesCard from "@/components/CoursesCard";
import Velocity from 'velocity-animate';

export default {
  data() {
    return {
      category_open: true,
    }
  },
  async mounted() {
    if (window.innerWidth <= 700){
      this.category_open = !this.category_open
    }
    await this.$store.dispatch('getCategory')
    await this.$store.dispatch('getCourses')
  },
  methods: {
    openItem: function (item) {
      item.is_open = !item.is_open
    },

    setClass: function (item) {
      if (item.is_open === true) {
        return 'open'
      }
      return 'close'
    },

    enter: function (el, done) {
      Velocity(el, 'slideDown', {
            duration: 200,
            easing: "easeInBack"
          },
          {complete: done})
    },

    leave: function (el, done) {
      Velocity(el, 'slideUp', {
            duration: 200,
            easing: "easeInBack"
          },
          {complete: done})
    },

    categoryMobile(){
      if (window.innerWidth <= 700){
        this.category_open = !this.category_open
      }
    },
    async CoursesById(id){
      await this.$store.dispatch('getCoursesById', id)
    }
  },
  computed: {
    category() {
      return this.$store.getters.getCategory;
    },
    courses(){
      return this.$store.getters.getCourses;
    }
  },
  components: {
    CoursesCard
  }
}
</script>