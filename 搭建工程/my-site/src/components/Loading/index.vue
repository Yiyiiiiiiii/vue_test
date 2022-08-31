<template>
  <img class="load-container" :src="loadingUrl" />
</template>

<script>
import loadingUrl from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.load-container {
  .self-center();
}
</style>