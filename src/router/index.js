import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' },
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: { title: 'Blog', description: 'Read our latest articles and updates on various topics. Read our latest articles and updates on various topics. Read our latest articles and updates on various topics.' },
    },
  ],
})

router.afterEach((to) => {
  document.title = "iOqil.uz • " + (to.meta.title || to.name)
})

export default router
