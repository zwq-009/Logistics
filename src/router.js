import Vue from "vue";
import VueRouter from "vue-router";

import Relation from "./components/Relation.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Order from "./components/Order.vue";
import Center from "./components/Center.vue";
import Write from "./components/Write.vue";
import Detail from "./components/order/Detail.vue";
// bottom
import Program from "./components/bottom/Program.vue";
import Show from "./components/bottom/Show.vue";
//个人中心

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "hash",
  routes: [
,
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      component: Login,
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
      path: "/write",
      component: Write,
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
      path: "/detail/:id",
      component: Detail,
    },
    {
      path: "/center",
      component: Center,
      meta:{
          title:'个人中心'
      }
    },
    {
      path: "/program",
      component: Program,
    },
    {
      path: "/show",
      component: Show,
    },

  ],
});

export default router;
