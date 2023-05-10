<template>
  <div class="code" v-bind="$attrs">
    <highlightjs :code="code">
    </highlightjs>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  code: String,
});
const { code } = toRefs(props);
</script>
<style>
code.hljs {
  line-height: 1.75;
  background: #f8f8f8;
  border-radius: 5px;
  /* color: #f8f8f2; */
}

code {
  font-size: 12px;
  padding: 15px 12px;
  font-family: 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace';
  color: #333;
  background: #f8f8f8;
}
</style>