import defaultGif from "@/assets/default.gif";
import eventBus from "@/eventBus";
import { debounce } from "@/utils";

let imgs = [];
eventBus.$bus.$on("mainScroll", debounce(handleScroll, 50));

// 循环图片数组
function setImgs() {
    for (const img of imgs) {
        // 调用处理单张图片函数
        setImg(img);
    }
}
// 设置单张图片
function setImg(img) {
    img.dom.src = defaultGif; // 先暂时使用着默认图片
    // 处理图片
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    // 该图片在视口范围内
    if (rect.top >= -height && rect.top <= clientHeight) {
        img.dom.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }
}

function handleScroll() {
    setImgs();
}

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img);
        // 立即处理
        setImg(img);
    },
    // 删掉不在可视窗口的
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el);
    }
}