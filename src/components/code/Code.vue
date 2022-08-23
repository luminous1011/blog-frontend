<template>
  <div class="code" v-bind="$attrs">
    <highlightjs :code="code"></highlightjs>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ExtractPropTypes, toRefs } from "vue";

const props = defineProps({
  code: String,
});
const { code } = toRefs(props);
</script>