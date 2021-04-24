<template>
  <div id="app">
    <Alert />
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

export default {
  data() {
    return {
      active: false
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
    }
  },
  components:{
    MainLayout,
    UserLayout,
    AuthLayout,
    Alert
  }
}

</script>

