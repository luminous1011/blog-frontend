<template>
  <div class="comment-content">
    <div class="comments clearfix">
      <div class="response-content zdypl">
        <span class="response">发表评论</span>
        <a-form
          ref="commentForm"
          :model="form"
          id="comment-form"
          class="comment-form"
        >
          <div v-if="hasLocal||!showUsrInfo" class="un-select">
            <span class="red">{{ form.name }}</span>
            <span> 欢迎回来, </span>
            <span
              class="pointer red"
              @click="() => (showUsrInfo = !showUsrInfo)"
            >
              修改昵称
            </span>
            <span>?</span>
          </div>
          <div class="ytx" v-if="hasLocal||!showUsrInfo"></div>
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
      <div class="comment-list">
        <ul>
          <li v-for="item in data" :key="item.cid">
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
              <p>{{item.content}}</p>
            </div>
            <div class="comment-meta">
              <time>{{ $filters.timestampToTime(item.createTime)}}</time>
              &nbsp;&nbsp;
              <!-- 时间 -->

              <span>
                <i class="fa fa-apple" v-if="!item.operatingSystem.includes('Windows')"/>
                <i class="fa fa-windows" v-else />
                {{ item.operatingSystem }}
              </span>
              &nbsp;&nbsp;
              <!-- 设备型号 eg：windows 10 / macos -->

              <span>
                <i :class="['fa',`fa-${item.browserIcon}`]" style="margin-right:2px" />
                <!-- <i class="fa fa-safari" />
                <i class="fa fa-firefox" />
                <i class="fa fa-edge" />
                <i class="fa fa-opera" /> -->
               {{item.browser}}
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
import {
  reactive,
  ref,
  computed,
  watchEffect,
  onMounted,
  ComputedRef,
} from "vue";
import { addComment,getCommentsList } from "@/service/comment";
import {
  COMMENT_USER_BLOG,
  COMMENT_USER_EMAIL,
  COMMENT_USER_NAME,
} from "@/utils/utils";
import {
  browserRedirect,
  getExploreName,
  getExploreVersion,
} from "@/utils/utils";

interface IComment{
    browser:string,
    browserIcon:string,
    cid:string,
    content:string,
    fromUid:string,
    operatingSystem:string,
    path:string,
    replyId:string | null,
    replyType:string,
    toUid:string | null,
    createTime:number,
  }
interface IForm {
  name: string;
  comment: string;
  email: string;
  blogUrl: string;
}
const showUsrInfo = ref(true);
const form = reactive<IForm>({
  name: decodeURIComponent(
    window.atob(localStorage.getItem(COMMENT_USER_NAME) || "")
  ),
  email: decodeURIComponent(
    window.atob(localStorage.getItem(COMMENT_USER_EMAIL) || "")
  ),
  blogUrl: decodeURIComponent(
    window.atob(localStorage.getItem(COMMENT_USER_BLOG) || "")
  ),
  comment: "",
});

async function handleClick() {
  if (!form.name || !form.email || !form.comment) return;
  localStorage.setItem(
    COMMENT_USER_NAME,
    window.btoa(encodeURIComponent(form.name))
  );
  localStorage.setItem(
    COMMENT_USER_EMAIL,
    window.btoa(encodeURIComponent(form.email))
  );
  localStorage.setItem(
    COMMENT_USER_BLOG,
    window.btoa(encodeURIComponent(form.blogUrl))
  );

  const system = browserRedirect();
  const browserIcon = getExploreName().toLowerCase();
  const browser = `${getExploreName()} ${getExploreVersion()}`;
  const params = {
    name: form.name,
    email: form.email,
    blogUrl: form.blogUrl,
    comments: form.comment,
    path: location.pathname,
    system,
    browser,
    browserIcon,
    replyType:'comment'
  };
  const res = await addComment(params);
  getCommentList()
  showUsrInfo.value = false;
  form.comment=''
}
let hasLocal: ComputedRef<boolean | null>;
  hasLocal = computed(() => {
    if (
      localStorage.getItem(COMMENT_USER_NAME) &&
      localStorage.getItem(COMMENT_USER_EMAIL) &&
      localStorage.getItem(COMMENT_USER_BLOG)
    )
      return true;
    return false;
  });
  watchEffect(() => {
    if (hasLocal.value) {
      return (showUsrInfo.value = false);
    }
    showUsrInfo.value = true;
  });


    //列表
    const data = reactive<IComment[]>([]);

    getCommentList()
function getCommentList(){
  getCommentsList({}).then(res=>{
    data.splice(0,data.length)
res.data.data.forEach((item:IComment)=>{
  data.push(item)
})
console.error(data);
  
})
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
    &::placeholder {
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
  .ytx {
    margin-top: 6px;
    border-bottom: 1px dashed #ddd;
    clear: both;
  }
  .red {
    color: #eb5055;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
