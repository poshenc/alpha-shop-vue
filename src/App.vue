<template>
  <div id="alpha-shop">
    <!--導覽列-->
    <Navbars />

    <!--Modal-->

    <router-view />

    <!--FOOTER-->
    <Footer />
  </div>
</template>

<script>
import Navbars from "./components/Navbars.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbars,
    Footer,
  },
};
</script>


<style lang="scss">
@import "assets/scss/main.scss";
</style>