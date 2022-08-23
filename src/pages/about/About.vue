<template>
    <div class="about">
      <Title>关于</Title>
      <Meta class="item_meta" :meta="meta" />
    </div>
</template>
<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Title from '@/components/title/Title.vue'

const meta ={date:"2022-07-20",comments:8,view:122 }

</script>

<style lange="less">
.about{
  padding: 60px 25px 20px;
}
</style>
