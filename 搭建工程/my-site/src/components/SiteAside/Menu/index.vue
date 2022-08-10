<template>
  <nav class="menu-container">
    <a
      :href="item.link"
      v-for="item in items"
      :key="item.link"
      :class="{ selected: handleSelect(item) }"
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import "@/styles/global.less";
export default {
  components: { Icon },
  data() {
    return {
      items: [
        {
          link: "/",
          icon: "code",
          title: "首页",
          selected: true,
        },
        {
          link: "/blog",
          icon: "blog",
          title: "文章",
          startwith: true, //开头是blog的就为选中
        },
        {
          link: "/about",
          icon: "about",
          title: "关于我",
        },
        {
          link: "/code",
          icon: "code",
          title: "项目&效果",
        },
        {
          link: "/chat",
          icon: "chat",
          title: "留言板",
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      var link = item.link.toLowerCase(); //菜单的地址链接 toLowerCase变小写
      var pathName = location.pathname.toLowerCase(); //浏览器地址链接
      //如果元素中有statwith存在且为true,返回浏览器开头是否包含link部分的判断
      if (item.startwith) {
        return pathName.startsWith(link);
      } else {
        return pathName === link;
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  padding: 24px 0;
  a {
    display: block;
    display: flex;
    padding: 0 50px;
    align-items: center;
    height: 45px;
    &:hover {
      color: #fff;
    }
    &.selected {
      // 对@words颜色加深
      background: darken(@words, 3%);
    }

    .icon {
      width: 20px;
    }
  }
}
</style>