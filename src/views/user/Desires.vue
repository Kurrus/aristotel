<template>
  <div class="user-content-section">
    <div class="page-sub-title user-sub-title">
      <h2><i class="fa-title"></i>Список желаний</h2>
    </div>
    <div class="courses-all-list">
      <CoursesCard @close="deletePopupFunc" :close="true" :finish="true" />
      <CoursesCard @close="deletePopupFunc" :close="true" :new_product="true" />
      <CoursesCard @close="deletePopupFunc" :close="true" :work="true" />
      <CoursesCard @close="deletePopupFunc" :close="true" :finish="true" />
      <CoursesCard @close="deletePopupFunc" :close="true" :new_product="true" />
      <CoursesCard @close="deletePopupFunc" :close="true" :work="true" />
    </div>

    <DeleteCoursePopup @close="deletePopupFunc" :delete-event="true" @delete="deleteCourses" v-if="deletePopup" />
  </div>
</template>

<script>
import CoursesCard from "@/components/CoursesCard";
import DeleteCoursePopup from "@/components/DeleteCoursePopup";

export default {
  data() {
    return {
      deletePopup: false
    }
  },
  methods:{
    deletePopupFunc(e){
      this.deletePopup = e
    },
    deleteCourses(e){
      console.log(e)
    }
  },
  components:{
    CoursesCard,
    DeleteCoursePopup
  }
}
</script>