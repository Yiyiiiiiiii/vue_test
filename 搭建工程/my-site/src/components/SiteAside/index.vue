<template>
  <div class="siteAside-container">
    <Avatar
      url="https://img2.baidu.com/it/u=4172589341,3697363131&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1660237200&t=7519b59d3232648774c40f0ce6366b1c"
      :size="120"
    ></Avatar>
    <h1 class="title">Yiiiii</h1>
    <Menu></Menu>
    <Contact></Contact>
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.siteAside-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: @dark;
  padding-top: 20px;
}
.avatar-img {
  margin: 0 auto;
}
.title {
  text-align: center;
  font-size: 1.2em;
  color: @lightWords;
}
.footer {
  text-align: center;
}
</style>