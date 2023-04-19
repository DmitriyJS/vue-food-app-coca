import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthPage from "@/components/pages/AuthPage.vue";
import Empty from "@/components/Empty.vue";
import MenuPage from "@/components/pages/MenuPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
  },
  {
    path: "/menu",
    name: "menu",
    component: Empty,
    children: [
      {
        path: "food",
        name: "food",
        component: MenuPage,
        props: {
          foodType: 'food'
        }
      },
      {
        path: "coffee",
        name: "coffee",
        component: MenuPage,
        props: {
          foodType: 'coffee'
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
