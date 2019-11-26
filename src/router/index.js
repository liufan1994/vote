import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    // 登录
    {
        path: '/',
        name: 'signIn',
        component: () => import('../views/signIn.vue')
    },
    // 注册
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },
    // 找回密码-验证手机号
    {
        path: '/forget',
        name: 'forget',
        component: () => import('../views/forget.vue')
    },
    // 找回密码-重置密码
    {
        path: '/reset',
        name: 'reset',
        component: () => import('../views/reset.vue')
    },
    // 首页
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue')
    },
    // 管理活动
    {
        path: '/management',
        name: 'management',
        component: () => import('../views/management.vue')
    },
    // 推广中心
    {
        path: '/extend',
        name: 'extend',
        component: () => import('../views/extend.vue')
    },
    // 我的
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
    },
    // 个人信息
    {
        path: '/personalData',
        name: 'personalData',
        component: () => import('../views/personalData.vue')
    },
    // 会员升级
    {
        path: '/member',
        name: 'member',
        component: () => import('../views/member.vue')
    },
    // 充值中心
    {
        path: '/recharge',
        name: 'recharge',
        component: () => import('../views/recharge.vue')
    }
]
const router = new VueRouter({
    routes
})
export default router
