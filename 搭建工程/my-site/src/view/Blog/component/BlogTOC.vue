<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWidthSelect" @active="handleSelect"></RightList>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import debounce from "@/utils/debounce";
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "article-md-title-1",
    };
  },
  components: { RightList },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWidthSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    // 根据toc得到它们对应的元素数组设置dom
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    // 防抖
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      // 由于后续要重新设置，先清空之前的状态
      this.activeAnchor = "";
      const ranger = 200;
      // 看一下当前这个dom元素是不是应该被选中
      for (const dom of this.doms) {
        if (!dom) {
          return;
        }
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        // 在规定的范围内
        if (top >= 0 && top <= ranger) {
          this.activeAnchor = dom.id;
        }
        // 在规定的范围下方
        else if (top > ranger) {
          return;
        }
        // 在规定的范围上方
        else {
          // 先假设自己是激活的，然后继续看后面
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>