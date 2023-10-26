<template>
  <div class="meta">
    <span v-if="meta.createTime">
      <i class="font fa-clock-o" aria-hidden></i>&nbsp;{{ photoFormatTimestamp(meta.createTime, '-') }}&nbsp;&nbsp;
    </span>
    <span v-if="meta.tag">
      <i class="font fa-tags" aria-hidden></i>&nbsp;{{ meta.tag }}&nbsp;&nbsp;
    </span>
    <span v-if="meta.commentsCount !== undefined">
      <i class="font fa-comments-o" aria-hidden></i>&nbsp;{{ meta.commentsCount }}评论&nbsp;&nbsp;
    </span>
    <span v-if="meta.viewsCount !== undefined">
      <i class="font fa-eye" aria-hidden></i>&nbsp;{{ meta.viewsCount }}浏览 &nbsp;&nbsp;
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { photoFormatTimestamp } from "@/utils/time";
import { useStore } from "vuex";

const store = useStore()
const meta = computed(() => store.state.meta)

</script>

<style>
.meta {
  color: #5f5f5f;
  font-size: 12px;
}
</style>