import { createStore } from "vuex";
export default createStore({
  state: {
    menuState: false,
    theme: "",
    bgColor: "",
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
  },
  actions: {},
  modules: {},
});
