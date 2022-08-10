<template>
  <ul class="Contact-container">
    <li>
      <a href="#">
        <div class="Icon">
          <Icon type="github"></Icon>
        </div>
        <p>Yi-iii</p>
      </a>
    </li>
    <li>
      <a href="mailto:2996108859@qq.com">
        <div class="Icon">
          <Icon type="mail"></Icon>
        </div>
        <p>2996108859@qq.com</p>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=2996108859&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="Icon">
          <Icon type="qq"></Icon>
        </div>
        <p>2996108859</p>
      </a>
      <div class="pop">
        <img src="../../../assets/qq.jpg" alt="" />
      </div>
    </li>
    <li>
      <a
        href="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
      >
        <div class="Icon weixin">
          <Icon type="weixin"></Icon>
        </div>
        <p>Yiiii</p>
      </a>
      <div class="pop">
        <img src="../../../assets/weixin.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
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
      font-size: 14px;
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