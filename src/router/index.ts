import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
  // Se quiser páginas separadas pra produtos ou contato, poderia adicionar
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
