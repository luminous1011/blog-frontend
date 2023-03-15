import Field from "./Field";
export default Field;


/**
 * 
 * 
 * 
 * 
 * <template>
  <fieldset class="field">
    <legend>统计信息</legend>
    <div class="archives-count">
      <div class="archives-item">
        <code>{{ archives.posts }}+</code>
        文章
      </div>
      <div class="archives-item">
        <code>{{ archives.tags }}+</code>
        标签
      </div>
      <div class="archives-item">
        <code>{{ archives.commits }}+</code>
        评论
      </div>
      <div class="archives-item">
        <code>{{ archives.views }}+</code>
        浏览量
      </div>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import { defineProps, toRefs, PropType } from "vue";
interface Iarchives {
  tags: number;
  commits: number;
  posts: number;
  views: number;
}

const props = defineProps({
  archives: Object as PropType<Iarchives>,
});

const { archives = {} } = toRefs(props);
</script>

<style lang="less">
fieldset > legend {
  background-color: #eb5055;
  color: #fff;
  border-radius: 0.2em;
  padding: 0.2em 0.5em;
  font-size: 0.9em;
  width: unset;
}
fieldset {
  border: 0.06em dashed #d5d5d5;
  border-radius: 0.3em;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  background-color: #f3f3f3;
}
.archives-count {
  width: 100%;
  text-align: center;
  color: #666;
}
.archives-count .archives-item {
  width: 25%;
  padding: 0.4em 0 0.6em;
  border-radius: 0.3em;
  display: inline-block;
  &:hover {
    background: #e8e8e8;
  }
}
.archives-count code {
  display: block;
  font-size: 2em;
  color: #707070;
  background: transparent !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 7px 4px 7px;
  margin: 2px 4px;
  border-radius: 5px;
  font-family: Consolas,'Microsoft YaHei', Monaco, Andale Mono, Ubuntu Mono, monospace;
}

@media (max-width: 800px) {
  .archives-count code {
    font-size: 14px;
    text-overflow: clip;
    margin-left: -6px;
  }
.archives-count code {
    font-size: 15px;
    text-overflow: clip;
    margin-left: -6px;
    margin-right: -6px;
}
}
</style>

 */