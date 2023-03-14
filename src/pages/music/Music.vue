<template>
  <div class="music">
    <header>
      <Title>音乐</Title>
      <Meta class="item_meta" :meta="meta" />
    </header>
    <main>
        <p>每日提神醒脑</p>
        <APlayer songType="album" songId="80982754"/>
        <APlayer songType="album" songId="88723263"/>
        <APlayer songType="album" songId="80958771"/>
        <p style="margin-top:50px">多么感谢 你能回来 我们能回去</p>
        <APlayer songType="playlist" songId="7614381257"/>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Meta from "@/components/meta";
import Title from "@/components/title";
import APlayer from "@/components/aplayer";

// 歌曲相关网址
// https://api.i-meto.com/meting/api?server=netease&type=album&id=80958771  音乐接口
// https://music.163.com/#/search/m/?s=remember%20&type=1                   抓取网易云音乐平台音乐id

const meta = { date: "2022-07-20", comments: 18, view: 188 };


</script>

<style lang="less">
@import "./index.less";
</style>