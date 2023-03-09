<template>
  <div>
    <div class="root-bg-video">
      <video
        src="@/assets/video/march-announcement-video.mp4"
        autoplay
        loop
        muted
        preload="false"
      ></video>
    </div>
  </div>
</template>

<script></script>

<style>
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
}
video {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 1;
}
#header {
  opacity: 0;
}
</style>
