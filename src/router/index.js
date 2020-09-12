import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Rank",
    name: "Rank",
    component: () => import("../views/Rank.vue"),
  },
  {
    path: "/Messages",
    name: "Messages",
    component: () => import("../views/Messages.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // {
  //   path: "/row_test",
  //   name: "row_test",
  //   component: () => import("../views/RowColumn.vue"),
  // },
  {
    path: "/treeTest",
    name: "treeTest",
    component: () => import("../views/treeTest.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
