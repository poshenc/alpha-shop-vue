<template>
  <div>
    <StepPanel :formStep="user.formStep" />
  </div>
</template>

<script>
import StepPanel from "../components/StepPanel.vue";

export default {
  name: "Checkout",
  components: {
    StepPanel,
  },
  data() {
    return {
      user: {
        formStep: "",
      },
    };
  },
};
</script>
