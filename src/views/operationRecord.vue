<template>
    <!-- 操作记录 -->
    <div class="operationRecord">
        <myTitle titleName="操作记录" />
        <!-- 活动名称 -->
        <div class="operationRecordName">{{operationRecordName}}
            <span class="operationRecordText">操作记录</span>
        </div>
        <!-- 操作记录列表 -->
        <div class="operationRecordList">
            <div class="listA" v-for="(listA,index) in listAs" :key="index">
                <div class="listTop">
                    <!-- 号数 -->
                    <div class="listNumber">{{listA.listNumber}}号</div>
                    <!-- 选手名称 -->
                    <div class="listName">{{listA.listName}}</div>
                </div>
                <div class="listContent">
                    <!-- 日志 -->
                    <div class="listJournal">日志：{{listA.listJournal}}</div>
                    <!-- 时间 -->
                    <div class="listTime">{{listA.listTime}}</div>
                </div>
                <!-- 备注 -->
                <div class="listBottom">备注：{{listA.listRemarks}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'

    export default {
        name: 'operationRecord',
        components: {
            myTitle
        },
        data() {
            return {
                // 活动名称
                operationRecordName: '2019年成都市最萌宝宝评选',
                // 操作记录列表
                listAs: [
                    {
                        // 号数
                        listNumber: '001',
                        // 选手名称
                        listName: '选手名称',
                        // 日志
                        listJournal: '增加100票',
                        // 时间
                        listTime: '2019-05-20 09:20:00',
                        listRemarks:
                            '这里是备注内容,这里是备注内容这里是备注内容这里是备注内容这里是备注,内容这里是备注内容这,里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容这里是备注内容'
                    },
                    {
                        // 号数
                        listNumber: '002',
                        // 选手名称
                        listName: '选手名称',
                        // 日志
                        listJournal: '增加100票',
                        // 时间
                        listTime: '2019-05-20 09:20:00',
                        listRemarks: '这里是备注内容这里是备注内容'
                    },
                    {
                        // 号数
                        listNumber: '003',
                        // 选手名称
                        listName: '选手名称',
                        // 日志
                        listJournal: '增加100票',
                        // 时间
                        listTime: '2019-05-20 09:20:00',
                        listRemarks:
                            '这里是备注内容这里是备注内容这里是备注内容这里是备注内容'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    /* 活动名称 */
    .operationRecordName {
        padding: 20px 14px;
        background-color: #f5f5f5;
    }
    /* 活动名称-操作纪录 */
    .operationRecordText {
        color: #3399ff;
    }
    /* 操作纪录-列表 */
    .operationRecordList {
        background-color: #fff;
        padding: 0 14px;
    }
    .listA {
        padding: 24px 0;
        border-bottom: #e6e6e6 1px solid;
    }
    .listTop {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }
    .listNumber {
        color: #999;
        font-size: 12px;
        margin-right: 14px;
    }
    .listContent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }
    .listTime {
        color: #999;
        font-size: 10px;
    }
    .listBottom {
        color: #666;
        font-size: 12px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: justify;
    }
</style>
