import NProgress from "nprogress";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { IBootstrapProps } from "@/interface/bootstrap";
import "nprogress/nprogress.css";
import { Store } from "vuex";
import { getPageDataById } from "@/service/page";

NProgress.configure({ showSpinner: false });

const META_PAGES = ['/about', "/friends", '/essaypoetry', '/music']
const DARK_HEADERS = ["/photos", "/root"];
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
    // console.error(1);
    console.error(to, from,);

  }
  next();
  // console.error(2);
};

/**
 * 进度条结束
 * @param store
 */
const progressDone = async (store: Store<object>) => {
  const res = META_PAGES.includes(location.pathname) ? await getPageDataById(location.pathname) : null
  await res && store.commit("setMeta", res?.data?.data??{})
  await store.commit("setMenuState", false);

  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  NProgress.done();
};

const changeHeaderTheme = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  options: IBootstrapProps
) => {
  const { store } = options;

  if (DARK_HEADERS.includes(to.path)) {
    store.commit("setTheme", "cus-header-dark");
    store.commit("setBgColor", "cus-bg-dark");
    store.commit("setFooterVisible", false);
  } else {
    store.commit("setTheme", "cus-header-normal");
    store.commit("setBgColor", "cus-bg-normal");
    store.commit("setFooterVisible", true);
  }
  next();
};
export default {
  beforeEach: [progressStart, changeHeaderTheme],
  afterEach: [progressDone],
};
