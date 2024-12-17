import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
 {
  path:"/products/:category/:title",
  name:"products_category",
  component: () => import("@/views/ProductsCategory"),
 },
 {
  path:"/products/products-details",
  name:"products_details",
  component: () => import("@/views/ProductsDetails"),
 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
