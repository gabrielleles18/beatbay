import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/discover',
            name: 'discover',
            component: () => import('../views/Discover.vue'),
        },
    ],
})

export default router
