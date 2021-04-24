import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: "main" },
    component: () => import('../views/Home')
  },
  {
    path: '/courses',
    name: 'Courses',
    meta: { layout: "main" },
    component: () => import('../views/course/CourseAll')
  },
  {
    path: '/course/:id',
    name: 'Course',
    meta: { layout: "main" },
    component: () => import('../views/course/CoursesSingle')
  },
  {
    path: '/login',
    name: 'Логин',
    meta: { layout: "auth" },
    component: () => import('../views/auth/Login')
  },
  {
    path: '/registration',
    name: 'Регистрация',
    meta: { layout: "auth" },
    component: () => import('../views/auth/Registration')
  },
  {
    path: '/code',
    name: 'Код подтверждения',
    meta: { layout: "auth" },
    component: () => import('../views/auth/Code')
  },
  {
    path: '/forgot',
    name: 'Забыли пароль',
    meta: { layout: "auth" },
    component: () => import('../views/auth/Forgot')
  },
  {
    path: '/forgot-code',
    name: 'Код подтверждения',
    meta: { layout: "auth" },
    component: () => import('../views/auth/ForgotCode')
  },
  {
    path: '/new-password',
    name: 'Новый пароль',
    meta: { layout: "auth" },
    component: () => import('../views/auth/NewPassword')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: { layout: "main" },
    component: () => import('../views/Cart')
  },
  {
    path: '/bonus',
    name: 'Bonus',
    meta: { layout: "user" },
    component: () => import('../views/user/Bonus')
  },
  {
    path: '/certificates',
    name: 'Certificates',
    meta: { layout: "user" },
    component: () => import('../views/user/Certificates')
  },
  {
    path: '/desires',
    name: 'Desires',
    meta: { layout: "user" },
    component: () => import('../views/user/Desires')
  },
  {
    path: '/faq',
    name: 'Faq',
    meta: { layout: "user" },
    component: () => import('../views/user/Faq')
  },
  {
    path: '/invite',
    name: 'Invite',
    meta: { layout: "user" },
    component: () => import('../views/user/Invite')
  },
  {
    path: '/notification',
    name: 'Notification',
    meta: { layout: "user" },
    component: () => import('../views/user/Notification')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: "user" },
    component: () => import('../views/user/Profile')
  },
  {
    path: '/user',
    name: 'User',
    meta: { layout: "user" },
    component: () => import('../views/user/User')
  },
  {
    path: '/certified/:id',
    name: 'Certified',
    meta: { layout: "main" },
    component: () => import('../views/course/Certified')
  },
  {
    path: '/certified-courses',
    name: 'Certified Course',
    meta: { layout: "main" },
    component: () => import('../views/course/CertifiedCourse')
  },
  {
    path: '/test-start',
    name: 'Test Start',
    meta: { layout: "main" },
    component: () => import('../views/course/TestStart')
  },
  {
    path: '/test/:id',
    name: 'Test',
    meta: { layout: "main" },
    component: () => import('../views/course/Test.vue')
  },
  {
    path: '*',
    name: '404',
    meta: { layout: "main" },
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
