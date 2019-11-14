<template>
    <div class="management">
        <div class="managementTop">
            <!-- 搜索框 -->
            <search/>
            <span class="topButton">创建活动</span>
        </div>
        <!-- 管理活动页面tab -->
        <foundTab/>
        <!-- 间隔 -->
        <div class="interval"></div>
        <!-- 活动列表 -->
        <div class="activityList">
            <!-- 列表头部 -->
            <div class="listHead">
                <!-- 头部左边 -->
                <div class="headLeft">
                    <div class="leftStyle"></div>
                    <div class="leftName">{{headName}}</div>
                    <img class="leftImg" src="../assets/edit.png">
                </div>
                <!-- 头部右边 -->
                <div class="headRight">
                    <div class="rightButton">新增子活动</div>
                    <div class="rightSetup">
                        <div class="setupName">设置</div>
                        <img class="setupImg" src="../assets/down.png">
                    </div>
                </div>
            </div>
            <!-- 子活动列表 -->
            <div class="listSub">
                <!-- 子活动名字 -->
                <div class="subName">
                    <div class="nameTitle">{{nameTitle}}</div>
                    <div class="nameState">进行中</div>
                    <!-- <div class="nameState2">已结束</div> -->
                </div>
                <!-- 子活动数据 -->
                <div class="subData">
                    <!-- 子活动数据左边 -->
                    <div class="dataLeft">
                        <!-- 左边票数 -->
                        <div class="leftData">
                            <img class="leftImg1" src="../assets/votes.png">
                            <div class="leftNumber">{{votesNumber}}</div>
                        </div>
                        <!-- 左边人数 -->
                        <div class="leftData">
                            <img class="leftImg2" src="../assets/number.png">
                            <div class="leftNumber">{{numberNumber}}</div>
                        </div>
                        <!-- 左边浏览量 -->
                        <div class="leftData">
                            <img class="leftImg3" src="../assets/visits.png">
                            <div class="leftNumber">{{visitsNumber}}</div>
                        </div>
                    </div>
                    <!-- 子活动数据右边 -->
                    <div class="dataRight">
                        <div class="dataRightSetup dataRightSetup2">
                            <div class="dataSetupText">设置</div>
                            <img class="dataSetupImg" src="../assets/down.png">
                        </div>
                        <div class="dataRightSetup">
                            <div class="dataSetupText">操作</div>
                            <img class="dataSetupImg" src="../assets/down.png">
                        </div>
                    </div>
                </div>
                <!-- 子活动时间 -->
                <div class="subTime"></div>
            </div>
            <!-- 间隔 -->
            <div class="interval"></div>
        </div>
        <!-- 导航栏 -->
        <navigation :myIndex="1" />
    </div>
</template>
<script>
    import navigation from '../components/navigation.vue'
    import search from '../components/search.vue'
    import foundTab from '../components/foundTab.vue'

    export default {
        name: 'management',
        components: {
            navigation,
            search,
            foundTab
        },
        data() {
            return {
                headName: '专题名称',
                nameTitle:
                    '子活动名称可能很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
                votesNumber: '485124',
                numberNumber: '245',
                visitsNumber: '2458795'
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
    /* 活动列表 */
    .activityList {
        background-color: #fff;
    }
    /* 活动头部 */
    .listHead {
        width: 100%;
        box-sizing: border-box;
        height: 56px;
        display: flex;
        justify-content: space-between;
        background-color: #f5f9fc;
        padding: 0 14px;
        line-height: 56px;
    }
    /* 头部左边 */
    .headLeft {
        display: flex;
        align-items: center;
    }
    /* 左边样式 */
    .leftStyle {
        width: 2px;
        height: 14px;
        background-color: #3399ff;
        margin-right: 7px;
    }
    /* 左边名字 */
    .leftName {
        color: #666;
        margin-right: 14px;
    }
    /* 左边图标 */
    .leftImg {
        width: 13px;
        height: 13px;
    }
    /* 头部右边 */
    .headRight {
        display: flex;
        align-items: center;
    }
    /* 右边新增子活动按钮 */
    .rightButton {
        width: 83px;
        height: 31px;
        color: #3399ff;
        border: #3399ff 1px solid;
        border-radius: 3px;
        text-align: center;
        line-height: 31px;
    }
    /* 右边设置 */
    .rightSetup {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    /* 设置名字 */
    .setupName {
        font-size: 12px;
        margin-right: 7px;
    }
    /* 设置图标 */
    .setupImg {
        width: 10px;
        height: 6px;
    }
    /* 子活动列表 */
    .listSub {
        margin: 25px 14px 0;
    }
    /* 子活动名字 */
    .subName {
        display: flex;
    }
    /* 子活动名字标题 */
    .nameTitle {
        flex: 1;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    /* 子活动状态 */
    .nameState,
    .nameState2 {
        font-size: 12px;
        margin-left: 14px;
        color: #29cc7a;
    }
    .nameState2 {
        color: #999;
    }
    /* 子活动数据 */
    .subData {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0 16px;
    }
    /* 子活动数据左边 */
    .dataLeft {
        display: flex;
        /* align-items: center; */
    }
    /* 左边-票数 */
    .leftData {
        display: flex;
        align-items: center;
        margin-right: 14px;
    }
    /* 票数-图标 */
    .leftImg1 {
        width: 14px;
        height: 11px;
        margin-right: 6px;
    }
    /* 人数-图标 */
    .leftImg2 {
        width: 11px;
        height: 13px;
        margin-right: 7px;
    }
    /* 浏览量-图标 */
    .leftImg3 {
        width: 16px;
        height: 11px;
        margin-right: 7px;
    }
    /* 子活动数据右边 */
    .dataRight {
        display: flex;
    }
    /* 数据右边1 */
    .dataRightSetup {
        display: flex;
        align-items: center;
    }
    .dataRightSetup2 {
        margin-right: 14px;
    }
    /* 数据右边1-文字 */
    .dataSetupText {
        font-size: 12px;
        margin-right: 6px;
    }
    /* 数据右边1-图标 */
    .dataSetupImg {
        width: 10px;
        height: 6px;
    }
</style>
