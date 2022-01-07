<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <h2>寄送地址</h2>
          <div class="form-row">
            <div class="name">
              <label for="name">持卡人姓名</label>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>

          <div class="form-row">
            <div class="name">
              <label for="card-num">卡號</label>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>

          <div class="form-row">
            <div class="phone">
              <label for="expired-date">有效期限</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div class="email">
              <label for="CVC">CVC / CCV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </div>
        <hr />
        <div class="button-panel">
          <button type="submit" class="btn btn-primary">下一步</button>
          <button type="submit" class="btn btn-primary">上一步</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/formpanel.scss";
</style>