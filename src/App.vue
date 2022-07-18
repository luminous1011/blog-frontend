<template>
  <div class="index-page">
    <AdminHeader />
    <router-view />
  </div>
</template>

<script lang="ts" setup >
import AdminHeader from "@/components/header/Header.vue";
</script>

<style lang="less">
@import "./theme/index.less";
@import "../src/font/css/font-awesome.min.css";
@import "./font/font.less";
.index-page {
  padding: 70px 0 0;
}
</style>
