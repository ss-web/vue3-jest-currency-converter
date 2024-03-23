import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import CurrencyConverter from "@/views/CurrencyConverter.vue";
import CurrencyList from "@/views/CurrencyList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/currency-list",
  },
  {
    path: "/currency-list",
    component: CurrencyList,
  },
  {
    path: "/currency-converter",
    component: CurrencyConverter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
