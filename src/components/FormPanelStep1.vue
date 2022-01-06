<template>
  <div class="form-panel">
    <div class="container form-container">
      <form id="a-form">
        <div class="form-content">
          <h2>寄送地址</h2>
          <div class="form-row">
            <div class="gender">
              <label for="gender">稱謂</label>
              <div class="select-wrapper">
                <select name="gender" id="gender">
                  <option value="先生">先生</option>
                  <option value="女士">女士</option>
                </select>
              </div>
            </div>
            <div class="name">
              <label for="name">姓名</label>
              <input type="text" placeholder="請輸入名字" />
            </div>
          </div>

          <div class="form-row">
            <div class="phone">
              <label for="phone">電話</label>
              <input type="text" placeholder="請輸入電話" />
            </div>
            <div class="email">
              <label for="email">電話</label>
              <input type="text" placeholder="請輸入email" />
            </div>
          </div>

          <div class="form-row">
            <div class="gender">
              <label for="district">縣市</label>
              <div class="select-wrapper">
                <select name="district" id="district">
                  <option value="台北市">台北市</option>
                  <option value="台中市">台中市</option>
                  <option value="高雄市">高雄市</option>
                </select>
              </div>
            </div>
            <div class="address">
              <label for="address">地址</label>
              <input type="text" placeholder="請輸入地址" />
            </div>
          </div>
        </div>
        <hr />
        <div class="button-panel">
          <button type="submit" class="btn btn-primary">下一步</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./../assets/scss/formpanel.scss";
</style>