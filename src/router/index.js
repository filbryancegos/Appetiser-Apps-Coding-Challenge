import Vue from 'vue'
import VueRouter from 'vue-router'
import { Login, Register, Success, Verification } from '../views'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
  {
    path: '/verification',
    name: 'Verification',
    component: Verification
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
