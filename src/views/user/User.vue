<template>
  <div class="user-content-section">
    <div class="user-shape-4">
      <div class="user-shape">
        <div class="user-shape-icons">
          <i class="fa-title shape-icon-bg"></i>
          <i class="fa-book shape-icon"></i>
        </div>
        <div class="user-shape-content">
          <b>4</b>
          <p>Курсы, которые вы купили</p>
        </div>
      </div>
      <div class="user-shape">
        <div class="user-shape-icons">
          <i class="fa-title shape-icon-bg"></i>
          <img src="../../assets/images/icon/play.svg" class="shape-icon" alt="">
        </div>
        <div class="user-shape-content">
          <b>2</b>
          <p>Курсы в процессе изучения</p>
        </div>
      </div>
      <div class="user-shape">
        <div class="user-shape-icons">
          <i class="fa-title shape-icon-bg"></i>
          <i class="fa-timer shape-icon"></i>
        </div>
        <div class="user-shape-content">
          <b>4</b>
          <p>Пройденные курсы</p>
        </div>
      </div>
      <div class="user-shape">
        <div class="user-shape-icons">
          <i class="fa-title shape-icon-bg"></i>
          <i class="fa-timer shape-icon"></i>
        </div>
        <div class="user-shape-content">
          <b>2</b>
          <p>Сертификата</p>
        </div>
      </div>
    </div>
    <div class="user-recommendation">
      <div class="page-sub-title">
        <h2><i class="fa-title"></i>Мои курсы</h2>
      </div>
      <p class="recommendation-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <div class="courses-all-list">
        <CoursesCard :finish="true" />
        <CoursesCard :new_product="true" />
        <CoursesCard :work="true" />
        <CoursesCard :finish="true" />
        <CoursesCard :new_product="true" />
        <CoursesCard :work="true" />
      </div>
    </div>
<!--    <div class="user-recommendation">-->
<!--      <div class="my-courses">-->
<!--        <div class="page-sub-title">-->
<!--          <h2><i class="fa-title"></i>Мои собственные курсы</h2>-->
<!--        </div>-->
<!--        <a href="#">Добавить курс <i class="fa-arrow-down"></i></a>-->
<!--      </div>-->

<!--      <p class="recommendation-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
<!--        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>-->
<!--      <div class="courses-all-list">-->
<!--        <CoursesCard :load="true" />-->
<!--        <CoursesCard :load="true" />-->
<!--        <CoursesCard :load="true" />-->
<!--        <CoursesCard :load="true" />-->
<!--        <CoursesCard :load="true" />-->
<!--        <CoursesCard :load="true" />-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import CoursesCard from "@/components/CoursesCard";


export default {
  components:{
    CoursesCard
  }
}
</script>