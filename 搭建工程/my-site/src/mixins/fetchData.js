// 公共的获取远程数据代码

// import { getBanner } from "@/api/banner"

// 具体的组件中，需要提供一个远程获取数据的方法  fetchData
export default function (defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
}