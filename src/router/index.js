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
    // 导航栏-四页面
    {
        path: '/navigationBar',
        name: 'navigationBar',
        component: () => import('../views/navigationBar/index.vue'),
        children: [
            // 推广中心
            {
                path: 'extend',
                component: () => import('../views/navigationBar/extend.vue')
            },
            // 首页
            {
                path: 'home',
                component: () => import('../views/navigationBar/home.vue')
            },
            // 管理活动
            {
                path: 'management',
                component: () => import('../views/navigationBar/management.vue')
            },
            // 我的
            {
                path: 'my',
                component: () => import('../views/navigationBar/my.vue')
            }
        ]
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
            // 消费记录
            {
                path: 'consumption',
                component: () => import('../views/financial/consumption.vue')
            },
            // 推广记录
            {
                path: 'extendRecord',
                component: () => import('../views/financial/extendRecord.vue')
            },
            // 充值记录
            {
                path: 'rechargeRecord',
                component: () => import('../views/financial/rechargeRecord.vue')
            },
            // 提现记录
            {
                path: 'withdrawRecord',
                component: () => import('../views/financial/withdrawRecord.vue')
            }
        ]
    },
    // 工单管理-公共页面
    {
        path: '/workManagement',
        name: 'workManagement',
        component: () => import('../views/workManagement/index.vue'),
        children: [
            // 我的工单
            {
                path: 'myWork',
                component: () => import('../views/workManagement/myWork.vue')
            },
            // 提交工单
            {
                path: 'submissionWork',
                component: () =>
                    import('../views/workManagement/submissionWork.vue')
            },
            // 我的工单-查看
            {
                path: 'myWorkSee',
                component: () => import('../views/workManagement/myWorkSee.vue')
            }
        ]
    },
    // 提现账户设置
    {
        path: '/withdrawSetUp',
        name: 'withdrawSetUp',
        component: () => import('../views/withdrawSetUp.vue')
    },
    // 推广提现
    {
        path: '/extensionWithdraw',
        name: 'extensionWithdraw',
        component: () => import('../views/extensionWithdraw.vue')
    },
    // 公告详情
    {
        path: '/noticeDetails',
        name: 'noticeDetails',
        component: () => import('../views/noticeDetails.vue')
    },
    // 创建活动
    {
        path: '/createEvent',
        name: 'createEvent',
        component: () => import('../views/createEvent.vue')
    },
    // 操作记录
    {
        path: '/operationRecord',
        name: 'operationRecord',
        component: () => import('../views/operationRecord.vue')
    },
    // 评论管理
    {
        path: '/comment',
        name: 'comment',
        component: () => import('../views/comment.vue')
    },
    // 票数排名
    {
        path: '/voteRanking',
        name: 'voteRanking',
        component: () => import('../views/voteRanking.vue')
    }
]

const router = new VueRouter({
    routes
})
export default router
