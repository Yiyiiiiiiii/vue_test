<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="handleMessage">Click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleMessage() {
      this.$showMessage({
        content: "评论成功",
        type: "success",
        duration: 2000,
        container: this.$refs.home,
        callback: function () {
          console.log("完成！");
        },
      });
    },
  },
};
</script>

<style>
.home-container {
  background-color: aqua;
  width: 300px;
  height: 500px;
  border: 1px solid;
  margin: 50px auto;
}
</style>