<template>
  <div class="about-container" v-loading="loading">
    <iframe v-if="src" :src="src" frameborder="0"></iframe>
    <Empty v-if="!src && !loading"></Empty>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Empty from "@/components/Empty";
export default {
  components: {
    Empty,
  },
  data() {
    return {
      loadEnd: false,
    };
  },
  computed: {
    ...mapState("about", {
      src: "data",
      loading: "loading",
    }),
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>