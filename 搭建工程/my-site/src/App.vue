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
  </div>
</template>
<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";

export default {
  name: "app",
  components: {
    Layout,
    SiteAside,
  },
};
</script>

<style lang="less">
@import "~@/styles/mixin.less";

#app {
  .self-fill(fixed);
}
.left {
  width: 300px;
  height: 100%;
}
</style>



