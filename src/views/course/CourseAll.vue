<template>
  <main>
    <div class="courses-all">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <a href="#"><i class="fa-home-line"></i></a>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><a href="registration.html">Все курсы</a></li>
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
                <div class="courses-category-item" v-for="(item, index) in items" :key="index">
                  <h4 @click="openItem(item)" :class="{'courses-active' : item.is_open}">{{ item.name }}<i
                      class="fa-arrow-next"></i></h4>
                  <transition v-on:enter="enter" v-on:leave="leave">
                    <ul v-show="item.is_open">
                      <li v-for="(itm, index) in item.children" :key="index"><a href="#">{{ itm.name }}</a></li>
                    </ul>
                  </transition>
                </div>
              </div>
            </transition>

          </div>
          <div class="courses-all-box">
            <div class="courses-all-list">
              <CoursesCard :finish="true"/>
              <CoursesCard :new_product="true"/>
              <CoursesCard :work="true"/>
              <CoursesCard :finish="true"/>
              <CoursesCard :new_product="true"/>
              <CoursesCard :work="true"/>
              <CoursesCard :finish="true"/>
              <CoursesCard :new_product="true"/>
              <CoursesCard :work="true"/>
              <CoursesCard :finish="true"/>
              <CoursesCard :new_product="true"/>
              <CoursesCard :work="true"/>
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
      items: [
        {
          name: 'Бизнес',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Маркетинг',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Менеджмент',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Психология',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Экономика',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Лидерство',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Бухгалтерия',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Банк',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
        {
          name: 'Личность',
          is_open: false,
          children: [
            {name: 'SMM'},
            {name: 'Стратегия'}
          ]
        },
      ]
    }
  },
  mounted() {
    if (window.innerWidth <= 700){
      this.category_open = !this.category_open
    }
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
    }
  },
  components: {
    CoursesCard
  }
}
</script>