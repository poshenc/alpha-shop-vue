<template>
  <div>
    <div class="main-container">
      <div class="left-content">
        <StepPanel :formStep="user.formStep" />
        <FormPanelStep2 />
      </div>
      <div class="right-content">
        <ShoppingCartPanel />
      </div>
    </div>
  </div>
</template>

<script>
import StepPanel from "../components/StepPanel.vue";
import FormPanelStep1 from "../components/FormPanelStep1.vue";
import FormPanelStep2 from "../components/FormPanelStep2.vue";
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue";

export default {
  name: "Checkout",
  components: {
    StepPanel,
    //FormPanelStep1,
    FormPanelStep2,
    ShoppingCartPanel,
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
