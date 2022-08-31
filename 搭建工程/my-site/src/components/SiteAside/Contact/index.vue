<template>
  <ul class="Contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="Icon">
          <Icon type="github"></Icon>
        </div>
        <p>{{ data.githubName }}</p>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="Icon">
          <Icon type="mail"></Icon>
        </div>
        <p>{{ data.mail }}</p>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="Icon">
          <Icon type="qq"></Icon>
        </div>
        <p>{{ data.qq }}</p>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="Icon weixin">
          <Icon type="weixin"></Icon>
        </div>
        <p>{{ data.weixin }}</p>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.Contact-container {
  list-style: none;
  margin: 0;
  padding: 20px;
  color: @gray;
  li {
    height: 30px;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    a {
      display: flex;
      align-items: center;
      font-size: 12px;
      .Icon {
        font-size: 26px;
        margin-right: 5px;
      }
      .weixin {
        font-size: 32px;
        margin-left: -3px;
      }
    }
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  .pop {
    position: absolute;
    left: 0;
    background-color: #fff;
    bottom: 25px;
    transform: scaleY(0);
    transform-origin: center bottom;
    border-radius: 5px;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      left: 50%;
      bottom: -5px;
      transform: rotate(45deg);
      background-color: #fff;
    }
  }
}
</style>