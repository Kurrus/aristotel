<template>
  <div>
    <Header/>
    <main>
      <div class="registration">
        <div class="section-frame">
          <ul class="breadcrumbs">
            <li>
              <router-link to="/"><i class="fa-home-line"></i></router-link>
            </li>
            <li><i class="fa-arrow-next"></i></li>
            <li><router-link to="/login">Вход</router-link></li>
          </ul>
          <div class="page-sub-title reg-title">
            <h1><i class="fa-title"></i>Вход</h1>
          </div>
          <div class="registration-content">
            <img src="../assets/images/registration.png" alt="">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>
    <MobileBar @active="popupUser"/>
    <PopupUser @active="popupUser" :active="active"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import MobileBar from "@/components/MobileBar";
import Footer from "@/components/Footer";
import PopupUser from "@/components/PopupUser";

export default {
  data() {
    return {
      active: false
    }
  },
  methods: {
    popupUser(e) {
      this.active = e
    }
  },
  components: {
    Header,
    MobileBar,
    Footer,
    PopupUser
  }
}
</script>

<style scoped>

</style>