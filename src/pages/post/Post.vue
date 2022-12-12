<template>
  <div class="post-wrapper">
    <header
      class="bg-blue header-bg"
      style="
        background-image: url(https://cdn.rawchen.com/2022/10/win11-optimize/00.png);
      "
    >
      <div
        class="header-op"
        style="
          background-image: url(https://cdn.rawchen.com/2022/10/win11-optimize/00.png);
        "
      ></div>
      <div class="header-cover">
        <div class="header-cover-wrapper">
          <div class="thumb-title">WIN11使用优化 & 常用命令</div>
          <div class="thumb-meta">
            <Meta class="thumb-meta" :meta="meta" />
          </div>
          <div>1</div>
        </div>
      </div>
    </header>
    <main class="index_page index-page">
      <h1>StartAllBack</h1>
      <p>
        推荐使用美化软件StartAllBack，网址1：
        <a href="http://startallback.cn">http://startallback.cn</a>
        ，网址2：<a href="https://startallback.com.cn">https://startallback.com.cn</a>
      </p>
      <p>
        让Win11任务栏永不合并，透明任务栏，右键显示更多等，更加自由的定义自己的电脑。<br/>
可以解锁、锁定，增加多层任务栏设置。<br/>
默认试用一个月。好用可在以上官网淘宝店20元购买永久激活。支持更换设备。<br/>
      </p>
      <img src="https://photo.tuchong.com/27380778/f/1053766879.jpg" alt="">
      <img src="https://photo.tuchong.com/27380778/f/1053766879.jpg" alt="">
      <h1>快捷管理员方式运行CMD</h1>
      <p>WIN+R，输入cmd，CTRL + SHIFT + 回车</p>
      <h1>右键默认显示更多选项</h1>
      <p>
        如果不想使用StartAllBack则可以直接cmd执行如下命令。
      </p>
      <Code code='reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve' />
      
      <h1>
        关闭查看网络搜索结果
      </h1>
      <p>
        如果你希望快速使用软件，通常按下WIN，输入检索信息，由于系统会调用搜索引擎使得搜索结果包含网络内容，导致速度缓慢，所以可禁用此操作。<br/>
WIN+R，输入regedit进入系统注册表，输入路径：
      </p>
      <Code :code="`计算机\HKEY_CURRENT_USER\Software\Policies\Microsoft\Windows`"/>
      <p>
        右键点击<code class="code-inner">Windows</code>，选择<code class="code-inner">新建</code> -> <code class="code-inner">项</code>，
        命名为<code class="code-inner">Explorer</code>。然后，右键点击<code class="code-inner">Explorer</code>的项，
        新建一个<code class="code-inner">DWORD(32位)值</code>，命名为<code class="code-inner">DisableSearchBoxSuggestions</code>，
        双击它，填写<code class="code-inner">1</code>，确定保存。最后通过任务管理器对<code class="code-inner">windows资源管理器</code>右键重新启动即可生效。
      </p>
      <h1>
        开启本地组策略
      </h1>
      <p>
        新建txt文本，将如下命令粘贴进去保存。改名文件后缀为bat <br/>
右键以管理员身份运行，等待下载完成即可。
      </p>
      <Code :code="code1"></Code>
      <h1>端口占用 & 进程与程序</h1>
      <Code :code="code2"></Code>
      <h1>DNS缓存刷新</h1>
      <Code :code="code3"></Code>

      <h1>WIN开机自启文件夹</h1>
      <Code :code="code4"></Code>

    </main>
    <footer>
      <Comment />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Comment from "@/components/comment/Comment.vue";
import Title from "@/components/title/Title.vue";
import Meta from "@/components/meta/Meta.vue";
import Code from "@/components/code/Code.vue";
const meta = { date: "2022-07-20", comments: 8, view: 122 };

const code1 = `@echo off
pushd "%~dp0"
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum >List.txt
dir /b C:\Windows\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum >>List.txt
for /f %%i in ('findstr /i . List.txt 2^>nul') do dism /online /norestart /add-package:"C:\Windows\servicing\Packages\%%i"
pause`
const code2=`通过端口查看进程id
netstat -ano |findstr 80

通过进程id查看进程名
tasklist|findstr 12345

通过进程id查杀进程
taskkill /f /pid 12345
`
const code3=`ipconfig /flushdns
`
const code4=`C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
`
</script>

<style lang="less">
h1 {
  margin: 20px 10px 20px 0;
  padding-left: 9px;
  border-left: 6px solid #ea5055;
  font-weight: 600;
  line-height: 1.4;
  color: #222;
}
h1 {
  font-size: 1.4em;
  color: #222;
}
p {
    font-size: 16px;
    line-height: 2;
    word-wrap: break-word;
    word-break: break-word;
}
 p a {
    margin: 0px 5px;
    color: #4c94dd;
    border-bottom: 1px dotted #ccc;
    position: relative;
}
.code-inner {
    font-family: Menlo, Bitstream Vera Sans Mono, DejaVu Sans Mono, Monaco,
      Consolas, monospace;
    font-family: Consolas, "Microsoft YaHei", Monaco, Andale Mono, Ubuntu Mono,
      monospace;
    word-break: break-all;
    font-size: 16px;
    color: black;
    padding: 4px 7px 4px 7px;
    margin: 2px 4px;
    border-radius: 5px;
    background: linear-gradient(to right, #ffc3aa, #ff8d8d);
    color: #000;
    -webkit-transition-duration: 0.15s;
    transition-duration: 0.15s;
  }
  img{
    position: relative;
    display: block;
    overflow: hidden;
    max-width: 100%;
    height: auto;
    margin: 0 auto 10px;
    box-shadow: 0 0px 3px rgb(31 35 37 / 10%);
    -webkit-box-shadow: 0 0px 3px rgb(31 35 37 / 10%);
}
main.index-page {
  padding: 30px 25px 20px;
}
.post-wrapper {
  max-width: unset;
  .header-bg {
    height: 255px;
  }
  header {
    position: relative;
    width: 100%;
margin-top: -70px;
    .header-op {
      position: absolute;
      width: 100%;
      width: 100%;
      height: 255px;
      background-position: center;
      background-size: cover;
      -webkit-filter: blur(4px);
      -moz-filter: blur(4px);
      filter: blur(4px);
      background-position-y: -133px;
    }
    .header-cover {
      position: relative;
      width: 100%;
      height: 255px;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-box-shadow: 0 1px 5px rgb(0 0 0 / 30%);
      -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
      box-shadow: 0 1px 5px rgb(0 0 0 / 30%);
    }
    .header-cover-wrapper {
      position: relative;
      top: 77px;
      max-width: 700px;
      margin: 0 auto;
      padding: 30px 25px 20px;
      -webkit-animation: fade-in 0.5s;
      animation: fade-in;
      animation-duration: 0.5s;
      color: #fff;
    }
  }
  .thumb-title {
    font-size: 21px;
  }
  .thumb-meta {
    color: #fff;
    font-size: 14px;
  }
}
</style>
