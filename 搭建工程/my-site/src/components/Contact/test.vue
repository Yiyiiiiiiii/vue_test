<template>
  <div class="Contact-test">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.Contact-test {
  position: relative;
  width: 300px;
  height: 500px;
  border: 2px solid red;
  margin: 100px auto;
  background-color: @dark;
}
</style>