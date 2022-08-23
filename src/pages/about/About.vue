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
    <a :href="GITHUB_CONTACT_URL" target="_blank">
      <img
        id="githubChart"
        :src="GITHUB_CHART_URL"
      />
    </a>
    <div class="about_contact clearfix">
      <a
        :href="QQ_CONTACT_URL"
        target="_blank"
      >
        <div class="qq">
          <span class="content">1980393754</span>
          <i class="fa fa-qq"></i>
        </div>
      </a>
      <a
        :href="MAIL_CONTACT_URL"
        target="_blank"
      >
        <div class="email">
          <span class="content">pjspan@foxmail.com</span>
          <i class="fa fa-envelope-o"></i>
        </div>
      </a>
      <a target="_blank">
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
const GITHUB_CONTACT_URL="https://github.com/luminous1011"
const GITHUB_CHART_URL="https://ghchart.rshah.org/419c58/luminous1011"
const QQ_CONTACT_URL="http://wpa.qq.com/msgrd?v=3&uin=1980393754&site=qq&menu=yes"
const MAIL_CONTACT_URL="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=aRkDGhkIBykPBhEECAAFRwoGBA"
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";




const meta = { date: "2022-07-20", comments: 8, view: 122 };
</script>

<style lang="less">
@import './index.less';
</style>
