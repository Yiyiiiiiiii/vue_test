<template>
  <div id="app">
    <h1>App组件</h1>
    <Avatar
      url="https://img2.baidu.com/it/u=150526058,2417809441&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1659978000&t=3d6bd8f6a1227acb5858230cbedf0f78"
      :size="50"
    />
    <!-- 传递是数字的时候用 : -->
    <!-- <Avatar :url="1"/> -->
    <Avatar
      url="https://img2.baidu.com/it/u=150526058,2417809441&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1659978000&t=3d6bd8f6a1227acb5858230cbedf0f78"
      :size="150"
    />
    <Icon type="user"></Icon>
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue";
import Icon from "./components/Icon.vue";

export default {
  name: "App", //如果组件没有在注册的时候指定名字，则使用该名字
  components: {
    Avatar,
    Icon,
  },
};
</script>
<style scoped></style>

