<template>
  <div class="container article-content bg-white">
    <div class="content">
      <header>
        <Field :archives="archives" />
      </header>
      <main>
        <div class="common-title">分类 : JAVA</div>
        <div class="post-list">
          <div class="post-list-item" v-for="item in 10" :key="item">
            <div
              :class="[
                'post-list-content',
                ThemeBg[Math.floor(Math.random() * ThemeBg.length)],
              ]"
            >
              <div class="item-title">阿里云盘列表程序</div>
              <div class="item-meta">
                <div class="item-meta-date">2021-11-23</div>
                <div
                  :class="['item-meta-ico',`bg-ico-${ThemeIco[Math.floor(Math.random() * ThemeIco.length)]}`]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <!-- <Pagination /> -->
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Field from "@/components/field";
import Pagination from "@/components/pagination";
import { ThemeBg, ThemeIco } from "@/utils/utils";

const archives = { posts: 132, tags: 366, commits: 2288, views: 27988 };
</script>

<style lang="less">
@import '../web/index.less';
</style>
