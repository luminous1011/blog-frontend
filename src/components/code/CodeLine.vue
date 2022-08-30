<template>
  <span class="code_line">
    <code>
      <slot />
    </code>
  </span>
</template>
<style lang="less">
.code_line {
  code {
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
}
</style>
