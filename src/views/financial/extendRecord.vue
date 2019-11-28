<template>
    <!-- 推广记录 -->
    <div class="extendRecord">
        <!-- 推广记录列表 -->
        <div class="rechargeRecordList" v-for="(rechargeRecordList,index) in rechargeRecordLists" :key="index">
            <div class="recordListLeft">
                <span class="recordListName">{{rechargeRecordList.recordListName}}</span>
                <div class="recordListLeftBottom">{{rechargeRecordList.recordListLeftBottom}}</div>
            </div>
            <div class="recordListRight">
                <div class="recordListMoney">+{{rechargeRecordList.recordListMoney}}.00</div>
                <div class="recordListBalance">推广余额：￥{{rechargeRecordList.recordListBalance}}.00</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'extendRecord',
        data() {
            return {
                // 推广记录列表
                rechargeRecordLists: [
                    {
                        recordListName: '推广用户名称',
                        recordListLeftBottom: '2019-01-10 00:00:00',
                        recordListMoney: '600',
                        recordListBalance: '2000'
                    },
                    {
                        recordListName: '推广用户名称',
                        recordListLeftBottom: '2019-01-10 00:00:00',
                        recordListMoney: '200',
                        recordListBalance: '2000'
                    },
                    {
                        recordListName: '推广用户名称',
                        recordListLeftBottom: '2019-01-10 00:00:00',
                        recordListMoney: '400',
                        recordListBalance: '2000'
                    },
                    {
                        recordListName: '推广用户名称',
                        recordListLeftBottom: '2019-01-10 00:00:00',
                        recordListMoney: '600',
                        recordListBalance: '2000'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    /* 推广记录列表 */
    .rechargeRecordList {
        height: 95px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
        border-bottom: #f5f5f5 1px solid;
        background-color: #fff;
    }
    /* 用户名称 */
    .recordListName {
        font-size: 16px;
        margin-right: 14px;
    }
    /* 推广时间 */
    .recordListLeftBottom {
        color: #999;
        font-size: 12px;
        margin-top: 8px;
    }
    /* 推广列表-右边 */
    .recordListRight {
        text-align: right;
    }
    /* 推广金额 */
    .recordListMoney {
        font-size: 22px;
        color: #3399ff;
        font-weight: bold;
        /* margin-bottom: 6px; */
    }
    /* 推广余额 */
    .recordListBalance {
        font-size: 12px;
        color: #999;
    }
</style>
