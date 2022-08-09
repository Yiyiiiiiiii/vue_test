<template>
  <div class="Contact-container">
    <a href="#">
      <div class="Icon">
        <Icon type="github"></Icon>
      </div>
      <p>Yi-iii</p>
    </a>
    <a href="mailto:2996108859@qq.com">
      <div class="Icon">
        <Icon type="email"></Icon>
      </div>
      <p>2996108859@qq.com</p>
    </a>
    <a
      href="tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
    >
      <div class="Icon">
        <Icon type="qq"></Icon>
      </div>
      <p>2996108859</p>
    </a>
    <a
      href="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
    >
      <div class="Icon">
        <Icon type="weixin"></Icon>
      </div>
      <p>Yiiii</p>
    </a>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.Contact-container {
  width: 100%;
  height: 300px;
  .self-center();
  a {
    display: flex;
    cursor: pointer;
    .Icon,
    p {
      color: #d1d1d1;
      font-size: 19px;
    }
    .Icon {
      margin: auto 10px;
    }
  }
}
</style>