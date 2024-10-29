import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollaztComponent from "./components/CollaztComponent.vue";

const myRoutes = [
  {
    path:"/", component: HomeComponent
  },
  {
    path:"/collazt", component: CollaztComponent
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;