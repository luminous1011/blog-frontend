<template>
  <header
    id="header"
    class="header bg-white animated"
    :class="[scrollSwitch ? 'slideUp' : 'slideDown']"
  >
    <div class="navBar-container">
      <div class="front"><router-link to="/">xxxx</router-link></div>
      <div :class="[menuState?'on':'','menu']">
        <ul>
          <li>
            <router-link to="#">点滴记录</router-link>
          </li>
          <li>
            <router-link to="#">摄影</router-link>
          </li>
          <li>
            <router-link  to="#">WEB</router-link>
          </li>
          <li>
            <router-link  to="#">JAVA</router-link>
          </li>
          <li>
            <router-link  to="/essaypoetry">随笔</router-link>
          </li>
          <li>
            <router-link  to="#">友链</router-link>
          </li>
          <li>
            <router-link  to="/about">关于</router-link>
          </li>
          <li>
          </li>
        </ul>
        <router-link  to="/about" class="search">
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
import H5MenuContent from "@/components/menu/H5MenuContent.vue";

const { scrollSwitch } = useScrollEvent();
const { menuState, changeMneuState } = useMenuState();
</script>

<style lang="less">
@import "./index.less";
</style>
