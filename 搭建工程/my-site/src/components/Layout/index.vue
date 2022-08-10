<template>
  <div class="layout-container">
    <!-- 左边 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 主区域 -->
    <div class="main">
      <slot></slot>
    </div>
    <!-- 右边区域 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    // 不受伸缩的影响
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>