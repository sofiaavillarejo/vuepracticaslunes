import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollaztComponent from "./components/CollaztComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const myRoutes = [
  {
    path:"/", component: HomeComponent
  },
  {
    path:"/collazt", component: CollaztComponent
  }
  ,
  {
    path:"/tabla", component: TablaMultiplicar
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
})

export default router;