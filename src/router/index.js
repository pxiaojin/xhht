import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// 路由
import Home from '../views/home'
import ObjList from '../views/objList'
import NotFound from '../views/404'
import Detail from '../views/detail'
import Update from '../views/update'
import Correct from '../views/correct'
import Login from '../views/login'
import Option2 from '../views/option2'
import Option3 from '../views/option3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect: '/objList',
    children: [
      {
        name: "objList",
        path: "/objList",
        component: ObjList
      },
      {
        name: "option2",
        path: "/option2",
        component: Option2
      },
      {
        name: "option3",
        path: "/option3",
        component: Option3
      },
      {
        name: "detail",
        path: "/detail",
        component: Detail
      },
      {
        name: "correct",
        path: "/correct",
        component: Correct
      },
      {
        name: "update",
        path: "/update",
        component: Update
      }
    ]
  },
  {
    name: "login",
    path: "/login",
    component: Login
  },
  {
    path: '*',
    name: 'notfount',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
// if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//   if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//     next();
//   } else {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//     })
//   }
// } else {
//   next();
// }

if (store.state.token) {
  next()
} else {
  if (to.path !== '/login') {
    // 如果没有登录，但你访问其他需要登录的页面，那我就让你跳到登录页面去
    next({path: '/login'})
  } else {
    // 如果没有登录，但你访问的login，那就不干涉你，让你访问
    next()
  }
}
})

export default router
