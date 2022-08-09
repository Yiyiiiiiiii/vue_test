<template>
  <div>
    <Avatar url="http://mdrs.yuanjin.tech/img/20201031141350.jpg" :size="50" />
    <!-- 传递是数字的时候用 : -->
    <!-- <Avatar :url="1"/> -->
  </div>
</template>

<script>
import Avatar from "./index.vue";

export default {
  components: {
    Avatar,
  },
  created() {
    console.log(111);
  },
};
</script>
<style scoped></style>

