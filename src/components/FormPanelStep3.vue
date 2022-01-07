<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <h2>寄送地址</h2>
          <div class="form-row">
            <div class="name">
              <label for="name">持卡人姓名</label>
              <input
                type="text"
                placeholder="John Doe"
                v-model="user.cardHolder"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="name">
              <label for="card-num">卡號</label>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                v-model="user.cardNumber"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="phone">
              <label for="expired-date">有效期限</label>
              <input type="text" placeholder="MM/YY" v-model="user.cardDate" />
            </div>
            <div class="email">
              <label for="CVC">CVC / CCV</label>
              <input type="text" placeholder="123" v-model="user.cardCVC" />
            </div>
          </div>
        </div>
        <hr />
        <div class="button-panel">
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent.stop="SubmitForm"
          >
            確認下單
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent.stop="LastStep"
          >
            上一步
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/formpanel.scss";
</style>

<script>
export default {
  name: "FormPanelStep3",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    LastStep() {
      this.$emit("decrease-form-step");
      this.$router.push({ name: "Delivery" });
    },
    SubmitForm() {
      alert("Form Submit!");
    },
  },
};
</script>
