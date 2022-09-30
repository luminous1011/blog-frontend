<template>
  <div class="comment-content">
    <div class="comments clearfix">
      <div class="response-content zdypl">
        <span class="response">发表评论</span>
        <form id="comment-form" class="comment-form">
          <div class="clearfix">
            <input
              class="input-control form-control"
              placeholder="昵称(必填哦)"
              maxlength="12"
              required
            />
            <input
              class="input-control form-control"
              placeholder="邮箱(必填哦)"
              maxlength="100"
              required
            />
            <input
              class="input-control form-control"
              placeholder="博客地址(https://)"
              maxlength="100"
            />
          </div>
          <textarea
            class="form-control"
            name="text"
            id="textarea"
            placeholder="请填写真实邮箱哦方便能第一时间收到回复。 中国人不骗中国人，所以不要一个中文都没有噢 ≧◉◡◉≦（屏蔽国外恶意广告）"
            required
          ></textarea>
          <button class="submit">提交</button>
        </form>
      </div>
      <div class="comment-list"></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
    border-radius: 0;
    &::placeholder {
      font-size: 12px;
      color: #777;
    }
    &:focus {
      border-color: #eb5055;
    }
  }
  @media (max-width: 700px) {
    .input-control {
      max-width: 100% !important;
    }
  }
  textarea {
    overflow: hidden;
    height: 150px !important;
    padding: 10px 0;
    resize: none;
    border-radius: 0;
    background: #fff url("../../assets/comments-bg.jpg") right center no-repeat;
    background-size: 200px;
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
}
</style>
