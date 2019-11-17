<template>
    <div class="management">
        <div class="managementTop">
            <!-- 搜索框 -->
            <search/>
            <span class="topButton">创建活动</span>
        </div>
        <!-- 管理活动页面tab -->
        <foundTab @my-state="myState" />
        <!-- 活动列表 -->
        <activityList :activityLists="activityLists2" />
        <!-- 间隔 -->
        <div class="interval"></div>
        <!-- 底部间隔 -->
        <div class="intervalD"></div>
        <!-- 导航栏 -->
        <navigation :myIndex="1" />
    </div>
</template>
<script>
    import navigation from '../components/navigation.vue'
    import search from '../components/search.vue'
    import foundTab from '../components/foundTab.vue'
    import activityList from '../components/activityList.vue'

    export default {
        name: 'management',
        components: {
            navigation,
            search,
            foundTab,
            activityList
        },
        data() {
            return {
                // 活动列表
                activityLists: [
                    {
                        // 专题名称
                        headName: '专题名称',
                        listSubs: [
                            {
                                // 子活动名称
                                nameTitle: '子活动名称可能很长很长很长很长很长很长',
                                nameState: '进行中',
                                // 票数
                                votesNumber: '485124',
                                // 人数
                                numberNumber: '242',
                                // 浏览量
                                visitsNumber: '2458795',
                                // 投票时间
                                voteTime:
                                    '2019-02-10 00:00:00 ~ 2019-03-10 00:00:00',
                                // 创建时间
                                foundTime: '2019-02-10 00:00:00'
                            },
                            {
                                // 子活动名称
                                nameTitle:
                                    '子活动名称可能很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                                nameState: '已结束',
                                // 票数
                                votesNumber: '485124',
                                // 人数
                                numberNumber: '243',
                                // 浏览量
                                visitsNumber: '2458795',
                                // 投票时间
                                voteTime:
                                    '2019-02-10 00:00:00 ~ 2019-03-10 00:00:00',
                                // 创建时间
                                foundTime: '2019-02-10 00:00:00'
                            }
                        ]
                    },
                    {
                        // 专题名称
                        headName: '专题名称',
                        listSubs: [
                            {
                                // 子活动名称
                                nameTitle: '子活动名称可能很长很长很长',
                                nameState: '已结束',
                                // 票数
                                votesNumber: '485124',
                                // 人数
                                numberNumber: '244',
                                // 浏览量
                                visitsNumber: '2458795',
                                // 投票时间
                                voteTime:
                                    '2019-02-10 00:00:00 ~ 2019-03-10 00:00:00',
                                // 创建时间
                                foundTime: '2019-02-10 00:00:00'
                            }
                        ]
                    },
                    {
                        // 专题名称
                        headName: '专题名称',
                        listSubs: [
                            {
                                // 子活动名称
                                nameTitle: '子活动名称可能很长很长很长很长很长很长',
                                nameState: '进行中',
                                // 票数
                                votesNumber: '485124',
                                // 人数
                                numberNumber: '245',
                                // 浏览量
                                visitsNumber: '2458795',
                                // 投票时间
                                voteTime:
                                    '2019-02-10 00:00:00 ~ 2019-03-10 00:00:00',
                                // 创建时间
                                foundTime: '2019-02-10 00:00:00'
                            },
                            {
                                // 子活动名称
                                nameTitle: '子活动名称可能很长很长很长',
                                nameState: '进行中',
                                // 票数
                                votesNumber: '485124',
                                // 人数
                                numberNumber: '246',
                                // 浏览量
                                visitsNumber: '2458795',
                                // 投票时间
                                voteTime:
                                    '2019-02-10 00:00:00 ~ 2019-03-10 00:00:00',
                                // 创建时间
                                foundTime: '2019-02-10 00:00:00'
                            }
                        ]
                    }
                ],
                activityLists2: []
            }
        },
        methods: {
            // 点击状态tab
            // 筛选满足条件的子活动
            myState(state) {
                // 循环activityLists数组
                for (let i = 0; i < this.activityLists.length; i++) {
                    let listSubs2 = []
                    console.log(i)
                    console.log(this.activityLists[i])
                    // 循环activityLists数组i下标中的listSubs数组
                    for (
                        let a = 0;
                        a < this.activityLists[i].listSubs.length;
                        a++
                    ) {
                        console.log(state)
                        // 如果listSubs数组a下标中的nameState字符串等于子页面传过来的state字符串
                        if (this.activityLists[i].listSubs[a].nameState === state) {
                            listSubs2.push(this.activityLists[i].listSubs[a])
                        }
                    }
                    if (listSubs2.length > 0) {
                        const _activityLists = JSON.parse(
                            JSON.stringify(this.activityLists[i])
                        )
                        _activityLists.listSubs = listSubs2
                        this.activityLists2.push(_activityLists)
                    }
                }
            }
        }
    }
</script>
<style>
    /* 创建活动顶部 */
    .managementTop {
        display: flex;
        align-items: center;
        background-color: #f0f0f0;
        padding-right: 14px;
    }
    /* 顶部按钮 */
    .topButton {
        width: 90px;
        height: 42px;
        color: #fff;
        background-color: #3399ff;
        border-radius: 7px;
        text-align: center;
        line-height: 42px;
    }
    /* 间隔 */
    .interval {
        height: 20px;
        background-color: #f0f0f0;
    }
    /* 底部间隔 */
    .intervalD {
        height: 80px;
        background-color: #f0f0f0;
    }
</style>
