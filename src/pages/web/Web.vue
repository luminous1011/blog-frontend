<template>
  <div class="container bg-white article-content">
    <div class="content">
      <header class="article-header">
        <Field :archives="archives" />
      </header>
      <main>
        <div class="common-title">分类 : WEB</div>
        <div class="post-list">
          <div class="post-list-item" v-for="item in 10" :key="item">
            <div class="post-list-content bg-red">
              <div class="item-title">阿里云盘列表程序</div>
              <div class="item-meta">
                <div class="item-meta-date">2021-11-23</div>
                <div
                  class="item-meta-ico bg-ico-lock"
                  style="
                    background: url(https://rawchen.com/usr/themes/rawchen/images/bg-ico.png)
                      no-repeat;
                    background-size: 40px auto;
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Pagination />
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Field from "@/components/field/Field.vue";
import Pagination from "@/components/pagination/Pagination.vue";

const archives = { posts: 132, tags: 366, commits: 2288, views: 27988 };
</script>

<style lang="less">
.article-content {
  max-width: unset;
  min-height: calc(100vh - 70px);
  .article-header {
    margin: 10px 20px 0px 20px;
    transition: all linear .3s;
  }
  .content {
    max-width: 940px;
    margin: 0 auto;
    padding: 0 20px;
    transition: all linear .3s;
  }
  @media (max-width: 880px) {
    .content {
      padding: 0;
    }
  }

  .common-title {
    font-size: 14px;
    position: relative;
    margin: 10px auto;
    padding: 0 30px;
    color: #5f5f5f;
    &::before {
      position: absolute;
      top: 0;
      left: 15px;
      content: "#";
      color: #eb5055;
    }
  }
  .post-list-item {
    position: relative;
    width: 50%;
    padding: 15px;
    display: inline-block;
    transition: padding  linear .3s;
    transition: transform  ease-in-out .15s;
    &:hover {
      -webkit-transform: scale(1.03);
      transform: scale(1.03);
    }
  }
  @media (max-width: 650px) {
    .post-list-item {
      width: 100%;
    }
    .post-list-item {
      padding:10px 0;
    }
    .article-header {
      margin: 0;
    }
  }
  .post-list-content {
    position: relative;
    overflow: hidden;
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    color: #fff;
    padding: 20px 15px 15px;
  }
  .item-meta {
    display: flex;
    justify-content: space-between;
  }
  .item-meta-ico {
    display: inline-block;
    width: 42px;
    height: 42px;
    border: 1px solid #eaeaea;
    border-radius: 50%;
  }
  .bg-red {
    background-color: #e8583d !important;
  }
}
</style>
