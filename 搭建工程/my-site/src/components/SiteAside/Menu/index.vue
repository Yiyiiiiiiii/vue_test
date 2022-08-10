<template>
  <nav class="menu-container">
    <router-link
      :exact="item.exact"
      :to="{ name: item.name }"
      v-for="item in items"
      :key="item.link"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon"></Icon>
      </div>
      <span>{{ item.title }}</span>
    </router-link>
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
          name: "Home",
          icon: "code",
          title: "首页",
          // exact 只有精确匹配到导航路径，才会添加激活类样式
          // active-class="selected"  激活类样式名 默认值router-link-active
          // exact-active-class="" 激活类样式名 默认值router-link-exact-active
          exact: true,
        },
        {
          name: "Blog",
          icon: "blog",
          title: "文章",
          exact: false,
        },
        {
          name: "About",
          icon: "about",
          title: "关于我",
          exact: true,
        },
        {
          name: "Project",
          icon: "code",
          title: "项目&效果",
          exact: true,
        },
        {
          name: "Message",
          icon: "chat",
          title: "留言板",
          exact: true,
        },
      ],
    };
  },
  // methods: {
  //   handleSelect(item) {
  //     var link = item.link.toLowerCase(); //菜单的地址链接 toLowerCase变小写
  //     var pathName = location.pathname.toLowerCase(); //浏览器地址链接
  //     //如果元素中有statwith存在且为true,返回浏览器开头是否包含link部分的判断
  //     if (item.startwith) {
  //       return pathName.startsWith(link);
  //     } else {
  //       return pathName === link;
  //     }
  //   },
  // },
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
    height: 40px;
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