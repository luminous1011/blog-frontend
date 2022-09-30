import NProgress from "nprogress";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { IBootstrapProps } from '@/interface/bootstrap';
import "nprogress/nprogress.css";
import { Store } from "vuex";

NProgress.configure({ showSpinner: false });
const DARK_HEADERS = [
  '/photos'
]
/**
 * 进度条开始
 * @param to 
 * @param from 
 * @param next 
 */
const progressStart = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  options: IBootstrapProps
) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
    console.error(1);
  }
  next();
  console.error(2);
};

/**
 * 进度条结束
 * @param store 
 */
const progressDone = (store: Store<object>) => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  store.commit("setMenuState", false);
  NProgress.done();
};

const changeHeaderTheme = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  options: IBootstrapProps
) => {
  const { store } = options
  for (let i = 0; i < DARK_HEADERS.length; i++) {
    if (to.fullPath.includes(DARK_HEADERS[i])) {
      store.commit('setTheme', 'cus-header-dark')
      store.commit('setBgColor', 'cus-bg-dark')
      store.commit('setFooterVisible', false)
      break
    } else {
      store.commit('setTheme', 'cus-header-normal')
      store.commit('setBgColor', 'cus-bg-normal')
      store.commit('setFooterVisible', true)
    }
  }
  next()
}
export default {
  beforeEach: [progressStart, changeHeaderTheme],
  afterEach: [progressDone],
};
