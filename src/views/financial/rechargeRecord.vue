<template>
    <!-- 充值记录 -->
    <div class="rechargeRecord">
        <!-- 充值记录列表 -->
        <div class="rechargeRecordList" v-for="(rechargeRecordList,index) in rechargeRecordLists" :key="index">
            <div class="recordListLeft">
                <div class="recordListLeftTop">
                    <span class="recordListName">{{rechargeRecordList.recordListName}}</span>
                    <span class="recordListTime">{{rechargeRecordList.recordListTime}}</span>
                </div>
                <div class="recordListLeftBottom">交易号：{{rechargeRecordList.recordListLeftBottom}}</div>
            </div>
            <div class="recordListRight">
                <div class="recordListMoney">+{{rechargeRecordList.recordListMoney}}.00</div>
                <div class="recordListBalance">余额：￥{{rechargeRecordList.recordListBalance}}.00</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'rechargeRecord',
        data() {
            return {
                // 充值记录列表
                rechargeRecordLists: [
                    {
                        recordListName: '微信',
                        recordListTime: '2019-01-10 00:00:00',
                        recordListLeftBottom: '125897895645879',
                        recordListMoney: '600',
                        recordListBalance: '2000'
                    },
                    {
                        recordListName: '支付宝',
                        recordListTime: '2019-01-10 00:00:00',
                        recordListLeftBottom: '125897895645879',
                        recordListMoney: '200',
                        recordListBalance: '1800'
                    },
                    {
                        recordListName: '支付宝',
                        recordListTime: '2019-01-10 00:00:00',
                        recordListLeftBottom: '125897895645879',
                        recordListMoney: '300',
                        recordListBalance: '1500'
                    },
                    {
                        recordListName: '微信',
                        recordListTime: '2019-01-10 00:00:00',
                        recordListLeftBottom: '125897895645879',
                        recordListMoney: '500',
                        recordListBalance: '1000'
                    },
                    {
                        recordListName: '微信',
                        recordListTime: '2019-01-10 00:00:00',
                        recordListLeftBottom: '125897895645879',
                        recordListMoney: '200',
                        recordListBalance: '800'
                    },
                    {
                        recordListName: '支付宝',
                        recordListTime: '2019-01-10 00:00:00',
                        recordListLeftBottom: '125897895645879',
                        recordListMoney: '100',
                        recordListBalance: '700'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    /* 充值记录列表 */
    .rechargeRecordList {
        height: 95px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        border-bottom: #f5f5f5 1px solid;
        background-color: #fff;
    }
    /* 充值方式 */
    .recordListName {
        font-size: 16px;
        margin-right: 14px;
    }
    /* 充值时间 */
    .recordListTime {
        color: #999;
        font-size: 10px;
    }
    /* 充值交易号 */
    .recordListLeftBottom {
        color: #666;
        font-size: 12px;
        margin-top: 8px;
    }
    /* 充值列表-右边 */
    .recordListRight {
        text-align: right;
    }
    /* 充值金额 */
    .recordListMoney {
        font-size: 22px;
        color: #3399ff;
        font-weight: bold;
        /* margin-bottom: 6px; */
    }
    /* 账户余额 */
    .recordListBalance {
        font-size: 12px;
        color: #999;
    }
</style>
