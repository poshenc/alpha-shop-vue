<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form" @submit.prevent.stop="SubmitForm">
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
                maxlength="19"
                pattern="[0-9\-]+"
                inputmode="numeric"
                placeholder="1111 2222 3333 4444"
                v-model="user.cardNumber"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="phone">
              <label for="expired-date">有效期限</label>
              <input
                type="tel"
                maxlength="5"
                pattern="[0-9\-]+"
                placeholder="MM/YY"
                v-model="user.cardDate"
              />
            </div>
            <div class="email">
              <label for="CVC">CVC / CCV</label>
              <input
                type="tel"
                pattern="\d*"
                maxlength="3"
                placeholder="123"
                v-model="user.cardCVC"
              />
            </div>
          </div>
        </div>
        <hr />
        <div class="button-panel">
          <button type="submit" class="btn btn-primary">確認下單</button>
          <button class="btn btn-primary" @click.prevent.stop="LastStep">
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
const Swal = require("sweetalert2");

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
    SubmitForm(e) {
      const { cardHolder, cardNumber, cardDate, cardCVC } = this.user;
      if (!cardHolder || !cardNumber || !cardDate || !cardCVC) {
        Swal.fire({
          title: "注意!",
          text: "請確認所有欄位皆已填寫",
          icon: "warning",
          confirmButtonText: "Cool",
        });
      } else {
        Swal.fire("成功!", "訂單已成功送出!", "success");
      }
    },
  },
  watch: {
    "user.cardNumber": {
      handler: function () {
        let realNumber = this.user.cardNumber.replace(/-/gi, "");

        // Generate dashed number
        let dashedNumber = realNumber.match(/.{1,4}/g);

        // Replace the dashed number with the real one
        if (!this.user.cardNumber) {
          return;
        }
        this.user.cardNumber = dashedNumber.join("-");
      },
      immediate: true,
      deep: true,
    },
    "user.cardDate": {
      handler: function () {
        let realNumber = this.user.cardDate.replace(/-/gi, "");

        // Generate dashed number
        let dashedNumber = realNumber.match(/.{1,2}/g);

        // Replace the dashed number with the real one
        if (!this.user.cardDate) {
          return;
        }
        this.user.cardDate = dashedNumber.join("-");
      },
      immediate: true,
      deep: true,
    },
  },        
};
</script>
