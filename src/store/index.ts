import { createStore } from "vuex";
export default createStore({
  state: {
    menuState: false,
  },
  getters: {},
  mutations: {
    setMenuState(state, menuState) {
      state.menuState = menuState;
    },
  },
  actions: {},
  modules: {},
});
