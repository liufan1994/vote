<template>
    <!-- 财务明细Tab -->
    <div class="financialTab">
        <div class="financialTabName" :class="{financialTabName2:myIndex===index}" v-for="(financialTab,index) in financialTabs" :key="index" @click="financialTabNameFun(financialTab,index)">{{financialTab.financialTabName}}</div>
    </div>
</template>
<script>
    export default {
        name: 'financialTab',
        data() {
            return {
                // 财务明细Tab
                myIndex: 0,
                financialTabs: [
                    {
                        financialTabName: '充值记录',
                        recordRouter: '/financial/rechargeRecord'
                    },
                    {
                        financialTabName: '消费记录',
                        recordRouter: '/financial/consumption'
                    },
                    {
                        financialTabName: '推广记录',
                        recordRouter: '/financial/extendRecord'
                    },
                    {
                        financialTabName: '提现记录',
                        recordRouter: '/financial/withdrawRecord'
                    }
                ]
            }
        },
        methods: {
            // 点击tab
            financialTabNameFun(financialTab, index) {
                this.myIndex = index
                this.$router.push(financialTab.recordRouter)
            }
        },
        mounted() {
            if (this.$route.path === '/financial/withdrawRecord') {
                this.myIndex = 3
            }
            if (this.$route.pash === '/financial/extendRecord') {
                this.myIndex = 2
            }
            if (this.$route.path === '/financial/consumption') {
                this.myIndex = 1
            }
            if (this.$route.pash === '/financial/rechargeRecord') {
                this.myIndex = 0
            }
        }
    }
</script>
<style>
    .financialTab {
        display: block;
        display: flex;
        justify-content: space-around;
        border-bottom: #e6e6e6 1px solid;
    }
    .financialTabName {
        width: 25%;
        height: 44px;
        text-align: center;
        line-height: 44px;
    }
    .financialTabName2 {
        border-bottom: #3399ff 2px solid;
        color: #3399ff;
    }
</style>
