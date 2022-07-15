<template>
  <AdminHeader />
  <router-view />
</template>
<script lang="ts" setup>
import AdminHeader from "@/components/header/Header.vue";
</script>

<style lang="less">
@import "./theme/index.less";
</style>
