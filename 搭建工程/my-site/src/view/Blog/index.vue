<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./component/BlogList";
import BlogCategory from "./component/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  },
};
</script>

<style></style>
