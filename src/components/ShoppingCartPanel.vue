<template>
  <div class="cart-panel">
    <h2>購物車</h2>
    <div class="cart-list">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="item-img">
          <img :src="item.imageUrls.default" alt="" />
        </div>
        <div class="item-panel">
          <div class="item-count">
            <p class="item-name">{{ item.name }}</p>
            <div class="count">
              <div
                class="minus-circle"
                @click.prevent.stop="reduceAmount(item)"
              ></div>
              <div class="item-num">{{ item.amount }}</div>
              <div
                class="plus-circle"
                @click.prevent.stop="addAmount(item)"
              ></div>
            </div>
          </div>
        </div>
        <span class="item-cost">{{
          item.price.toLocaleString() | dollarSign
        }}</span>
      </div>

      <!--購物籃最下方-->
      <div class="cart-cost">
        <hr />
        <div class="total-cost">
          <span>運費</span>
          <span class="strong">
            {{
              this.delivery === "0" || this.delivery === 0
                ? "免運費"
                : "$" + this.delivery
            }}
          </span>
        </div>
        <hr />
        <div class="total-cost">
          <span>小計</span>
          <span class="strong">{{
            totalCost.toLocaleString() | dollarSign
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Swal = require("sweetalert2");

export default {
  name: "ShoppingCartPanel",
  props: {
    initialCartitems: {
      type: Array,
      required: true,
    },
    delivery: {
      type: [String, Number],
      requried: true,
    },
  },
  data() {
    return {
      cartItems: [],
    };
  },
  created() {
    this.fetchCartItems();
    this.calTotalCost();
  },
  methods: {
    fetchCartItems() {
      this.cartItems = this.initialCartitems;
    },
    addAmount(item) {
      item.amount += 1;
    },
    reduceAmount(item) {
      if (item.amount > 1) {
        return (item.amount -= 1);
      } else {
        Swal.fire({
          title: "商品將移除",
          text: "確定將此商品移除購物車?",
          icon: "warning",
          showCancelButton: true,
          cancelButtonColor: "#3085d6",
          cancelButtonText: "保留商品",
          confirmButtonColor: "#d33",
          confirmButtonText: "確認刪除",
        }).then((result) => {
          if (result.isConfirmed) {
            this.cartItems = this.cartItems.filter(
              (_item) => _item.id !== item.id
            );
          }
        });
      }
    },
    calTotalCost() {
      this.totalCost = 0;
      this.cartItems.map((item) => {
        const itemCost = item.amount * item.price;
        this.totalCost += itemCost;
      });
      this.totalCost += Number(this.delivery);
    },
  },
  filters: {
    dollarSign(value) {
      return "$ " + value;
    },
  },
  watch: {
    cartItems: {
      handler: function () {
        this.calTotalCost();
      },
      immediate: true,
      deep: true,
    },
    delivery: {
      handler: function () {
        this.calTotalCost();
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
