import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "home",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "about",
    },
  },
  {
    path: "/Rank",
    name: "Rank",
    component: () => import("../views/Rank.vue"),
    meta: {
      title: "rank",
    },
  },
  {
    path: "/Messages",
    name: "Messages",
    component: () => import("../views/Messages.vue"),
    meta: {
      title: "Messages",
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "Login",
    },
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
    meta: {
      title: "treetest",
    },
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../views/todo/todo.vue"),
    meta: {
      title: "todo",
    },
  },
  {
    path: "/components",
    name: "components",
    component: () => import("../views/components.vue"),
    meta: {
      title: "components",
    },
  },
  {
    path: "/todoList",
    name: "todoList",
    component: () => import("../views/Todo.vue"),
    meta: {
      title: "components",
    },
  },
  {
    path: "*",
    redirect: "/about",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// 这里可以写各种跳转条件的判断,使用原生的JavaScript

router.beforeEach((to, from, next) => {
  console.log(to);
  window.document.title = to.meta.title; // 设置标题
  window.scrollTo(0, 0); // 滚动到起始位置

  // if (window.localStorage.getItem("token")) {
  //   next();
  // } else next("/Login");

  next(); // 一定要调用该方法，否则无法跳转
});

export default router;