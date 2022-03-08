import VueRouter from "vue-router";
import HomePage from '../pages/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/movies',
        name: 'Movies',
        component: () => import('@/pages/MoviesPage.vue'),
    },
    {
        path: '/screening',
        name: 'Screening',
        component: () => import('@/pages/ScreeningPage.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/pages/ContactPage.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/LoginPage.vue'),
    },

    {
        path: '/movies/:movieId',
        name: 'Movie',
        component: () => import('@/components/MovieItem.vue'),
        props: true,
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/RegisterPage.vue'),
    },
    {
        path: '*',
        redirect: '/'
    },
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;