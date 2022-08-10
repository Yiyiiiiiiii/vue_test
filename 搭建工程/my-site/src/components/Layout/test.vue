<template>
  <div class="layout-test">
    <Layout>
      <!-- 左 -->
      <template #left>
        <div class="left"></div>
      </template>
      <!-- 主 -->
      <template>
        <div class="main"></div>
      </template>
      <!-- 右 -->
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style>
.layout-test {
  width: 500px;
  height: 400px;
  border: 1px solid black;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background-color: antiquewhite;
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgb(232, 136, 10);
}
.right {
  width: 100px;
  height: 100%;
  background-color: aqua;
}
</style>