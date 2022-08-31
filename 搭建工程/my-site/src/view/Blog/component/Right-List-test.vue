<template>
  <RightList :list="list" @active="handleSelect"> </RightList>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        { name: "b", isSelect: false },
        {
          name: "c",
          isSelect: true,
          child: [
            { name: "c-1", isSelect: false },
            { name: "c-2", isSelect: false },
            {
              name: "c-3",
              isSelect: false,
              child: [
                { name: "c-3-1", isSelect: false },
                { name: "c-3-2", isSelect: false },
                { name: "c-3-3", isSelect: false },
              ],
            },
            { name: "c-4", isSelect: false },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      // console.log(item);
      this.list.forEach((it) => {
        if (it.name === item.name) {
          it.isSelect = true;
        }
      });
    },
  },
};
</script>

<style>
</style>