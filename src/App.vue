<template>
  <AdminHeader />
  <router-view />
</template>
<script type="ts" setup>
import AdminHeader from "@/components/header/Header.vue";
</script>

<style lang="less">
@import "./theme/index.less";
</style>
