import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      meta: {
        title: "登录"
      },
      component: (resolve) => require(['../view/login.vue'], resolve)
    }
  ]
})
