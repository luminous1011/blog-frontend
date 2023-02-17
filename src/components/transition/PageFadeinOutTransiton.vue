<template>
  <div
    class="overflow offset animate__animated"
    :id="name"
    :style="
      'transform: translateY(' +
      `${y}` +
      'px);' +
      'transition:all' +
      ' ' +
      'ease' +
      ' ' +
      `${duration}s;`
    "
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { v4 } from "uuid";
import { onMounted, onUnmounted, ref } from "vue";

const name = ref(v4());
const y = ref(150);
const duration = ref(0.5);

let scrollHandle:any;

function throttle(action: Function, delay: number, iselapsed: boolean) {
  console.error(2);

  let timeout: any = null;
  let lastRun = 0;
  return function () {
    if (timeout) {
      if (iselapsed) {
        return;
      } else {
        clearTimeout(timeout);
        timeout = null;
      }
    }
    const elapsed = Date.now() - lastRun;
    if (iselapsed && elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
    function runCallback() {
      lastRun = Date.now();

      timeout = false;
      action();
    }
  };
}

function scrollThrottle() {
  const elem: HTMLElement | any = document.getElementById(`${name.value}`);
  const offset = elem.getBoundingClientRect();
  const offsetTop = offset.top;
  const offsetBottom = offset.bottom;
  const inHeight = offsetBottom - window.innerHeight;
  const transY = offset.height - offsetBottom + window.innerHeight;
  if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
    elem?.classList.add("animation-in");
    y.value = 0;
    if (inHeight < offset.height * 0.85) {
      elem?.classList.add("animate__slideInUp", "animation-active");
    } else {
      elem?.classList.remove("animate__slideInUp", "animation-active");
      if (transY < 50) {
        y.value = 150;
        elem?.classList.remove("animation-in");
      }
    }
  } else {
    elem?.classList.remove("animation-in");
  }
}

onMounted(() => {
  scrollHandle = throttle(scrollThrottle, 100, true);
  window.addEventListener("scroll", scrollHandle, true);
});
onUnmounted(()=>{
  window.removeEventListener("scroll", scrollHandle, true);

})
</script>

<style lang="less">
.offset {
  opacity: 0;
}

.animation-in {
  opacity: 1;
}

.animation-active {
  opacity: 1;
}
</style>
