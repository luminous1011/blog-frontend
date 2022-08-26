<template>
  <div class="meta">
    <span v-if="meta.date">
        <i class="font fa-clock-o" aria-hidden></i>&nbsp;{{ meta.date }}&nbsp;&nbsp;
    </span>
    <span v-if="meta.tag">
        <i class="font fa-tags" aria-hidden></i>&nbsp;{{ meta.tag }}&nbsp;&nbsp;
    </span>
    <span v-if="meta.comments">
        <i class="font fa-comments-o" aria-hidden></i>&nbsp;{{ meta.comments }}评论&nbsp;&nbsp; 
    </span>
    <span v-if="meta.view">
        <i class="font fa-eye" aria-hidden></i>&nbsp;{{meta.view}}浏览 &nbsp;&nbsp;
    </span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs,PropType } from "vue";
interface IMeta{
  date:number,
  comments:number,
  view:number,
  tag?:string,
}

const props = defineProps({ 
  meta: Object as PropType<IMeta>,
});

const { meta={} } = toRefs(props);
</script>

<style>
.meta{
    color: #5f5f5f;
    font-size: 12px;
}
</style>