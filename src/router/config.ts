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
    {
        path: "/photos",
        name: "photos",
        component: () => import('@/pages/photos/Photos.vue'),
    },
    {
        path: "/web",
        name: "web",
        component: () => import('@/pages/web/Web.vue'),
    },
    {
        path: "/java",
        name: "java",
        component: () => import('@/pages/java/Java.vue'),
    },
    {
        path: "/friends",
        name: "friends",
        component: () => import('@/pages/friends/Friends.vue'),
    },
    // {
    //     path: "/*",
    //     redirect:"/"
    // },
];

export default routes