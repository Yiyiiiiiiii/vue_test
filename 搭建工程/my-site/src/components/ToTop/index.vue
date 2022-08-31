<template>
  <div class="to-top-container" @click="handleTop" v-show="show">TOP</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleTop() {
      this.$bus.$emit("setmainScroll", 0);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.to-top-container {
  position: fixed;
  z-index: 99;
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  right: 50px;
  bottom: 25px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>