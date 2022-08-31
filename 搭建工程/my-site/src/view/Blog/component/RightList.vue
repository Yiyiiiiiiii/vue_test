<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleSelect(item)">{{
        item.name
      }}</span>
      <span
        :class="{ active: item.isSelect }"
        v-if="item.aside"
        class="aside"
        @click="handleSelect(item)"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @active="handleSelect"></RightList>
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
    list: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    handleSelect(item) {
      if (!item.isSelect) {
        this.$emit("active", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    cursor: pointer;
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .active {
    color: @warn;
    font-weight: bold;
  }
}
.aside {
  color: @gray;
  font-size: 12px;
  margin-left: 1em;
}
</style>