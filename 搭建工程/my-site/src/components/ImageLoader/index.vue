<template>
  <div class="ImageLoader-content">
    <img v-if="!everyLoad" :src="placeholder" class="placeholder" />
    <img :src="src" @load="handleLoad" :style="{ opacity: changeopacity }" />
  </div>
</template>

<script>
export default {
  props: {
    // 原始图片的路径
    src: {
      type: String,
      required: true,
    },
    // 原始图片加载完成前的占位图片
    placeholder: {
      type: String,
      required: true,
    },
    // 原始图片加载完成后，切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default: 1500,
    },
  },
  data() {
    return {
      loaded: false,
      everyLoad: false,
    };
  },
  computed: {
    changeopacity() {
      return this.loaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.loaded = true;
      setTimeout(() => {
        this.everyLoad = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.ImageLoader-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    // 解决图片拉伸会比例失调的问题
    object-fit: cover;
  }
  .placeholder {
    // filter滤镜函数 blur高斯模糊blur(px)
    filter: blur(2vw);
  }
}
</style>