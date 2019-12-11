<template>
    <!-- 提现账户设置 -->
    <div class="withdrawSetUp">
        <!-- 标头 -->
        <myTitle titleName="提现账户设置" />
        <div class="withdrawSetUpList" v-for="(withdrawSetUpList,index) in withdrawSetUpLists" :key="index">
            <div class="withdrawSetUpName">{{withdrawSetUpList.withdrawSetUpName}}</div>
            <myInputBottom class="withdrawSetUpInput" :myPlaceholder="withdrawSetUpList.withdrawSetUpInput" />
        </div>
        <bigButtonDetermine class="bigButtonDetermine" determine="保存" />
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'
    import myInputBottom from '../components/myInputBottom'
    import bigButtonDetermine from '../components/bigButtonDetermine'

    export default {
        name: 'withdrawSetUp',
        components: {
            myTitle,
            myInputBottom,
            bigButtonDetermine
        },
        data() {
            return {
                withdrawSetUpLists: [
                    {
                        withdrawSetUpName: '支付宝账号',
                        withdrawSetUpInput: '请输入您的支付宝账号'
                    },
                    {
                        withdrawSetUpName: '真实姓名',
                        withdrawSetUpInput: '请输入您的真实姓名'
                    },
                    {
                        withdrawSetUpName: '登录密码',
                        withdrawSetUpInput: '请输入您的登录密码'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .withdrawSetUpList {
        display: flex;
        align-items: center;
        margin: 0 14px;
        margin-top: 21px;
    }
    .withdrawSetUpName {
        width: 70px;
        margin-right: 14px;
        color: #999;
    }
    .bigButtonDetermine {
        margin: 80px 0;
    }
</style>
