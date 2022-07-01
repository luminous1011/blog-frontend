const header = document.querySelector('#header')


//监听页面滚动事件
//1.向下滚动 隐藏header头
//2.向上滚动 导出header头
let windowPageYOffsetPrev
document.addEventListener('scroll', () => {
    if (window.pageYOffset > windowPageYOffsetPrev) {
        header.classList.remove('slideDown')
        header.classList.add('slideUp')
    } else {
        header.classList.remove('slideUp')
        header.classList.add('slideDown')
    }
    windowPageYOffsetPrev = window.pageYOffset
})