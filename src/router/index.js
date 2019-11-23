import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'signIn',
        component: () => import('../views/signIn.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },
    {
        path: '/forget',
        name: 'forget',
        component: () => import('../views/forget.vue')
    },
    {
        path: '/reset',
        name: 'reset',
        component: () => import('../views/reset.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    {
        path: '/management',
        name: 'management',
        component: () => import('../views/management.vue')
    },
    {
        path: '/extend',
        name: 'extend',
        component: () => import('../views/extend.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
    },
    {
        path: '/personalData',
        name: 'personalData',
        component: () => import('../views/personalData.vue')
    },
    {
        path: '/member',
        name: 'member',
        component: () => import('../views/member.vue')
    }
]
const router = new VueRouter({
    routes
})
export default router
