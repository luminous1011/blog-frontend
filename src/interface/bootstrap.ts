import { Router } from 'vue-router';
import { Store } from 'vuex';

export interface IBootstrapProps{
    router:Router,
    store:Store<Object>
}
