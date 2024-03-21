import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/SobreNosView.vue')
    },
    {
      path: '/product',
      redirect: '/'
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CarrinhoView.vue')
    }
  ]
})

export default router
