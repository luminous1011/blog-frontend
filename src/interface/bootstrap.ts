import { Router } from 'vue-router';
import { Store } from 'vuex';

interface IBootstrapProps{
    router:Router,
    store:Store<Object>
}
export {
    IBootstrapProps
}