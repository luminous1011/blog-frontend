<template>
  <div class="meta">
    <i class="font fa-clock-o" aria-hidden v-if="meta.date"></i>&nbsp;{{ meta.date }}&nbsp;&nbsp;
    <i class="font fa-tags" aria-hidden v-if="meta.tag"></i>&nbsp;{{ meta.tag }}&nbsp;&nbsp;
    <i class="font fa-comments-o" aria-hidden v-if="meta.comments"></i>&nbsp;{{ meta.comments }}评论&nbsp;&nbsp; 
    <i class="font fa-eye" aria-hidden v-if="meta.view"></i>&nbsp;{{meta.view}}浏览 &nbsp;&nbsp;
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({ 
  meta: Object,
});

const { meta } = toRefs(props);
</script>

<style>
.meta{
    color: #5f5f5f;
    font-size: 12px;
}
</style>