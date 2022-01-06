<template>
  <div id="alpha-shop">
    <Navbars />
    <!--導覽列-->

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