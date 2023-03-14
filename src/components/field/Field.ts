import {
  ComponentOptions,
  SetupContext,
  toRefs,
  createElementVNode as _createElementVNode,
  createTextVNode as _createTextVNode,
  toDisplayString as _toDisplayString,
} from "vue";

import { importModule } from "@/utils/utils";
importModule(import.meta.glob("./index.less"));

export interface IFiledProps {
  tags?: number;
  commits?: number;
  posts?: number;
  views?: number;
}

interface IArchives {
  label: string;
  value: number;
}


const FieldImpl: ComponentOptions = {
  name: "Field",

  setup(props: IFiledProps, ctx: SetupContext<any>) {
    const { archives } = toRefs(ctx.attrs);
    const { posts, tags, commits, views } = toRefs(
      archives.value as IFiledProps
    );
    const archivesTemp: IArchives[] = [
      {
        label: "文章",
        value: posts?.value ?? 0,
      },
      {
        label: "标签",
        value: tags?.value ?? 0,
      },
      {
        label: "评论",
        value: commits?.value ?? 0,
      },
      {
        label: "浏览量",
        value: views?.value ?? 0,
      },
    ];
    return () => {
      return _createElementVNode(
        "fieldset",
        { class: "field" },
        renderLegend(archivesTemp)
      );
    };
  },
};

function renderLegend(archivesTemp: IArchives[]) {
  return [
    _createElementVNode("legend", null, "统计信息"),
    _createElementVNode(
      "div",
      { class: "archives-count" },
      renderArchives(archivesTemp)
    ),
  ];
}

function renderArchives(archivesTemp: IArchives[]) {
  const arr = archivesTemp.map((item: IArchives) => {
    return _createElementVNode("div", { class: "archives-item" }, [
      _createElementVNode("code", null, _toDisplayString(item.value) + "+", 1),
      _createTextVNode(item.label),
    ]);
  });
  return arr;
}

const Field = FieldImpl as any as {
  __isField: true;
  new (): {
    $props: IFiledProps;
  };
};

export default Field;
