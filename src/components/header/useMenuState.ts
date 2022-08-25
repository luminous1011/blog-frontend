import { computed } from "vue";
import { useStore } from "vuex";

export default function () {
  const store = useStore();
  const menuState = computed(() => {
    return store.state.menuState;
  });
  function changeMneuState() {
    store.commit("setMenuState", !menuState.value);
  }
  return { menuState, changeMneuState };
}
