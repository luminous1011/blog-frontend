<template>
  <div class="container">
    <header>
      <Title>Web</Title>
      <Meta class="item_meta" :meta="meta" />
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from "@/components/title/Title.vue";


const meta = { date: "2022-07-20", comments: 18, view: 188 };


</script>

<style lang="less">
</style>