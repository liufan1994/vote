<template>
    <!-- 消费记录 -->
    <div class="consumption">
        <!-- 消费记录列表 -->
        <div class="consumptionList" v-for="(consumptionList,index) in consumptionLists" :key="index">
            <div class="consumptionListTop">
                <div class="consumptionListLeft">
                    <div class="consumptionTop">
                        <span class="consumptionListName">{{consumptionList.consumptionListName}}</span>
                        <span class="consumptionListTime">{{consumptionList.consumptionListTime}}</span>
                    </div>
                    <div class="consumptionBottom">余额：￥{{consumptionList.consumptionBottom}}.00</div>
                </div>
                <div class="consumptionListMoney">-{{consumptionList.consumptionListMoney}}.00</div>
            </div>
            <div class="consumptionListBottom">备注：交易号{{consumptionList.consumptionBottomNumber}}。购买{{consumptionList.consumptionBottomText}}。</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'consumption',
        data() {
            return {
                consumptionLists: [
                    {
                        consumptionListName: '消费',
                        consumptionListTime: '2019-01-10 00:00:00',
                        consumptionBottom: '2000',
                        consumptionListMoney: '288',
                        consumptionBottomNumber: '14555448548585',
                        consumptionBottomText:
                            '边框、有特殊要求增费￥200.00，购买边框、有特殊要求增费￥200.00'
                    },
                    {
                        consumptionListName: '升级会员',
                        consumptionListTime: '2019-01-10 00:00:00',
                        consumptionBottom: '1600',
                        consumptionListMoney: '699',
                        consumptionBottomNumber: '14555448548585',
                        consumptionBottomText: '边框、有特殊要求增费￥200.00'
                    },
                    {
                        consumptionListName: '消费',
                        consumptionListTime: '2019-01-10 00:00:00',
                        consumptionBottom: '2000',
                        consumptionListMoney: '288',
                        consumptionBottomNumber: '14555448548585',
                        consumptionBottomText: '边框、有特殊要求增费￥200.00'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .consumptionList {
        padding: 24px 14px;
        border-bottom: #f5f5f5 1px solid;
        background-color: #fff;
    }
    /* 消费记录列表上面 */
    .consumptionListTop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 14px;
    }
    /* 消费记录类型 */
    .consumptionListName {
        font-size: 16px;
        margin-right: 14px;
    }
    /* 消费时间 */
    .consumptionListTime {
        color: #999;
        font-size: 10px;
    }
    /* 账户余额 */
    .consumptionBottom {
        color: #666;
        font-size: 12px;
    }
    /* 消费记录列表-右边消费金额 */
    .consumptionListMoney {
        font-size: 22px;
        color: #3399ff;
        font-weight: bold;
        /* margin-bottom: 6px; */
    }
    .consumptionListBottom {
        font-size: 10px;
        color: #999;
    }
</style>
