import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGalleries from '../views/AllGalleries.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import CreateGallery from '../components/CreateGallery.vue'
import MyGalleries from '../components/MyGalleries.vue'
import {globalAuthGuard} from '../guards/authGuard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllGalleries',
    component: AllGalleries,
    
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestRequired: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guestRequired: true },
  },
  {
    path: '/create',
    name: 'Create',
    component: CreateGallery,
    meta: { authRequired: true },
  },
  {
    path: '/mygalleries',
    name: 'MyGalleries',
    component: MyGalleries,
    meta: { authRequired: true },
  },
  {
    path: '/user',
    name: 'User',
    
    meta: { authRequired: true },
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach(globalAuthGuard);

export default router
