import { nextTick, onUnmounted } from "vue";
import JQueryBridget from "jquery-bridget";
import Masonry from "masonry-layout";
JQueryBridget("masonry", Masonry, $);

/**
 * 监听document 可视区域变化
 */
function useScreenResize() {

  const handler = () => setTimeout(load, 500);
  addEventListener("resize", handler);

  onUnmounted(() => {
    removeEventListener("resize",handler);
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
