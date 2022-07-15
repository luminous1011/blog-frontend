<template>
  <header
    id="header"
    class="header bg-white animated"
    :class="[scrollSwitch ? 'slideUp' : 'slideDown']"
  >
    <div class="navBar-container">
      <div class="front"><a href="#">xxxx</a></div>
      <H5Menu :state="menuState" @click="changeMneuState" />
      <div>
        <a class="item">xxx</a>
        <a class="item">xxx</a>
        <a class="item">xxx</a>
        <!-- <a>u趣的</a> -->
        <a class="item">contact</a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import useMenuState from "./useMenuState";
import useScrollEvent from "./useScrollEvent";
import H5Menu from "@/components/menu/H5Menu.vue";

const { scrollSwitch } = useScrollEvent();
const { menuState, changeMneuState } =useMenuState()

</script>

<style lang="less" >
@import "./index.less";
</style>