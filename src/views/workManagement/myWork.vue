<template>
    <!-- 我的工单 -->
    <div class="myWork">
        <!-- 工单管理tab -->
        <workManagementTab :myIndex="0" />
        <!-- 间隔 -->
        <interval/>
        <!-- 我的工单列表 -->
        <div class="myWorkList" v-for="(myWorkList,index) in myWorkLists" :key="index">
            <div class="workListLeft">
                <div class="workListName">{{myWorkList.workListName}}</div>
                <div class="workListData">
                    <div class="workListDataText" :class="[
                        myWorkListDataText===myWorkList.workListDataText?'workListDataText2':(myWorkListDataText2===myWorkList.workListDataText?'workListDataText3':'')]">{{myWorkList.workListDataText}}</div>
                    <div class="workListDataTime">{{myWorkList.workListDataTime}}</div>
                </div>
            </div>
            <div class="workListRight">
                <span class="workListSee" @click="workListSeeFun(myWorkList)">查看</span>
                <span class="workListDelete">删除</span>
            </div>
        </div>
    </div>
</template>
<script>
    import workManagementTab from '../../components/workManagementTab'
    import interval from '../../components/interval'

    export default {
        name: 'myWork',
        components: {
            workManagementTab,
            interval
        },
        data() {
            return {
                // 我的工单列表
                myWorkListDataText: '待处理',
                myWorkListDataText2: '处理中',
                myWorkLists: [
                    {
                        workListName:
                            '工单标题特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长',
                        workListDataText: '待处理',
                        workListDataTime: '2019-05-16 00:00:00'
                    },
                    {
                        workListName: '工单标题特别长特别长特别长特别长',
                        workListDataText: '处理中',
                        workListDataTime: '2019-05-16 00:00:00'
                    },
                    {
                        workListName:
                            '工单标题特别长特别长特别长特别长特别长特别长',
                        workListDataText: '已解决',
                        workListDataTime: '2019-05-16 00:00:00'
                    },
                    {
                        workListName: '工单标题特别长特别长特别长特别长',
                        workListDataText: '处理中',
                        workListDataTime: '2019-05-16 00:00:00'
                    }
                ]
            }
        },
        methods: {
            // 点击查看
            workListSeeFun(myWorkList) {
                this.$router.push({
                    path: '/workManagement/myWorkSee',
                    query: {
                        state: myWorkList.workListDataText,
                        name: myWorkList.workListName
                    }
                })
                window.scrollTo(0, 0)
            }
        }
    }
</script>
<style scoped>
    /* 我的工单列表 */
    .myWorkList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom: #f5f5f5 1px solid;
        padding: 24px 14px;
    }
    /* 我的工单名称 */
    .workListName {
        width: 256px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 16px;
    }
    /* 我的工单状态 */
    .workListData {
        display: flex;
        align-items: center;
        color: #999;
    }
    .workListDataText2 {
        color: #ee6869;
    }
    .workListDataText3 {
        color: #29cc7a;
    }
    /* 我的工单时间 */
    .workListDataTime {
        font-size: 12px;
        margin-left: 14px;
    }
    .workListSee {
        color: #3399ff;
        margin-right: 20px;
    }
    .workListDelete {
        color: #999;
    }
</style>
