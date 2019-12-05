import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import ObjList from '../views/objList'
import NotFound from '../views/404'
import Detail from '../views/detail'
import Update from '../views/update'
import Correct from '../views/correct'
import Option2 from '../views/option2'
import Option3 from '../views/option3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // redirect: '/objList',
    children : [
      {
        name : "objList",
        path : "/objList",
        component : ObjList
      },
      {
        name : "option2",
        path : "/option2",
        component : Option2
      },
      {
        name : "option3",
        path : "/option3",
        component : Option3
      },
      {
        name : "detail",
        path : "/detail",
        component : Detail
      },
      {
        name : "correct",
        path : "/correct",
        component : Correct
      },
      {
        name : "update",
        path : "/update",
        component : Update
      }
    ]
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

export default router
