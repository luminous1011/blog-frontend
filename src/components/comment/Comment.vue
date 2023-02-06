<template>
  <div class="comment-content">
    <div class="comments clearfix">
      <div class="response-content zdypl">
        <span class="response">发表评论</span>
        <a-form   ref="commentForm" :model="form" id="comment-form" class="comment-form">
          <div class="clearfix main-info">
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
                :maxlength="100"
                required
              />
            </a-form-item>

            <a-form-item name="blogUrl">
              <a-input
                v-model:value="form.blogUrl"
                autocomplete="off"
                class="input-control form-control"
                placeholder="博客地址(https://)"
                :maxlength="100"
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
      <div class="comment-list">
        <ul>
          <li>
            <div class="comment-header">
              <img
                class="avatar"
                src="../../assets/default-avatar.png"
                width="80"
                height="80"
              />
              <span class="comment-author"
                ><a
                  href="https://luminous011.github.io"
                  target="_blank"
                  rel="external nofollow"
                  >luminous1011</a
                >
              </span>
            </div>
            <div class="comment-content">
              <p>好久不见呀，来康康</p>
            </div>
            <div class="comment-meta">
              <time>10月1日</time>
              &nbsp;&nbsp;
              <!-- 时间 -->

              <span>
                <i class="fa fa-windows" />
                <i class="fa fa-apple" />
                Windows 10
              </span>
              &nbsp;&nbsp;
              <!-- 设备型号 eg：windows 10 / macos -->

              <span>
                <i class="fa fa-chrome" />
                <i class="fa fa-safari" />
                <i class="fa fa-firefox" />
                <i class="fa fa-edge" />
                <i class="fa fa-opera" />
                Chrome 105
              </span>
              <!-- 浏览器版本 -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, } from "vue";
import {addComment} from "@/service/comment"
import { browserRedirect,getExploreName ,getExploreVersion} from "@/utils/utils";

interface IForm{
  name:string,
  comment:string,
  email:string,
  blogUrl:string
}
const form=reactive<IForm>({
  name:'1111name',
  comment:'comment2222',
  email:'email111',
  blogUrl:'blogUrl',
})
function handleClick() {
  const operatingSystem= browserRedirect();
  const browserIcon=getExploreName().toLowerCase()
  const browser =`${getExploreName()} ${getExploreVersion()}` 
  const params={
    commentName:form.name,
    commentEmail:form.email,
    blogUrl:form.blogUrl,
    comments:form.comment,
    path:location.pathname,
    operatingSystem,
    browser,
    browserIcon
  }
  console.error(params);
  addComment(params)
}
</script>

<style lang="less">
.comment-content {
  position: relative;
  z-index: 1;
  color: #5f5f5f;
  //   background-color: #f7f7f7;
  .comments {
    max-width: 970px;
    margin: 0 auto;
    padding: 20px 20px 0 20px;
    padding-bottom: 1px;
  }
  .response {
    font-size: 14px;
    font-weight: 400;
    display: block;
    padding: 30px 0 30px 20px;
    color: #5f5f5f;
  }
  .zdypl .response {
    border-top: 1px #dcdcdc dashed;
    padding: 16px 0 16px 10px !important;
  }
  .comment-form {
    position: relative;
    margin: 0 0 40px;
    padding: 10px 20px;
    border-radius: 3px;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
  }
  .form-control {
    font-size: 13px;
    display: block;
    width: 100%;
    height: 34px;
    color: #313131;
    outline: 0;
  }
  .comment-form .input-control {
    float: left;
    width: 100%;
    max-width: 294.8px;
    border-bottom: 1px dashed #ddd;
    border-top: none;
    border-left: none;
    border-right: none;
    padding-left: 0;
    border-radius: 0;
    &::placeholder {
      font-size: 12px;
      color: #777;
    }
    &:focus,
    &:active {
      border-color: #eb5055;
      border-top: none;
      border-left: none;
      border-right: none;
      box-shadow: none;
    }
  }
  .main-info {
    display: flex;
  }
  .ant-form-item {
    width: 100% !important;
    margin-bottom: 0 !important;
  }
  @media (max-width: 700px) {
    .main-info {
      display: block;
    }
    .input-control {
      max-width: 100% !important;
      width: unset;
    }
  }
  #textarea {
    overflow: hidden;
    height: 150px !important;
    padding: 10px 0;
     border: none;
    resize: none;
    border-radius: 0;
    background: #fff url("../../assets/comments-bg.jpg") right center no-repeat;
    background-size: 200px;
    &::placeholder{
      color: #777;
    }
    &:focus,
    &:active {
     border: none;
      box-shadow: none;
    }
  }

  .submit {
    font-size: 12px;
    // position: absolute;
    // right: 20px;
    // bottom: 20px;
    display: block;
    line-height: 24px;
    height: 28px;
    // margin: 0 auto;
    padding: 0 20px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    text-align: center;
    color: #313131;
    border: 1px solid #dedede;
    border-radius: 30px;
    background-color: #f7f7f7;
    margin: 0 0 0 auto;
    cursor: pointer;
    &:hover {
      color: #eb5055;
      border: 1px solid #eb5055;
      outline-style: none;
      background-color: #fafafa;
    }
  }
  .comment-list {
    li:first-child {
      margin: 0;
    }

    li {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid rgba(184, 197, 214, 0.2);
      border-radius: 3px;
      border-top-left-radius: 3px;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 14px;
      border-bottom-right-radius: 14px;
      background: #fff;
      -webkit-box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
      box-shadow: 0 1px 4px rgb(0 0 0 / 4%);
    }
    li {
      word-wrap: break-word;
      font-size: 16px;
      line-height: 2;
    }
    .avatar {
      display: inline-block;
      width: 40px;
      height: 40px;
      border: 1px solid #eaeaea;
      border-radius: 50%;
    }
    .comment-author {
      font-size: 13px;
      line-height: 45px;
      display: inline-block;
      margin: 0 20px;
    }
    .comment-author {
      a {
        position: relative;
        color: #5f5f5f;
      }
      a::after {
        background: currentColor;
        content: "";
        height: 2px;
        left: 50%;
        position: absolute;
        top: 100%;
        transform: translateX(-50%);
        transition: width 0.2s ease;
        width: 0;
      }
      a:any-link:hover::after {
        width: 100%;
      }
    }
    .comment-content {
      margin-bottom: 10px;
      color: #313131;
    }
    .comment-meta {
      font-size: 12px;
      user-select: none;
    }
  }
}
</style>
