<template>
  <main class="root-wrapper">
    <section class="root-bg-video">
      <video
        src="@/assets/video/march-announcement-video.mp4"
        autoplay
        loop
        muted
        preload="false"
      ></video>
    </section>
    <section class="root-index-wrapper">
      <h1>Luminous1011 · Blog , A good treasure website</h1>
    </section>
  </main>
  <nav class="root-nav">
    <a href=""></a>
    <ul class="root-links">
        <li>
            <router-link to="/index">Blog</router-link>
        </li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
        <li>122</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {onBeforeUnmount} from 'vue'
const header =document.getElementById("header")
console.error(header);
header?.classList.add("root-header")
onBeforeUnmount(()=>header?.classList.remove("root-header")) 
</script>

<style lang="less" > 
.root-wrapper {
  max-width: 1280px;
  pointer-events: auto;
  opacity: 1;
  padding: 0 60px;
  margin: 0 auto;
  position: fixed;
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  h1 {
    color: #fff;
    position: relative;
    font-size: 44px;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.15;
    margin-bottom: 0.9em;
  }

}
.root-nav{
    position: fixed;
    display: grid;
    width: 100%;
    height: 84px;
    align-items: center;
    color: #fff;
    grid-template-columns: 1fr auto;
    pointer-events: none;
    transition: color .15s ease-in-out;
    bottom: 0;
}
.root-links{
    position: relative;
    top: auto;
    right: auto;
    display: flex;
    width: 50vw;
    justify-content: space-between;
    padding: 0 40px;
    margin: 0;
    list-style: none;
    pointer-events: auto;
    text-align: right;
    will-change: opacity,transform;

    li a{
        color: rgba(255,255,255,.5);
        font-size: 24px;
        &:hover{
            color: rgba(255,255,255,.75);
        }
    }
}
.root-bg-video {
  position: fixed;
  background-color: #000;
  background-position: 50%;
  background-size: cover;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 1;
  }
}

.root-header {
  opacity: 0 !important ;
}
</style>
