import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/home/Home.vue"),
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/pages/about/About.vue"),
      },
      {
        path: "/essaypoetry",
        name: "essaypoetry",
        component: () => import("@/pages/essayPoetry/EssayPoetry.vue"),
      },
      {
        path: "/music",
        name: "music",
        component: () => import("@/pages/music/Music.vue"),
      },
      {
        path: "/photos",
        name: "photos",
        component: () => import("@/pages/photos/Photos.vue"),
      },
      {
        path: "/web",
        name: "web",
        component: () => import("@/pages/web/Web.vue"),
      },
      {
        path: "/java",
        name: "java",
        component: () => import("@/pages/java/Java.vue"),
      },
      {
        path: "/friends",
        name: "friends",
        component: () => import("@/pages/friends/Friends.vue"),
      },
      {
        path: "/post/:id",
        name: "post",
        component: () => import("@/pages/post/Post.vue"),
      },
    ],
  },
  {
    path: "/root",
    name: "root",
    component:()=>import('@/pages/root')
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/pages/error/404.vue"),//首页暂代404
  },
  {
      path: "/:error*",
      redirect:"/404"
  },
];

export default routes;
