<template>
  <div class="siteAside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="120"></Avatar>
      <h1 class="title">{{ data.siteTitle }}</h1>
    </template>

    <Menu></Menu>
    <Contact v-if="data"></Contact>
    <p v-if="data" class="footer">{{ data.icp }}</p>
  </div>
</template>
  
<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: {
    ...mapState("setting", ["data"]),
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