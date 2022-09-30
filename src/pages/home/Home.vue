<template>
  <div class="home">
    <div class="lists">
      <div>
        <div class="lists_item">
          <div class="lists_item_container">
            <a :href="BLOG_HOME">
              <div class="thumb"></div>
            </a>
            <div class="thumb_title">
              <a :href="BLOG_HOME">Luminous1011 · Blog </a>
              <span class="caret"></span>
            </div>
            <p class="thumb_subtitle">我&nbsp;&nbsp;热爱我</p>
            <div class="social-list">
              <router-link to="">LINK</router-link>
              ｜&nbsp;
              <router-link to="">PAN</router-link>
              ｜<Moment />｜&nbsp;
              <router-link to="">JAVA</router-link>
              ｜&nbsp;
              <router-link to="">WEB</router-link>
            </div>
          </div>
        </div>
        <div class="lists_item" v-for="item in 5" :key="item">
          <div class="lists_item_container">
            <a :href="BLOG_HOME">
              <div class="thumb green"></div>
            </a>
            <div class="thumb_title">
              <a :href="BLOG_HOME"
                ><span
                  ><path
                    d="M880.114286 463.085714A397.131429 397.131429 0 0 0 785.371429 331.428571l-33.257143-30.514285a9.245714 9.245714 0 0 0-14.857143 3.771428l-14.857143 42.628572c-9.257143 26.742857-26.285714 54.057143-50.4 80.914285-1.6 1.714286-3.428571 2.171429-4.685714 2.285715-1.257143 0.114286-3.2-0.114286-4.914286-1.714286-1.6-1.371429-2.4-3.428571-2.285714-5.485714 4.228571-68.8-16.342857-146.4-61.371429-230.857143C561.485714 122.285714 509.714286 67.542857 445.028571 29.371429l-47.2-27.771429c-6.171429-3.657143-14.057143 1.142857-13.714285 8.342857l2.514285 54.857143c1.714286 37.485714-2.628571 70.628571-12.914285 98.171429-12.571429 33.714286-30.628571 65.028571-53.714286 93.142857a337.874286 337.874286 0 0 1-54.285714 52.685714 402.971429 402.971429 0 0 0-114.628572 138.857143A397.428571 397.428571 0 0 0 109.714286 624c0 53.942857 10.628571 106.171429 31.657143 155.428571a399.314286 399.314286 0 0 0 86.285714 126.742858c37.028571 36.571429 80 65.371429 127.885714 85.371428C405.142857 1012.342857 457.714286 1022.857143 512 1022.857143s106.857143-10.514286 156.457143-31.2A398.4 398.4 0 0 0 796.342857 906.285714c37.028571-36.571429 66.057143-79.314286 86.285714-126.742857a393.371429 393.371429 0 0 0 31.657143-155.428571c0-55.771429-11.428571-109.942857-34.171428-161.028572z"
                    fill="#f05f6c"
                    p-id="2780"
                /></span>
                简单科学上网
              </a>
            </div>
            <Meta class="item_meta" :meta="meta" />
            <p class="thumb_subtitle">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Meta from "@/components/meta/Meta.vue";
import Moment from "@/components/moment/Moment.vue";
import { BLOG_HOME } from "@/utils/utils";

const meta = { date: "2022-07-20", tag: "Web笔记", comments: 8, view: 2232 };
</script>

<style scoped lang="less">
@import "./index.less";
</style>