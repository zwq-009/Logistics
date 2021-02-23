import Vue from "vue";
import VueRouter from "vue-router";

import Register from "../src/login/Register.vue";
import Relation from "./components/Relation.vue";
import Home from "./components/Home.vue";
import Order from "./components/Order.vue";
import Center from "./components/Center.vue";

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      // 登录接口
      path: '/login',
      name: 'login',
      component: () => import('./login/Login.vue')
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/relation",
      component: Relation,
    },
    {
      path: "/order",
      component: Order,
    },
    {
      path: "/center",
      component: Center,
    },

  ],
});

export default router;
