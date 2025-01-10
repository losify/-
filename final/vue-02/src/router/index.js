import * as VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/academy',
    name: 'Academy',
    component: () => import('@/views/academy.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('@/views/education.vue')
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('@/views/research.vue')
  },
  {
    path: '/admission',
    name: 'Admission',
    component: () => import('@/views/admission.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/contact.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile.vue')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router 