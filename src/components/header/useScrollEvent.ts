import { ref } from "vue";

export default function () {
    //监听页面滚动事件
    //1.向下滚动 隐藏header头
    //2.向上滚动 导出header头
    const scrollSwitch = ref(false);
    let windowPageYOffsetPrev: number;
    document.addEventListener("scroll", () => {
        if (window.pageYOffset > windowPageYOffsetPrev && window.pageYOffset > 30) {
            //页面偏移量大于滚动条上次记录的位置
            scrollSwitch.value = true;
        } else {
            scrollSwitch.value = false;
        }
        windowPageYOffsetPrev = window.pageYOffset;
    });
    return { scrollSwitch }
}