<template>
  <header
    id="header"
    class="header animated"
    :class="[scrollSwitch ? 'slideUp' : 'slideDown']"
  >
    <div class="navBar-container">
      <div class="front"><router-link to="/">xxxx</router-link></div>
      <div :class="[menuState ? 'on' : '', 'menu']">
        <ul>
          <li class="menu_categorys">
            <router-link to="#">分类</router-link>
            <ul>
              <li>
                <router-link to="#">点滴记录</router-link>
              </li>
               <li>
                <router-link to="#">资源分享</router-link>
              </li>
               <li>
                <router-link to="#">一些代码</router-link>
              </li>
               <li>
                <router-link to="#">力扣解析</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/photos">摄影</router-link>
          </li>
          <li>
            <router-link to="/web">WEB</router-link>
          </li>
          <li>
            <router-link to="/java">JAVA</router-link>
          </li>
          <li>
            <router-link to="/essaypoetry">随笔</router-link>
          </li>
          <li>
            <router-link to="/music">音乐</router-link>
          </li>
          <li>
            <router-link to="/friends">友链</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
          <li></li>
        </ul>
        <router-link to="#" class="search">
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
