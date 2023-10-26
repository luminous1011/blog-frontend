<template>
  <div class="comment-content" id="comment">
    <div class="comments clearfix">
      <Form v-show="!tempCid" :form="form" :handleClick="handleClick" :showUsrInfo="showUsrInfo" :hasLocal="hasLocal"
        :handleShowUsrInfo="handleShowUsrInfo" />
      <div class="comment-list" id="comment-list">
        <div class="loading" v-show="spinning">
          <a-spin :spinning="spinning" />
        </div>
        <ul>
          <li v-for="item in data" :key="item.cid">
            <CommentView :item="item" :cid="item.cid" :handleReply="handleReply">
              <Form :form="form" :handleClick="handleClick" :showUsrInfo="showUsrInfo" :hasLocal="hasLocal"
                :handleShowUsrInfo="handleShowUsrInfo" v-if="tempCid === item.cid" :isReply="isReply"
                :cancelReply="cancelReply" />
            </CommentView>
            <CommentView v-for="child in item.children" :item="child" :handleReply="handleReply" :cid="item.cid"
              :key="child.cid">
              <Form :form="form" :handleClick="handleClick" :showUsrInfo="showUsrInfo" :hasLocal="hasLocal"
                :handleShowUsrInfo="handleShowUsrInfo" v-if="tempCid === child.cid" :isReply="isReply"
                :cancelReply="cancelReply" />
            </CommentView>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <Pagination :pagination="pagination" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {
  reactive,
  ref,
  computed,
  watchEffect,
  ComputedRef,
  defineAsyncComponent,
  onMounted,
  watch,
} from "vue";
import { defineProps, toRefs } from "vue";
import { IComment, IForm } from "./type";
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
import { addComment, getCommentsList, replyComment } from "@/service/comment";
import { useStore } from "vuex";

const Form = defineAsyncComponent(() => import("./components/Form.vue"));
const CommentView = defineAsyncComponent(
  () => import("./components/CommentView.vue")
);
const Pagination = defineAsyncComponent(
  () => import("@/components/pagination")
);

interface IPagination {
  page: number;
  pageSize: number;
  total: number;
}

const replyId = ref("");
const showUsrInfo = ref(true);
const isReply = ref(true);
const spinning = ref(true);
const store = useStore()
let hasLocal: ComputedRef<boolean | null>;
//分页器
const pagination = reactive<IPagination>({
  page: 1,
  pageSize: 10,
  total: 0,
});
//列表
const data = reactive<IComment[]>([]);
const fromCid = ref("");
const tempCid = ref("");

const cb = () => {
  const target = document.querySelector(`#comment`);
  target && target.scrollIntoView();
};

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
    comments: form.comment.trim(),
    path: store.state.meta.pageId,
    system,
    browser,
    browserIcon,
    replyType: "comment",
  };
  if (!replyId.value) {
    await addComment(params);
  } else {
    const obj = {
      replyId: replyId.value,
      replyType: "reply",
      fromCid: fromCid.value,
    };
    await replyComment(Object.assign({}, params, obj));
  }

  getCommentList(cb);
  showUsrInfo.value = false;
  form.comment = "";
  cancelReply();
}
hasLocal = computed(() => {
  if (
    localStorage.getItem(COMMENT_USER_NAME) &&
    localStorage.getItem(COMMENT_USER_EMAIL)
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
watch(
  () => [pagination.page, store.state.meta.pageId],
  async () => {
    await getCommentList(cb);
  }
);

function getCommentList(cb?: Function) {
  cb && cb();
  spinning.value = true;
  data.splice(0, data.length);
  getCommentsList({
    path: store.state.meta.pageId,
    page: pagination.page,
    pageSize: pagination.pageSize,
  }).then((res: any) => {
    if (res && res.data && res.data.code === 0) {
      const { list = [], pageNum, pageSize, total } = res?.data?.data ?? {};
      list.forEach((item: IComment) => {
        data.push(item);
      });
      pagination.page = pageNum;
      pagination.pageSize = pageSize;
      pagination.total = total;
    }
    spinning.value = false;

  });
}
function handleShowUsrInfo() {
  showUsrInfo.value = !showUsrInfo.value;
}
function handleReply(comment: IComment, cid: string) {
  replyId.value = comment.fromUid;
  tempCid.value = comment.cid;
  fromCid.value = cid;
}
function cancelReply() {
  replyId.value = "";
  fromCid.value = "";
  tempCid.value = "";
}
</script>

<style lang="less">
@import "./index.less";

.loading {
  display: flex;
  justify-content: center;
  height: 300px;
  width: 100%;
  align-items: center;
}
</style>
