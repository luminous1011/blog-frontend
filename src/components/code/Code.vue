<template>
  <div class="code" v-bind="$attrs">
    <highlightjs :code="code"></highlightjs>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

interface Props {
  code: string;
}
const props: Readonly<ExtractPropTypes<{ code: StringConstructor }>> = defineProps({
  code: String,
});
const { code } = toRefs(props);
</script>