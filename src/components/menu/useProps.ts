import { defineProps, toRefs } from "vue";

export default () => {
    interface Props {
        state: boolean;
    }
    const props: Props = defineProps({
        state: Boolean,
    });
    return toRefs(props)
}