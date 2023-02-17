import { createVNode, defineComponent,defineProps, toRefs, PropType } from "vue";
import { IComment } from "../type";

export default defineComponent({
  name: "commentView",
  props: {
    item: Object as PropType<IComment>,
    handleReply: Function as PropType<(a: IComment, b: string) => void>,
    cid: String,
  },
  setup(props,_ref){
    return function(){
        return createVNode("h1", { style: { color: "red" } }, "你好");

    }
  }
});
