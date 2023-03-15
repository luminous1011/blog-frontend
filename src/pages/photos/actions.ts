import { nextTick, onUnmounted } from "vue";
import JQueryBridget from "jquery-bridget";
import Masonry from "masonry-layout";
import { throttle } from '@/utils/utils'
JQueryBridget("masonry", Masonry, $);

/**
 * 监听document 可视区域变化
 */
function useScreenResize() {

  addEventListener("resize", throttle(load,500));

  onUnmounted(() => {
    removeEventListener("resize", throttle(load,500));
  });
}

/**
 * 图片加载回调函数
 */
const load = () => {
  
  const $grid = $("#grid").masonry({
    itemSelector: ".grid-item",
    percentPosition: false,
    columnWidth: ".grid-sizer",
  });
  $grid.masonry("layout");
  nextTick(() => $grid.masonry());
};

export { useScreenResize, load };
