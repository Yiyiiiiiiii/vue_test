<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
// import "@"是返回src目录
const myIcon = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const types = Object.keys(myIcon);
export default {
  // 第二种方法
  //   data() {
  //     return {
  //       myIcon: {
  //         user: "icon-icon-test10",
  //         email: "icon-icon-test9",
  //       },
  //     };
  //   },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      return myIcon[this.type];
    },
  },
};
</script>

<style>
/* import "~@"是返回src目录 */
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>