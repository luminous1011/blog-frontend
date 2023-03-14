import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, renderSlot as _renderSlot } from "vue"
import atatar from '../../../assets/default-avatar.png'

export function render(_ctx, _cache, $props, $setup, $data, $options) {
  console.error(_ctx);
  
  return (_openBlock(), _createElementBlock("template", null, [
    _createElementVNode("div", {
      class: "comment-view",
      id: `comment-${_ctx.item.cid}`
    }, [
      _createElementVNode("div", { class: "comment-header" }, [
        _createElementVNode("img", {
          class: "avatar",
          src: atatar,
          width: "80",
          height: "80"
        }),
        _createElementVNode("span", { class: "comment-author" }, [
          _createElementVNode("a", {
            href: "https://luminous011.github.io",
            target: "_blank",
            rel: "external nofollow"
          }, _toDisplayString(_ctx.item.fromUser.username), 1 /* TEXT */)
        ])
      ]),
      _createElementVNode("div", { class: "comment-content" }, [
        _createElementVNode("p", null, [
          (_ctx.item.replyType === 'reply')
            ? (_openBlock(), _createElementBlock("span", {
                key: 0,
                class: "reply-user"
              }, [
                _createElementVNode("a", {
                  href: `#comment-${_ctx.item.fromCid}`
                }, "@" + _toDisplayString(_ctx.item.replyUser.username), 9 /* TEXT, PROPS */, ["href"])
              ]))
            : _createCommentVNode("v-if", true),
          _createElementVNode("span", null, _toDisplayString(_ctx.item.content), 1 /* TEXT */)
        ])
      ]),
      _createElementVNode("div", { class: "comment-meta" }, [
        _createElementVNode("time", null, _toDisplayString(_ctx.commentFormatTime(_ctx.item.createTime)), 1 /* TEXT */),
        _createTextVNode("    "),
        _createCommentVNode(" 时间 "),
        _createElementVNode("span", null, [
          (_ctx.item.operatingSystem.includes('Mac'))
            ? (_openBlock(), _createElementBlock("i", {
                key: 0,
                class: "fa fa-apple"
              }))
            : _createCommentVNode("v-if", true),
          (_ctx.item.operatingSystem.includes('Windows'))
            ? (_openBlock(), _createElementBlock("i", {
                key: 1,
                class: "fa fa-windows"
              }))
            : _createCommentVNode("v-if", true),
          _createTextVNode(" " + _toDisplayString(_ctx.item.operatingSystem), 1 /* TEXT */)
        ]),
        _createTextVNode("    "),
        _createCommentVNode(" 设备型号 eg：windows 10 / macos "),
        _createElementVNode("span", null, [
          _createElementVNode("i", {
            class: _normalizeClass(['fa', `fa-${_ctx.item.browserIcon}`]),
            style: {"margin-right":"2px"}
          }, null, 2 /* CLASS */),
          _createCommentVNode(" <i class=\"fa fa-safari\" />\r\n                <i class=\"fa fa-firefox\" />\r\n                <i class=\"fa fa-edge\" />\r\n                <i class=\"fa fa-opera\" /> "),
          _createTextVNode(" " + _toDisplayString(_ctx.item.browser), 1 /* TEXT */)
        ]),
        _createCommentVNode(" 浏览器版本 "),
        _createElementVNode("span", {
          class: "comment-reply",
          onClick: $event => (_ctx.handleReply(_ctx.item, _ctx.cid))
        }, null, 8 /* PROPS */, ["onClick"])
      ])
    ], 8 /* PROPS */, ["id"]),
    _renderSlot(_ctx.$slots, "default")
  ]))
}

// Check the console for the AST