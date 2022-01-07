<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="b-form">
        <div class="form-content">
          <h2>寄送方式</h2>
          <div class="delivery-list">
            <div class="delivery-type">
              <div class="left-content">
                <input
                  type="radio"
                  name="fee"
                  value="0"
                  class="delivery-check"
                  v-model="user.deliveryFee"
                />
                <div class="delivery-description">
                  <span class="delivery-title">標準運送</span>
                  <span class="delivery-time">約 3 ~ 7 個工作天</span>
                </div>
              </div>
              <div class="delivery-cost">免費</div>
            </div>

            <div class="delivery-type">
              <div class="left-content">
                <input
                  type="radio"
                  name="fee"
                  value="500"
                  class="delivery-check"
                  v-model="user.deliveryFee"
                />
                <div class="delivery-description">
                  <span class="delivery-title">DHL貨運</span>
                  <span class="delivery-time">48 小時內送達</span>
                </div>
              </div>
              <div class="delivery-cost">$500</div>
            </div>
          </div>
        </div>
        <hr />
        <div class="button-panel">
          <button type="submit" class="btn btn-primary">下一步</button>
          <button
            type="submit"
            class="btn btn-primary"
            @click.stop.prevent="nextStep"
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
  name: "FormPanelStep2",
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
    nextStep() {
      this.$emit("after-delivery-submit");
    },
  },
};
</script>
