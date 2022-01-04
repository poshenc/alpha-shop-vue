<template>
  <div id="alpha-shop">
    <!--導覽列-->
    <Navbars />

    <!--Modal-->

    <!--FOOTER-->

    <router-view />
  </div>
</template>

<script>
import Navbars from "./components/Navbars.vue";

export default {
  name: "App",
  components: {
    Navbars,
  },
};
</script>
