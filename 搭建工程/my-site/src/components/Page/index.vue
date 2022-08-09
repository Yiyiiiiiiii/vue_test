<template>
  <!-- 只有总页数大于1时才显示 -->
  <!-- 变动频繁用v-show （v-show改变visible） 否则用v-if （v-if会减少dom结点） -->
  <div class="page-container" v-if="pageNumber > 1">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)"
      >|&lt;&lt;</a
    >
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)"
      >&lt;&lt;</a
    >
    <a
      :class="{ active: current == n }"
      v-for="(n, i) in numbers"
      :key="i"
      @click="handleClick(n)"
      >{{ n }}</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(pageNumber)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 页容量
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数即最大页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示的最小页码
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage == this.current) {
        return;
      }
      // 抛出一个事件 使用实例成员emit
      // emit("事件名字",事件参数即数据)
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.page-container {
  // 居中
  display: flex;
  justify-content: center;

  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>