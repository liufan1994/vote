import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    // 登录
    {
        path: '/',
        name: 'signIn',
        component: () => import('../views/signIn/signIn.vue')
    },
    // 注册
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/signIn/register.vue')
    },
    // 找回密码-验证手机号
    {
        path: '/forget',
        name: 'forget',
        component: () => import('../views/signIn/forget.vue')
    },
    // 找回密码-重置密码
    {
        path: '/reset',
        name: 'reset',
        component: () => import('../views/signIn/reset.vue')
    },
    // 首页
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/navigationBar/home.vue')
    },
    // 管理活动
    {
        path: '/management',
        name: 'management',
        component: () => import('../views/navigationBar/management.vue')
    },
    // 推广中心
    {
        path: '/extend',
        name: 'extend',
        component: () => import('../views/navigationBar/extend.vue')
    },
    // 我的
    {
        path: '/my',
        name: 'my',
        component: () => import('../views/navigationBar/my.vue')
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
    },
    // 财务明细
    {
        path: '/financial',
        name: 'financial',
        component: () => import('../views/financial/index.vue'),
        children: [
            {
                path: 'consumption',
                component: () => import('../views/financial/consumption.vue')
            },
            {
                path: 'extendRecord',
                component: () => import('../views/financial/extendRecord.vue')
            },
            {
                path: 'rechargeRecord',
                component: () => import('../views/financial/rechargeRecord.vue')
            },
            {
                path: 'withdrawRecord',
                component: () => import('../views/financial/withdrawRecord.vue')
            }
        ]
    },
    // 充值记录
    {
        path: '/rechargeRecord',
        name: 'rechargeRecord',
        component: () => import('../views/financial/rechargeRecord.vue')
    },
    // 消费记录
    {
        path: '/consumption',
        name: 'consumption',
        component: () => import('../views/financial/consumption.vue')
    },
    // 推广记录
    {
        path: '/extendRecord',
        name: 'extendRecord',
        component: () => import('../views/financial/extendRecord.vue')
    },
    // 提现记录
    {
        path: '/withdrawRecord',
        name: 'withdrawRecord',
        component: () => import('../views/financial/withdrawRecord.vue')
    },
    // 我的工单
    {
        path: '/myWork',
        name: 'myWork',
        component: () => import('../views/workManagement/myWork.vue')
    },
    // 提交工单
    {
        path: '/submissionWork',
        name: 'submissionWork',
        component: () => import('../views/workManagement/submissionWork.vue')
    }
]
const router = new VueRouter({
    routes
})
export default router
