import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About/AboutView.vue')
    },
  {
    path: '/photos',
    name: 'photos',
    component: () => import('../views/Photos/PhotosView.vue')
  },
  {
    path: '/contact-me',
    name: 'contact-me',
    component: () => import('../views/ContactMe/ContactMeView.vue')
  },
  {
    path: '/individual-photo-view/:id',
    name: 'individual-photo-view',
    props: true,
    component: () => import('../views/Photos/IndividualPhotoView.vue')
  }
  ]
})

export default router
