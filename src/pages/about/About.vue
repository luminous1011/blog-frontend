<template>
  <div class="about">
    <Title>关于</Title>
    <Meta class="item_meta" :meta="meta" />
    <div>
      <p>
        前端开发工程师 ｜ 后端开发工程师 ｜ 全栈开发工程师
        <br />
        目前就职于上海，热爱着且永远热爱自己，该博客用于记录生活，会是一个不错的宝藏网址。
      </p>
    </div>
    <div>
      <a href="https://github.com/luminous1011" target="_blank">
        <img
          src="https://ghchart.rshah.org/419c58/luminous1011"
          alt=""
          id="githubChart"
        />
      </a>
    </div>
    <div class="about_contact clearfix">
      <a href="" target="_blank">
        <div class="qq">
          <span class="content">1980393754</span>
          <i class="fa fa-qq"></i>
        </div>
      </a>
       <a href="" target="_blank">
        <div class="email">
          <span class="content">pjspan@foxmail.com</span>
          <i class="fa fa-envelope-o"></i>
        </div>
      </a>
       <a  target="_blank">
        <div class="wechat">
          <span class="content">luminous_chat</span>
          <i class="fa fa-wechat"></i>
        </div>
      </a>
    </div>
    <div class="root">
      <h1>项目版权</h1>
      <p>如侵犯他人著作权、名誉权、隐私权及肖像权等请联系本站删除。</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";

const meta = { date: "2022-07-20", comments: 8, view: 122 };
</script>

<style lang="less">
.about {
  padding: 60px 25px 20px;
  p {
    margin: 20px 0;
    line-height: 2;
    vertical-align: baseline;
  }
  #githubChart {
    width: 97%;
    cursor: pointer;
    margin-left: 7px;
    padding: 5px;
    border: 4px dotted #3ccc64;
  }
  .root {
    h1 {
      margin: 20px 10px 20px 0;
      padding-left: 9px;
      border-left: 6px solid #ea5055;
      font-weight: 600;
      line-height: 1.4;
      color: #222;
    }
    p {
      font-size: 16px;
    }
  }
  .about_contact{
    display: flex;
    flex-grow: 1;
    font-weight: 600;
    font-size: 18px;
    a{
      width: 100%;
    color: #fff;
    }
    .qq,.email,.wechat{
      box-shadow: 0 0 5px rgba(0,0,0,.1);
      border-radius: 4px;
      padding: 25px;
      margin: 15px 6px ;
      display: flex;
      justify-content: center;
      position: relative;
    }
    .qq{
      background: #bcd4e7;
    }
    .email{
      background: #e66666;
    }
    .wechat{
      background: #3ccc64;
    }
    i{
      position: absolute;
      font-size: 60px;
      font-weight: 400;
      color: #fff;
      left: 16px;
      bottom: 6px;
      opacity: .4;
      transform: rotate(20deg);
    }
  }
}
</style>
