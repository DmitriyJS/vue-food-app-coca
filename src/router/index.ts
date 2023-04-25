import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthPage from "@/components/pages/AuthPage.vue";
import Empty from "@/components/Empty.vue";
import MenuPage from "@/components/pages/MenuPage.vue";
import Page404 from "@/components/pages/Page404.vue";

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
        path: "",
        name: "all",
        component: MenuPage,
        props: {
          foodType: 'all'
        }
      },
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
      {
        path: "bread",
        name: "bread",
        component: MenuPage,
        props: {
          foodType: 'bread'
        }
      },
      {
        path: "beverages",
        name: "beverages",
        component: MenuPage,
        props: {
          foodType: 'beverages'
        }
      },
      {
        path: "appetizer",
        name: "appetizer",
        component: MenuPage,
        props: {
          foodType: 'appetizer'
        }
      },
      {
        path: "snack",
        name: "snack",
        component: MenuPage,
        props: {
          foodType: 'snack'
        }
      },
    ],
  },
  {
    path: "/",
    redirect: "/auth",
  },
  {
    path: '/:pathMatch(.*)*',
    name: "404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
