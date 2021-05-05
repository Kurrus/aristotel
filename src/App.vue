<template>
  <div id="app">
    <Alert />
    <loading />
<!--    <vue-progress-bar></vue-progress-bar>-->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import MainLayout from "@/layouts/MainLayout";
import UserLayout from "@/layouts/UserLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Alert from "@/components/Alert";
import Loading from "@/components/loading";

export default {
  data() {
    return {
      active: false
    }
  },
  mounted() {
    // this.$Progress.start()
    const params = new URLSearchParams(window.location.search)
    if (params.get('referrer')){
      localStorage.setItem('referrer', params.get('referrer'))
    }else {
      localStorage.removeItem('referrer')
    }

  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "user") + "-layout";
    },
  },

  methods: {
    popupUser(e) {
      this.active = e
    },
  },
  components:{
    Loading,
    MainLayout,
    UserLayout,
    AuthLayout,
    Alert
  }
}

</script>

