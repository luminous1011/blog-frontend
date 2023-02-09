<template>
  <div class="comment-view" :id="`comment-${item.cid}`">
    <div class="comment-header">
      <img
        class="avatar"
        src="../../../assets/default-avatar.png"
        width="80"
        height="80"
      />
      <span class="comment-author"
        ><a
          href="https://luminous011.github.io"
          target="_blank"
          rel="external nofollow"
          >{{ item.fromUser.username }}</a
        >
      </span>
    </div>
    <div class="comment-content">
      <p>
        <span v-if="item.replyType === 'reply'" class="reply-user">
          <a :href="`#comment-${item.toUid}`">@{{ item.replyUser.username }}</a>
        </span>
        <span>
          {{ item.content }}
        </span>
      </p>
    </div>
    <div class="comment-meta">
      <time>{{ $filters.timestampToTime(item.createTime) }}</time>
      &nbsp;&nbsp;
      <!-- 时间 -->

      <span>
        <i class="fa fa-apple" v-if="item.operatingSystem.includes('Mac')" />
        <i
          class="fa fa-windows"
          v-if="item.operatingSystem.includes('Windows')"
        />
        {{ item.operatingSystem }}
      </span>
      &nbsp;&nbsp;
      <!-- 设备型号 eg：windows 10 / macos -->

      <span>
        <i
          :class="['fa', `fa-${item.browserIcon}`]"
          style="margin-right: 2px"
        />
        <!-- <i class="fa fa-safari" />
                <i class="fa fa-firefox" />
                <i class="fa fa-edge" />
                <i class="fa fa-opera" /> -->
        {{ item.browser }}
      </span>
      <!-- 浏览器版本 -->
      <span class="comment-reply" @click="handleReply(item, cid)"></span>
    </div>
  </div>
  <slot />
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
import { IComment } from "../type";

const props = defineProps<{
  item: IComment;
  handleReply: (a: IComment, b: string) => void;
  cid: string;
}>();
const { item, handleReply, cid } = toRefs(props);
</script>
