<template>
  <div>
    <div class="main-container">
      <div class="left-content">
        <StepPanel :formStep="formStep" />
        <router-view
          :initial-user="user"
          :initial-delivery="delivery"
          @handle-delivery="handleDelivery"
        />
      </div>
      <div class="right-content">
        <ShoppingCartPanel
          :initial-cartitems="cartItems"
          :delivery="delivery"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StepPanel from "../components/StepPanel.vue";
import ShoppingCartPanel from "../components/ShoppingCartPanel.vue";

export default {
  name: "Checkout",
  components: {
    StepPanel,
    ShoppingCartPanel,
  },
  data() {
    return {
      formStep: 1,
      delivery: 0,
      user: {
        gender: "",
        name: "",
        phone: "",
        email: "",
        district: "",
        address: "",
        cardHolder: "",
        cardNumber: "",
        cardDate: "",
        cardCVC: "",
      },
      cartItems: [
        {
          id: 1,
          name: "周董2022限量 PhntaBear",
          img: "../assets/nft1.jpeg",
          imageUrls: {
            default: require("../assets/nft1.jpeg"),
          },
          price: 3999,
          amount: 1,
        },
        {
          id: 2,
          name: "聯名2022限量 EzekBear",
          img: "/img/nft2.ed4cc324.jpeg",
          imageUrls: {
            default: require("../assets/nft2.jpeg"),
          },
          price: 1299,
          amount: 2,
        },
      ],
    };
  },
  created() {
    this.nowStep();
  },
  updated() {
    this.nowStep();
  },
  methods: {
    nowStep() {
      if (this.$route.name === "Address") {
        this.formStep = 1;
      } else if (this.$route.name === "Delivery") {
        this.formStep = 2;
      } else if (this.$route.name === "Payment") {
        this.formStep = 3;
      }
    },
    handleDelivery(fee) {
      this.delivery = fee;
    },
  },
};
</script>
