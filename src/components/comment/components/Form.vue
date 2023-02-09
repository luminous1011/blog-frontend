<template>
  <div class="response-content zdypl">
    <span class="response">
      <span>发表评论</span>
      <span class="red hover-line" v-if="isReply" @click="cancelReply"
        >取消评论</span
      >
    </span>

    <a-form
      ref="commentForm"
      :model="form"
      id="comment-form"
      class="comment-form"
    >
      <div v-if="hasLocal || !showUsrInfo" class="un-select">
        <span class="red">{{ form.name }}</span>
        <span> 欢迎回来, </span>
        <span class="pointer red hover-line" @click="handleShowUsrInfo">
          修改昵称
        </span>
        <span>?</span>
      </div>
      <div class="ytx" v-if="hasLocal || !showUsrInfo"></div>
      <div class="clearfix main-info" v-if="showUsrInfo">
        <a-form-item name="name">
          <a-input
            v-model:value="form.name"
            autocomplete="off"
            class="input-control form-control"
            placeholder="昵称(必填哦)"
            :maxlength="20"
            required
          />
        </a-form-item>
        <a-form-item name="email">
          <a-input
            v-model:value="form.email"
            autocomplete="off"
            class="input-control form-control"
            placeholder="邮箱(必填哦)"
            :maxlength="64"
            required
          />
        </a-form-item>

        <a-form-item name="blogUrl">
          <a-input
            v-model:value="form.blogUrl"
            autocomplete="off"
            class="input-control form-control"
            placeholder="博客地址(https://)"
            :maxlength="64"
          />
        </a-form-item>
      </div>

      <a-form-item name="comment">
        <a-textarea
          type="textarea"
          autocomplete="off"
          v-model:value="form.comment"
          class="form-control"
          id="textarea"
          placeholder="请填写真实邮箱哦方便能第一时间收到回复。 中国人不骗中国人，所以不要一个中文都没有噢 ≧◉◡◉≦（屏蔽国外恶意广告）"
          required
        ></a-textarea>
      </a-form-item>

      <button class="submit" @click="handleClick">提交</button>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from "vue";
import { IForm } from "../type";

const props = defineProps<{
  form: IForm;
  handleClick: Promise<void>;
  showUsrInfo: boolean;
  hasLocal: boolean | null;
  handleShowUsrInfo: (payload: MouseEvent) => void;
  isReply?: boolean;
  cancelReply?: (payload: MouseEvent) => void;
}>();
const { form, handleClick, showUsrInfo, hasLocal, isReply, cancelReply } =
  toRefs(props);
</script>
