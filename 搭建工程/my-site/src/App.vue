<template>
  <div id="app">
    <layout>
      <template #left>
        <div class="left">
          <SiteAside></SiteAside>
        </div>
      </template>
      <template>
        <div class="main">
          <router-view></router-view>
        </div>
      </template>
    </layout>
    <ToTop></ToTop>
  </div>
</template>
<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";

export default {
  name: "app",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

#app {
  .self-fill(fixed);
}
.left {
  width: 250px;
  height: 100%;
}
.main {
  height: 100%;
}
</style>



