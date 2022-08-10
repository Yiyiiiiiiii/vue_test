<template>
  <div class="menu-test">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style scoped>
.menu-test {
  width: 400px;
  height: 600px;
  background-color: #000;
  border: 2px solid red;
  margin: 100px auto;
}
</style>

