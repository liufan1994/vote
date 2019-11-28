<template>
    <!-- 财务明细Tab -->
    <div class="financialTab">
        <div class="financialTabName" :class="{financialTabName2:myIndex===index}" v-for="(financialTab,index) in financialTabs" :key="index" @click="financialTabNameFun(financialTab)">{{financialTab.financialTabName}}</div>
    </div>
</template>
<script>
    export default {
        name: 'financialTab',
        props: {
            myIndex: {
                type: [String, Number],
                default: 0
            }
        },
        data() {
            return {
                // 财务明细Tab
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
            financialTabNameFun(financialTab) {
                this.$router.push(financialTab.recordRouter)
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
