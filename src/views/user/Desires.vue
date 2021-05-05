<template>
  <div class="user-content-section">
    <div class="page-sub-title user-sub-title">
      <h2><i class="fa-title"></i>Список желаний</h2>
    </div>
    <div class="courses-all-list" v-if="wishlist">
      <CoursesCard v-for="item in wishlist" @close="cardRemove" :close="true" :key="item.id" :data="item"/>
    </div>
    <div class="courses-all-empty" v-else>
      <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M239.029 384.97C241.258 387.199 243.904 388.967 246.815 390.173C249.727 391.379 252.848 392 256 392C259.152 392 262.273 391.379 265.185 390.173C268.097 388.967 270.742 387.199 272.971 384.97L363.48 294.461C367.981 289.96 370.509 283.856 370.509 277.491C370.509 271.125 367.981 265.021 363.48 260.52C358.979 256.019 352.875 253.491 346.51 253.491C340.144 253.491 334.04 256.019 329.539 260.52L280 310.059V48C280 41.6348 277.472 35.5303 272.971 31.0294C268.47 26.5286 262.365 24 256 24C249.635 24 243.53 26.5286 239.03 31.0294C234.529 35.5303 232 41.6348 232 48V310.059L182.461 260.52C177.96 256.019 171.856 253.491 165.491 253.491C159.125 253.491 153.021 256.019 148.52 260.52C144.019 265.021 141.491 271.125 141.491 277.491C141.491 283.856 144.019 289.96 148.52 294.461L239.029 384.97Z" fill="#76BA1B"/>
        <path d="M464 232C457.635 232 451.53 234.529 447.029 239.029C442.529 243.53 440 249.635 440 256V440H72V256C72 249.635 69.4714 243.53 64.9706 239.029C60.4697 234.529 54.3652 232 48 232C41.6348 232 35.5303 234.529 31.0294 239.029C26.5286 243.53 24 249.635 24 256V448C24 458.609 28.2143 468.783 35.7157 476.284C43.2172 483.786 53.3913 488 64 488H448C458.609 488 468.783 483.786 476.284 476.284C483.786 468.783 488 458.609 488 448V256C488 249.635 485.471 243.53 480.971 239.029C476.47 234.529 470.365 232 464 232Z" fill="#111E6C"/>
      </svg>
      <p>Список желаний ничего не найдено</p>
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
      deletePopup: false,
      id: null
    }
  },
  methods:{
    cardRemove(e){
      this.deletePopup = e.event
      this.id = e.id
      console.log(e)
    },
    deletePopupFunc(e){
      this.deletePopup = e
      this.id = null
    },
    async deleteCourses(e){
      if (e) {
        try {
          await this.$store.dispatch('removeWishlist', {id: this.id})
          await this.$store.dispatch('getWishlist')
        }catch (e){
          console.log(e)
        }
      }
      this.id = null
    }
  },
  computed:{
    wishlist(){
      return this.$store.getters.getWishlist
    },
  },
  components:{
    CoursesCard,
    DeleteCoursePopup
  }
}
</script>