<template>
    <!-- 推广中心 -->
    <div class="extend">
        <!-- 推广内容 -->
        <div class="extendContent">
            <!-- 推广链接 -->
            <div class="extendLink">
                <div class="linkName">您的专属推广链接</div>
                <div class="linkWebsite">
                    <div class="website">{{website}}</div>
                    <div class="websiteText">复制链接</div>
                </div>
            </div>
            <!-- 账户列表 -->
            <div class="accountA" v-for="account in accounts" :key="account.id">
                <!-- 列表左 -->
                <div class="accountLeft">{{account.accountName}}</div>
                <!-- 列表右 -->
                <div class="accountRight">
                    <div class="accountMoney">{{account.accountMoney}}</div>
                    <div class="accountButton">
                        <div class="accountButtonName">{{account.accountButtonName}}</div>
                        <div class="iconfont icon-you"></div>
                    </div>
                </div>
            </div>
            <!-- 推广用户数量 -->
            <div class="accountA2">
                <!-- 列表左 -->
                <div class="accountLeft">推广用户</div>
                <!-- 列表右 -->
                <div class="accountMoney2">{{userNumber}}人</div>
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 推广用户列表 -->
        <div class="userList">
            <!-- tab -->
            <div class="userTab">
                <div class="userText" :class="{userText2:isShowUser}" @click="userFun">已升级</div>
                <div class="userText" :class="{userText2:!isShowUser}" @click="userFun2">未升级</div>
            </div>
            <!-- 间隔 -->
            <interval/>
            <!-- 列表 -->
            <div class="userContent" v-for="user in users" :key="user.id">
                <div class="userLeft">{{user.userName}}</div>
                <div class="userRight">
                    <div class="userState">{{user.userState}}</div>
                    <div class="userTime">{{user.userTime}}</div>
                </div>
            </div>
        </div>
        <!-- 提示 -->
        <div class="tipsContent">
            <div class="tipsTitle">轻松赚取佣金步骤</div>
            <div class="tipsA">
                <p class="tips1">1、将推广链接发送给您身边需要创办微信评选投票活动的人注册账号，或者您自己使用您的推广链接替对方注册一个账号</p>
                <p class="tips1">2、对方使用注册好的账户进行消费（即升级账户套餐）</p>
                <p class="tips1">3、第一笔消费成功，您将获得佣金¥118，推广账户后续消费暂无佣金奖励</p>
            </div>
            <div class="tips">
                <p class="tips2">友情提示：请勿作弊（比如自己推自己等），我们有智能反作弊系统，如若查实将冻结推广奖励！</p>
                <p class="tips2">提现说明：推广佣金累计达到￥200即可提现</p>
            </div>
        </div>
        <!-- 底部间隔 -->
        <intervalD/>
        <!-- 导航栏 -->
        <navigation :myIndex="2" />
    </div>
</template>
<script>
    import navigation from '../components/navigation'
    import interval from '../components/interval'
    import intervalD from '../components/intervalD'

    export default {
        name: 'extend',
        components: { navigation, interval, intervalD },
        data() {
            return {
                // 网址
                website: 'http://www.baidu.com',
                // 账户列表
                accounts: [
                    {
                        accountName: '提现账户',
                        accountButtonName: '设置'
                    },
                    {
                        accountName: '推广余额',
                        accountMoney: '¥899.00',
                        accountButtonName: '提现'
                    },
                    {
                        accountName: '已提现',
                        accountMoney: '¥2000.00',
                        accountButtonName: '明细'
                    }
                ],
                // 推广用户人数
                userNumber: '1556',
                // 推广用户列表-tab样式触发
                isShowUser: true,
                users: [
                    {
                        userName: '用户名称',
                        userState: '已获得奖励',
                        userTime: '2019-01-10 00:00'
                    },
                    {
                        userName: '用户名称',
                        userState: '已获得奖励',
                        userTime: '2019-01-10 00:00'
                    },
                    {
                        userName: '用户名称',
                        userState: '已获得奖励',
                        userTime: '2019-01-10 00:00'
                    },
                    {
                        userName: '用户名称',
                        userState: '已获得奖励',
                        userTime: '2019-01-10 00:00'
                    }
                ]
            }
        },
        methods: {
            userFun() {
                this.isShowUser = true
            },
            userFun2() {
                this.isShowUser = false
            }
        }
    }
</script>
<style>
    /* 推广内容 */
    .extendContent {
        background-color: #fff;
        padding: 0 14px;
    }
    /* 推广链接 */
    .extendLink {
        padding: 28px 0;
        border-bottom: #e6e6e6 1px solid;
    }
    /* 链接名称 */
    .linkName {
        color: #999;
        margin-bottom: 14px;
    }
    /* 链接网址 */
    .linkWebsite {
        position: relative;
        height: 42px;
        border: #ccc 1px solid;
        border-radius: 7px;
        line-height: 42px;
        padding: 0 14px;
    }
    /* 网址 */
    .website {
        max-width: 260px;
    }
    /* 复制网址 */
    .websiteText {
        position: absolute;
        top: 11px;
        right: 0;
        height: 20px;
        color: #3399ff;
        border-left: #ccc 1px solid;
        line-height: 20px;
        padding: 0 14px;
    }
    /* 账户列表 */
    .accountA,
    .accountA2 {
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: #e6e6e6 1px solid;
    }
    .accountA2 {
        border-bottom: none;
    }
    /* 列表右 */
    .accountRight {
        display: flex;
    }
    /* 列表右-金额/数量 */
    .accountMoney,
    .accountMoney2 {
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
    }
    .accountMoney2 {
        margin-right: 0;
    }
    /* 列表右-按钮 */
    .accountButton {
        display: flex;
        align-items: center;
        color: #3399ff;
    }
    .icon-you {
        font-size: 13px;
        margin-left: 4px;
    }
    /* 用户列表tab */
    .userTab {
        height: 44px;
        display: flex;
        justify-content: space-around;
        background-color: #f5f5f5;
        border-bottom: #e6e6e6 1px solid;
    }
    .userText,
    .userText2 {
        width: 50%;
        height: 44px;
        font-size: 16px;
        line-height: 44px;
        text-align: center;
    }
    .userText2 {
        color: #3399ff;
        border-bottom: #3399ff 2px solid;
    }
    /* 用户列表 */
    .userContent {
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 0 14px;
        border-bottom: #f0f0f0 1px solid;
    }
    .userLeft {
        font-size: 16px;
    }
    .userRight {
        font-size: 12px;
        text-align: right;
    }
    .userTime {
        color: #999;
    }
    /* 提示 */
    .tipsContent {
        background-color: #f5f5f5;
        padding: 40px 14px 20px;
    }
    .tipsTitle {
        font-size: 16px;
        margin-bottom: 20px;
    }
    .tipsA {
        font-size: 12px;
        color: #999;
        margin-bottom: 34px;
    }
    .tips1 {
        margin-bottom: 10px;
    }
    .tips {
        color: #ee6869;
        font-size: 12px;
    }
    .tips2 {
        margin-bottom: 10px;
    }
</style>
