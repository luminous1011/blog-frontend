<template>
  <div :class="['H5_menu', 'icon', state ? 'cross' : '']"><span></span></div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from "vue";

interface Props {
  state: boolean;
}
const props: Props = defineProps({
  state: Boolean,
});
const { state } = toRefs(props);
</script>

<style lang="less">
@import "./index.less";
</style>
