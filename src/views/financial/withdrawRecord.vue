<template>
    <!-- 提现记录 -->
    <div class="withdrawRecord">
        <!-- 提现记录列表 -->
        <div class="rechargeRecordList" v-for="(rechargeRecordList,index) in rechargeRecordLists" :key="index">
            <div class="recordListLeft">
                <div class="recordListLeftTop">
                    <div class="recordListName">{{rechargeRecordList.recordListName}}</div>
                    <span class="recordListData" :class="{recordListData2:isShowRecordListData2===rechargeRecordList.recordListData}">{{rechargeRecordList.recordListData}}</span>
                </div>
                <div class="recordListLeftBottom">
                    <div class="recordListLeftName">{{rechargeRecordList.recordListLeftName}}</div>
                    <div>推广余额:￥{{rechargeRecordList.recordListLeftBalance}}.00</div>
                </div>
            </div>
            <div class="recordListRight">
                <div class="recordListMoney">-{{rechargeRecordList.recordListMoney}}.00</div>
                <div class="recordListTime">{{rechargeRecordList.recordListTime}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'withdrawRecord',
        data() {
            return {
                // 提现记录列表
                isShowRecordListData2: '提现中',
                rechargeRecordLists: [
                    {
                        recordListName: 'liufan15283819858@163.com',
                        recordListData: '提现中',
                        recordListLeftName: '真实姓名',
                        recordListLeftBalance: '1000',
                        recordListMoney: '800',
                        recordListTime: '2019-01-10 00:00:00'
                    },
                    {
                        recordListName: '15283819858@163.com',
                        recordListData: '已到账',
                        recordListLeftName: '真实姓名',
                        recordListLeftBalance: '1000',
                        recordListMoney: '2000',
                        recordListTime: '2019-01-10 00:00:00'
                    },
                    {
                        recordListName: '15283819858@163.com',
                        recordListData: '提现中',
                        recordListLeftName: '真实姓名',
                        recordListLeftBalance: '1000',
                        recordListMoney: '400',
                        recordListTime: '2019-01-10 00:00:00'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    /* 提现记录列表 */
    .rechargeRecordList {
        height: 102px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        border-bottom: #f5f5f5 1px solid;
        background-color: #fff;
    }
    .recordListLeftTop {
        display: flex;
        align-items: center;
    }
    /* 提现账号 */
    .recordListName {
        width: 174px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        margin-right: 14px;
    }
    /* 提现状态 */
    .recordListData {
        color: #999;
        font-size: 12px;
    }
    .recordListData2 {
        color: #29cc7a;
    }
    /* 提现左边-下面 */
    .recordListLeftBottom {
        display: flex;
        color: #999;
        font-size: 12px;
        margin-top: 14px;
    }
    /* 提现-真实名字 */
    .recordListLeftName {
        margin-right: 14px;
    }
    /* 提现列表-右边 */
    .recordListRight {
        text-align: right;
    }
    /* 提现金额 */
    .recordListMoney {
        font-size: 22px;
        color: #3399ff;
        font-weight: bold;
    }
    /* 提现时间 */
    .recordListTime {
        font-size: 12px;
        color: #999;
        margin-top: 8px;
    }
</style>
