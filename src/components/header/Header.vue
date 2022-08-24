<template>
  <header
    id="header"
    class="header bg-white animated"
    :class="[scrollSwitch ? 'slideUp' : 'slideDown']"
  >
    <div class="navBar-container">
      <div class="front"><router-link to="/">xxxx</router-link></div>
      <div class="menu">
        <router-link class="item" to="#">点滴记录</router-link>
        <router-link class="item" to="#">摄影</router-link>
        <router-link class="item" to="#">WEB</router-link>
        <router-link class="item" to="#">JAVA</router-link>
        <router-link class="item" to="/essaypoetry">随笔</router-link>
        <router-link class="item" to="#">友链</router-link>
        <!-- <a>u趣的</a> -->
        <router-link class="item" to="/about">关于</router-link>
        <router-link class="item" to="/about">
          <span class="icon_search"></span>
        </router-link>
      </div>
      <H5Menu :state="menuState" @click="changeMneuState" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import useMenuState from "./useMenuState";
import useScrollEvent from "./useScrollEvent";
import H5Menu from "@/components/menu/H5Menu.vue";

const { scrollSwitch } = useScrollEvent();
const { menuState, changeMneuState } = useMenuState();
</script>

<style lang="less" >
@import "./index.less";
</style>