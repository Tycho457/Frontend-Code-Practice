import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Product from "../views/product.vue"
import Shoppingcart from "../views/shoppingcart.vue"


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Product",
    component: Product,
  },
  {
    path: "/shoppingcart",
    name: "Shoppingcart",
    component: Shoppingcart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
