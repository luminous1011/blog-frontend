let Vue;
class VueRouter {
    constructor(options) {
        this.$options = options
        Vue.util.defineReactive(this, 'current', location.hash.slice(1) || '/')
        addEventListener('hashchange', () => {
            this.current = location.hash.slice(1)
        })
    }
    static install(_Vue) {
        Vue = _Vue
        Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    Vue.prototype.$router = this.$options.router
                }
            }
        })
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
            }
        })
        Vue.component('router-view', {
            render(h) {
                console.log(this.$router.current)
                const route = this.$router.$options.routes.find(route => route.path == this.$router.current)
                return h( route.component)
            }
        })
    }
}
export default VueRouter