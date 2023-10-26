import { createStore } from "vuex";
export default createStore({
  state: {
    menuState: false,
    theme: "",
    bgColor: "",
    footerVisible: true,
    meta: {}
  },
  getters: {},
  mutations: {
    setMenuState(state, menuState) {
      state.menuState = menuState;
    },
    setTheme(state, theme) {
      state.theme = theme;
    },
    setBgColor(state, bgColor) {
      state.bgColor = bgColor;
    },
    setFooterVisible(state, footerVisible) {
      state.footerVisible = footerVisible;
    },
    setMeta(state, meta) {
      state.meta = meta
    }
  },
  actions: {},
  modules: {},
});
