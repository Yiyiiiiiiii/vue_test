<template>
  <div class="siteAside-test">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import SiteAside from "./";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less">
@import "~@/styles/var.less";
.siteAside-test {
  width: 400px;
  height: 600px;
  border: 1px solid;
  background-color: @dark;
  margin: 0 auto;
}
</style>