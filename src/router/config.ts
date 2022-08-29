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
    {
        path: "/essaypoetry",
        name: "essaypoetry",
        component: () => import('@/pages/essayPoetry/EssayPoetry.vue'),
    },
    {
        path: "/music",
        name: "music",
        component: () => import('@/pages/music/Music.vue'),
    },
    // {
    //     path: "/*",
    //     redirect:"/"
    // },
];

export default routes