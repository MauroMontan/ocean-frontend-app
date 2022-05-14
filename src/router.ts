import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/home_view.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./views/About.vue"),
    },
    {
        path: "/rank",
        name: "Rank",
        component: () => import("./views/RankView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
}
);

export default router;

