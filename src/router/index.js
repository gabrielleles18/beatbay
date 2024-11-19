import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView'
import PageNotFound from "@/views/PageNotFound.vue";

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
        {path: '/:pathMatch(.*)*', component: PageNotFound}
    ],
})

export default router
