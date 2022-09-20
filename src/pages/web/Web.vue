<template>
  <div class="container bg-white web-content">
    <header>
      <Field :archives="archives" />
    </header>
    <main>
    </main>
    <footer></footer>
  </div>
</template>

<script lang="ts" setup>
import Field from '@/components/field/Field.vue'


const archives ={posts:132,tags:366,commits:2288,views:279988}

</script>

<style lang="less">
  .web-content {
  max-width: unset;
  min-height: calc(100vh - 70px);
}
</style>