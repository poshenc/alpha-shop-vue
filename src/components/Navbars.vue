<template>
  <div>
    <nav class="header-nav">
      <a href="#" class="nav-brand">
        <img src="./../assets/AClogo.png" class="ac-logo" />
      </a>

      <label class="nav-toggle-label" for="nav-toggle">
        <span class="hamburger"><i class="fas fa-bars"></i></span>
      </label>

      <input type="checkbox" class="nav-toggle" id="nav-toggle" />
      <div class="nav-bar">
        <div class="nav-left">
          <ul class="nav-list">
            <li class="nav-item">男裝</li>
            <li class="nav-item">女裝</li>
            <li class="nav-item">最新消息</li>
            <li class="nav-item">客製商品</li>
            <li class="nav-item">聯絡我們</li>
          </ul>
        </div>

        <div class="nav-right">
          <ul class="nav-icons">
            <li class="nav-icon">
              <a href="#"
                ><img src="https://i.ibb.co/4JLfqgS/search-2x.png" alt=""
              /></a>
            </li>
            <li class="nav-icon">
              <a href="#"
                ><img src="https://i.ibb.co/qm1FbGf/cart-2x.png" alt=""
              /></a>
            </li>
            <li class="nav-icon">
              <a href="#"
                ><img src="https://i.ibb.co/Lg5j4xY/moon-2x.png" alt=""
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>