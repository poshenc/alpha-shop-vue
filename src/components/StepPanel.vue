<template>
  <div class="step-panel">
    <h1>結帳</h1>
    <div class="stepper-container">
      <div class="step-part">
        <div
          class="step"
          :class="[
            formStep === 1 ? 'active' : '',
            formStep === 2 || formStep === 3 ? 'checked' : '',
          ]"
        >
          <div class="circle-container"></div>
          <div class="label-container">寄送地址</div>
        </div>
        <div class="connect-line"></div>
      </div>

      <div class="step-part">
        <div
          class="step"
          :class="[
            formStep === 2 ? 'active' : '',
            formStep === 3 ? 'checked' : '',
          ]"
        >
          <div class="circle-container"></div>
          <div class="label-container">運送方式</div>
        </div>
        <div class="connect-line"></div>
      </div>

      <div class="step-part">
        <div class="step" :class="[formStep === 3 ? 'active' : '']">
          <div class="circle-container"></div>
          <div class="label-container">付款資訊</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepPanel",
  props: {
    formStep: {
      type: Number,
      required: true,
    },
  },
};
</script>
