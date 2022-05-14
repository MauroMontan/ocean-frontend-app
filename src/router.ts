import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/home_view.vue"),
    },
];



const router = createRouter({
    history: createWebHistory(),
    routes,
}
);

export default router;

