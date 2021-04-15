<template>
  <div class="user-content-section">
    <div class="page-sub-title user-sub-title">
      <h2><i class="fa-title"></i>Мои сертификаты</h2>
    </div>
    <div class="courses-all-list">
      <CoursesCard :work="true" />
      <CoursesCard :work="true" />
      <CoursesCard :work="true" />
      <CoursesCard :work="true" />
      <CoursesCard :work="true" />
      <CoursesCard :work="true" />
    </div>
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