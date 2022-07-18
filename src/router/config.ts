import { RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import('@/pages/home/Home.vue'),
    },
    {
        path: "/about",
        name: "about",
        component: () => import('@/pages/about/About.vue'),
    },
];

export default routes