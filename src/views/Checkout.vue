<template>
  <div>
    <div class="main-container">
      <div class="left-content">
        <StepPanel :formStep="user.formStep" />
        <FormPanelStep3 />
      </div>
      <div class="right-content">
        <ShoppingCartPanel :initial-cartitems="cartItems" />
      </div>
    </div>
  </div>
</template>

<script>
import StepPanel from "../components/StepPanel.vue";
import FormPanelStep1 from "../components/FormPanelStep1.vue";
import FormPanelStep2 from "../components/FormPanelStep2.vue";
import FormPanelStep3 from "../components/FormPanelStep3.vue";
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue";

export default {
  name: "Checkout",
  components: {
    StepPanel,
    //FormPanelStep1,
    // FormPanelStep2,
    FormPanelStep3,
    ShoppingCartPanel,
  },
  data() {
    return {
      user: {
        formStep: "",
      },
      cartItems: [
        {
          id: 1,
          name: "周董2022限量 PhntaBear",
          img: "/img/nft1.c11d59d9.jpeg",
          price: 3999,
          amount: 1,
        },
        {
          id: 2,
          name: "聯名2022限量 EzekBear",
          img: "/img/nft2.ed4cc324.jpeg",
          price: 1299,
          amount: 2,
        },
      ],
    };
  },
};
</script>
