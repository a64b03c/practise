import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "root",
      component: () => import("@/layouts/default.vue"),
    },
  ],
});

export default router;
