import imgUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
// 导出指令配置对象
export default function (el, binding) {
    // 存放loadingImg元素
    const curImg = getLoadingImg(el);
    // 根据bind.value的值，决定创建或删除loadingImg元素
    if (binding.value) {
        // 判断Dom中是否已经有了loadingImg元素
        if (!curImg) {
            const image = createImg();
            el.appendChild(image);
        }
    } else {
        if (curImg) {
            curImg.remove()
        }

    }
}
// 判断
function getLoadingImg(el) {
    return el.querySelector("img[data-role=loading]");
}
// 创建img元素
function createImg() {
    const img = document.createElement("img");
    // 自定义属性
    img.dataset.role = "loading";
    img.src = imgUrl;
    img.className = styles.loading;
    return img;
}