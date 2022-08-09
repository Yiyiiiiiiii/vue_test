<template>
  <div class="empty-img">
    <Icon type="empty"></Icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    // 显示的文字
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script> 

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-img {
  .self-center();
  color: @gray;
  text-align: center;
}
// icon-container 是Icon的根组件，可以在这修改
.icon-container {
  font-size: 72px;
}
</style>