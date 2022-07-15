import { ref } from "vue";
export default function () {
    const menuState = ref(false);

    function changeMneuState() {
        menuState.value = !menuState.value;
    }
    return { menuState, changeMneuState }
}