export default function (mainRef) {
    return {
        mounted() {
            this.$bus.$on("setmainScroll", this.handleSetMainScroll);
            this.$refs[mainRef].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroyed() {
            this.$bus.$emit("mainScroll");
            this.$refs.container.removeEventListener("scroll", this.handleMainScroll);
            this.$bus.$off("setmainScroll", this.handleSetMainScroll);
        },
        methods: {
            handleMainScroll() {
                // 触发事件，放入事件总线，传入滚动的dom元素
                this.$bus.$emit("mainScroll", this.$refs[mainRef]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[mainRef].scrollTop = scrollTop;
            },
        }

    }
}