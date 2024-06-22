import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path:'/project',
      name:'project',
      component: () => import('@/views/ProjectView.vue')
    },
    {
      path:'/Project-Details',
      name:'projectdetails',
      component: () => import('@/views/ProjectDetails.vue')
    },
    {
      path:'/contact',
      name:'contact',
      component: () => import('@/views/contact.vue')
    },
    {
      path:'/news-event',
      name:'newsandevent',
      component: () => import('@/views/NewsandEvent.vue')
    },
    {
      path:'/about',
      name:'about',
      component: () => import('@/views/About.vue')
    }
    
    
  ]
})

export default router
