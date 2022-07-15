<template>
  <div class="home">
    <main class="main_content clearfix index_page">
      <div class="lists">
        <div>
          <div class="lists_item">
            <div class="lists_item_container">
              <a href="https://luminous1011.github.io">
                <div class="thumb"></div>
              </a>
              <div class="thumb_title">
                <a href="https://luminous1011.github.io">Luminous · Blog </a>
                <span class="caret"></span>
              </div>
              <p class="thumb_subtitle">我&nbsp;&nbsp;热爱我</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
</script>

<style scoped lang="less">
.home {
  .index_page {
    max-width: 100%;
    margin: 0;
    padding: 70px 0 0;
  }

  .main_page {
    position: relative;
    -webkit-animation: fade-in 0.5s;
    animation: fade-in;
    animation-duration: 0.5s;
  }

  @keyframes fade-in {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .lists {
    position: relative;
    display: block;
    overflow: hidden;
    padding-top: 5px;
  }

  .lists_item {
    display: inline-block;
    width: 100%;
    margin: 0;
    background: #f7f7f7b8;
  }

  .lists_item_container {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
    padding: 38px 20px 38px;
  }

  .thumb {
    background-image: url("@/assets/cover.jpg");
    min-height: 260px;
    border-radius: 5px;
    background-position: 50% 50%;
    background-size: cover;
    -webkit-box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s;
  }

  @media (max-width: 700px) {
    .thumb {
      min-height: 240px;
    }
  }

  @media (max-width: 650px) {
    .thumb {
      min-height: 220px;
    }
  }

  @media (max-width: 580px) {
    .thumb {
      min-height: 180px;
    }
  }

  .thumb_title {
    display: block;
    margin: 30px 0 0;
    text-align: center;
    font-size: 21px;
  }

  .thumb_subtitle {
    margin: 20px 0;
    text-align: center;
    color: #5f5f5f;
    font-size: 15px;
  }
  .caret {
    animation-name: flash;
    width: 4px;
    height: 30px;
    background-color: #000;
    margin-left: 5px;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    display: inline-block;
    vertical-align: bottom;
  }

  @keyframes flash {
    0%,
    50%,
    100% {
      opacity: 1;
    }

    25%,
    75% {
      opacity: 0;
    }
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix::before {
    content: "";
  }

  .clearfix::after {
    content: "";
  }
}
</style>