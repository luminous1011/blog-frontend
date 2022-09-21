<template>
  <a-back-top
    :target="getDom"
    :style="{ right: '30px', top: getBacktopPos() + 140 + 20 + 'px' }"
  >
    <div >
      <a-space>
        <up-square-filled
          style="font-size: 40px; color: rgba(232, 98, 86, 0.8)"
        />
      </a-space>
    </div>
  </a-back-top>
</template>

<script lang="ts" setup>
import { UpSquareFilled } from "@ant-design/icons-vue";

function getDom() {
  return window;
}
function getBacktopPos() {
  return window.innerHeight * 0.45;
}
</script>
