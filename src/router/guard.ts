import NProgress from 'nprogress'
import { NavigationGuardNext, RouteLocationNormalized, } from 'vue-router'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const progressStart = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (NProgress.isStarted()) {
        NProgress.start()
        console.error(1);

    }
    next()
    console.error(2);
}

const progressDone = () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    NProgress.done()
}

export default {
    beforeEach: [progressStart],
    afterEach: [progressDone]
}