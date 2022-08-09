<template>
  <div>
    <Page
      :total="total"
      :current="current"
      @pageChange="handlePageChange"
    ></Page>
  </div>
</template>

<script>
import Page from "./index.vue";

export default {
  components: {
    Page,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
<style scoped></style>

