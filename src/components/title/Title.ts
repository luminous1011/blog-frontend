import {
  ComponentOptions,
  SetupContext,
  VNodeProps,
  createElementVNode as _createElementVNode,
} from "vue";

import { importModule } from "@/utils/utils";
importModule(import.meta.glob("./idnex.less"));

export interface TitleProps {}

const TitleImpl: ComponentOptions = {
  name: `Title`,
  setup(props: TitleProps, { slots }: SetupContext) {
    return () => {
      if (!slots.default) {
        return null;
      }
      const children = slots.default();
      console.error(children);
      
      return _createElementVNode(
        "div",
        {
          class: "title",
        },
        children
      );
    };
  },
};
const Title = TitleImpl as any as {
  __isTitle: true;
  new (): {
    $props: VNodeProps & TitleProps;
  };
};

export default Title;
