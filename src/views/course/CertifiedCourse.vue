<template>
  <main>
    <div class="certified-courses">
      <div class="section-frame">
        <ul class="breadcrumbs">
          <li>
            <router-link to="/"><i class="fa-home-line"></i></router-link>
          </li>
          <li><i class="fa-arrow-next"></i></li>
          <li><router-link to="/certified-courses">Сертифицированные курсы</router-link></li>
        </ul>
        <div class="page-sub-title certified-sub-title">
          <h1><i class="fa-title"></i>Сертифицированные курсы</h1>
        </div>
        <div class="certified-courses-title">
          <div class="courses-title-frame">
            <i class="fa-title"></i>
            <h2>Lorem ipsum</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div class="courses-list">
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
          <CoursesCard :url="'/certified'" :finish="true" />
          <CoursesCard :url="'/certified'" :new_product="true" />
          <CoursesCard :url="'/certified'" :work="true" />
        </div>
        <a href="#" class="courses-all-hide">Еще курсы <i class="fa-arrow-line"></i></a>
      </div>
    </div>
  </main>
</template>

<script>
import CoursesCard from "@/components/CoursesCard";


export default {
  components:{
    CoursesCard
  }
}
</script>