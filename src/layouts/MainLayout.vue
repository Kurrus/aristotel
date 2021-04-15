<template>
  <div>
    <Header/>
    <router-view/>
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