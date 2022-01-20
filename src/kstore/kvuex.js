let Vue;
class Store {
    constructor(options) {
        this._mutations = options.mutations
        this._actions = options.actions
        this._vm = new Vue({
            data() {
                return { $$options: options.state }
            }
        })
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }
    get state() {
        return this._vm._data.$$options
    }
    set state(v) {
        console.error('不可以直接修改')
    }
    commit(type, payload) {
        const mutation = this._mutations[type]
        if (!mutation) {
            console.error('错误的mutation');
            return
        }
        mutation(this.state, payload)
    }
    dispatch(type, payload) {
        const action = this._actions[type]
        if (!action) {
            console.error('错误的action');
            return
        }
        return action(this, payload)
    }
}
function install(_Vue) {
    Vue = _Vue
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}
export default { Store, install }