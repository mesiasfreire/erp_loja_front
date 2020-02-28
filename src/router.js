import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      description: "Home",
      icon: "home",
      name: "home",
      as:"/login",
      component: Login
    },
    {
      path: "/dashboard",
      description: "Dashboard",
      icon: "home",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/vendas",
      redirect: { name: "vendas-home" },
      description: "Vendas",
      icon: "attach_money",
      name: "vendas",
      component: () => (
        import("./Modules/Vendas"),
        import("./Modules/Vendas/views/Home.vue")
      ),
      children: []
    }
  ]
});

export default router;
