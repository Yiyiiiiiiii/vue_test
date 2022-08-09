<!-- 头像组件 -->
<template>
  <!-- v-bind 特殊属性绑定写法->如 :style="{}" -->
  <img
    class="avatar-img"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
export default {
  // 属性传递
  // 数组  对象
  // props: ["url"],
  props: {
    //url属性必须是String
    // url: String,
    url: {
      type: String,
      required: true, //url属性不能为空 属性必传
    },
    size: {
      type: Number,
      default: 150, //属性默认值
    },
  },
};
</script>
<style scoped>
/* scoped 带有作用域的样式 隔绝不同组件 */
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>