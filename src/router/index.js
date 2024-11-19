import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView'
import PageNotFound from "@/views/PageNotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/discover',
            name: 'Discover',
            component: () => import('../views/Discover.vue'),
        },
        {path: '/:pathMatch(.*)*', component: PageNotFound}
    ],
})

export default router
