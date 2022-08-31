<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img v-lazy="item.thumb" class="thumb" />
      </a>
      <div class="info">
        <a
          :href="
            item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
          "
          :target="item.url ? '_blank' : '_self'"
        >
          <h2>{{ item.name }}</h2>
        </a>
        <a
          :href="item.github"
          class="github"
          v-if="item.github"
          target="_blank"
        >
          github
        </a>
        <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mainScroll from "@/mixins/mainScroll.js";

export default {
  mixins: [mainScroll("projectContainer")],
  computed: {
    ...mapState("project", ["loading", "data"]),
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-y: auto;
  position: relative;
  padding: 20px;
}
.project-item {
  padding: 20px;
  transition: 0.5s;
  margin-bottom: 20px;
  display: flex;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 200px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    p,
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>