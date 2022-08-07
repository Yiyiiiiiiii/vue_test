<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
// import "@"是返回src目录
export default {
  data() {
    return {
      myIcon: {
        user: "icon-icon-test10",
        email: "icon-icon-test9",
      },
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    // 图标类样式
    fontClass() {
      console.log(this.myIcon[this.type]);
      return this.myIcon[this.type];
    },
  },
};
</script>

<style>
/* import "~@"是返回src目录 */
@import "//at.alicdn.com/t/c/font_3573232_99cyobm07qg.css";
</style>