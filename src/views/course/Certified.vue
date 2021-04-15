<template>
  <main>
    <div class="certified-courses">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/"><i class="fa-home-line"></i></router-link>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/certified">Ведение деловых отчетов</router-link></li>
        </ul>
        <div class="page-sub-title">
          <h1><i class="fa-title"></i>Ведение деловых отчетов</h1>
        </div>
        <div class="certified-courses-title">
          <div class="courses-title-frame">
            <i class="fa-title"></i>
            <h2>Сертифицированный курс</h2>
          </div>
          <p>Вам нужно пройти все курсы,
            что б сдать тест на главный сертификат</p>
        </div>
        <div class="courses-list">
          <CoursesCard :finish="true" :opacity="true" />
          <CoursesCard :work="true" />
          <CoursesCard :new_product="true" />
          <CoursesCard :work="true" />
          <CoursesCard :finish="true" />
          <CoursesCard :finish="true" />
          <CoursesCard :finish="true" />
        </div>
      </div>
      <div class="certified-descripter">
        <div class="section-frame">
          <div class="descripter-content">
            <img src="../../assets/images/certified-course.jpg" class="descripter-photo" alt="">
            <div class="descripter-info">
              <div class="page-sub-title">
                <h2><i class="fa-title"></i> Lorem ipsum</h2>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <a href="#" class="certified-desc">Начать тест <i class="fa-arrow-line"></i></a>
            </div>
          </div>
          <a href="#" class="certified-mob-page">Начать тест <i class="fa-arrow-line"></i></a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import CoursesCard from "@/components/CoursesCard";


export default {
  components:{CoursesCard}
}
</script>