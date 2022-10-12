<template>
  <div class="footer-content bg-white">
    <div class="footer-social">
      <div class="footer-social-content clearfix">
        <ul>
          <li>WEIBO</li>
          <li>ZHIHU</li>
          <li>RSS</li>
          <li>GITHUB</li>
          <li>JUEJIN</li>
        </ul>
      </div>
    </div>
    <div class="footer-meta">
      <div class="footer-meta-content">
        <div class="meta-item meta-cp">
          <div class="info-sign">
            <img src="https://rawchen.com/logo-footer.png" alt="" height="64px">
          </div>
          <div class="info-txt">
            <p>© 2018-2022 Luminous1011 · Blog</p>
            <p>沪ICP备xxxxxxxx号 - x</p>
            <p>
              已在世界的角落里存活了
              <b>4.48</b>
              年
            </p>
            <p>
                博主共写了 <b>188</b> 篇文章
            </p>
            <p>网站已经被 <b>1192663</b>人踩踏</p>
          </div>
        </div>
        <div class="meta-item meta-posts">
            <h3>最新文章</h3>
            <ul>
                <li>中秋月亮（摄影）</li>
                <li>BladeX 企业级微服务架构开发框架</li>
                <li>超级月亮 && 晚霞白云</li>
                <li>西安 & 华山！</li>
                <li>最新文章x毕业啦xxx</li>
                <li>Typecho设置可多域名访问</li>
                <li>spring io </li>
                <li>java 学习</li>
            </ul>
        </div>
        <div class="meta-item meta-comments">
            <h3>最近评论</h3>
            <ul>
                <li>himdreamboat : 终于我找到原因了哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈 ngix ipv</li>
                <li>himdreamboat : 求救啊大佬 我使用 ipv6在外网访问我家的</li>
                <li>叶小明的博客 : 这月亮好看 </li>
                <li>viceroy : 哇咔咔</li>
                <li>himdreamboat : 大佬这玩意好考吗 我当时咨询辅导机构 他直接</li>
                <li>夜恋 : 博主好帅</li>
                <li>夜恋 : 博主共写了1448篇文章</li>
                <li>夜恋 : 一样的操作，用的另外机场，检测没毛病，就是上</li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less">
.footer-content {
  .footer-social {
    border-bottom: 1px solid rgba(184, 197, 214, 0.2);
  }
  .footer-social-content {
    max-width: 940px;
    margin: 0 auto;
    ul {
      padding: 20px;
      display: flex;
      justify-content: center;
      margin: 0;
    }
    li {
      font-size: 13px;
      padding: 0 25px;
      text-decoration: none;
      color: #5f5f5f;
    }
  }
  .footer-meta {
    padding: 50px 0;
  }
  .meta-item{
    width: 33.333%;
    padding: 0 30px;
    display: inline-block;
  }
  .footer-meta-content {
    width: 100%;
    max-width: 1040px;
    height: 250px;
    margin: 0 auto;
  }
  p{
    margin: 0;
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #767676;
  }
  h3{
    font-size: 14px;
    font-weight: bold;
    padding: 0 0 10px 0;
    text-decoration: none;
    color: #5f5f5f;
    margin: 0;
  }
  li{
    font-size: 13px;
    line-height: 25px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #767676;
  }
  @media  (max-width:650px) {
    .footer-social,.meta-item:not(:first-child){
      display: none;
    }
    .meta-cp{
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
    }
    .footer-meta-content{
      height: 100px;
    }
  }
}
</style>
