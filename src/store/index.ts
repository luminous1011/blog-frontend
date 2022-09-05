import { createStore } from "vuex";
export default createStore({
  state: {
    menuState: false,
    theme:''
  },
  getters: {},
  mutations: {
    setMenuState(state, menuState) {
      state.menuState = menuState;
    },
    setTheme(state,theme){
      state.theme=theme
    }
  },
  actions: {},
  modules: {},
});
