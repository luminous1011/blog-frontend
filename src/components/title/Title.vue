<template>
  <div class="title">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less">
.title{
    font-size: 20px;
    font-weight: 600;
    &::before,&::after{
        content: ' [ ';
        color: #ea5055;
        margin-right: 5px;
    }
    &::after{
        margin-left: 5px;
        content: ' ] ';
    }
}
</style>
