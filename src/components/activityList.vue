<template>
    <div>
        <!-- 活动列表 -->
        <div class="activityList" v-for="activityList in activityLists" :key="activityList.id">
            <!-- 间隔 -->
            <div class="interval"></div>
            <!-- 列表头部-一个以上的子活动 -->
            <div class="listHead" v-if="activityList.listSubs.length>1">
                <!-- 头部左边 -->
                <div class="headLeft">
                    <div class="leftStyle"></div>
                    <div class="leftName">{{activityList.headName}}</div>
                    <img class="leftImg" src="../assets/edit.png">
                </div>
                <!-- 头部右边 -->
                <div class="headRight">
                    <div class="rightButton">新增子活动</div>
                    <div class="rightSetup">
                        <div class="setupName">设置</div>
                        <div class="iconfont icon-xiala"></div>
                    </div>
                </div>
            </div>
            <!-- 列表头部-一个子活动 -->
            <div class="listHead2" v-else>
                <div class="rightButton">新增子活动</div>
            </div>
            <!-- 子活动列表 -->
            <div class="listSub" v-for="listSub in activityList.listSubs" :key="listSub.id">
                <!-- 子活动名字 -->
                <div class="subName">
                    <div class="nameTitle">{{listSub.nameTitle}}</div>
                    <div class="nameState" v-if="listSub.nameState===nameState2">{{listSub.nameState}}</div>
                    <div class="nameState2" v-else>{{listSub.nameState}}</div>
                </div>
                <!-- 子活动数据 -->
                <div class="subData">
                    <!-- 子活动数据左边 -->
                    <div class="dataLeft">
                        <!-- 左边票数 -->
                        <div class="leftData">
                            <img class="leftImg1" src="../assets/votes.png">
                            <div class="leftNumber">{{listSub.votesNumber}}</div>
                        </div>
                        <!-- 左边人数 -->
                        <div class="leftData">
                            <img class="leftImg2" src="../assets/number.png">
                            <div class="leftNumber">{{listSub.numberNumber}}</div>
                        </div>
                        <!-- 左边浏览量 -->
                        <div class="leftData">
                            <img class="leftImg3" src="../assets/visits.png">
                            <div class="leftNumber">{{listSub.visitsNumber}}</div>
                        </div>
                    </div>
                    <!-- 子活动数据右边 -->
                    <div class="dataRight">
                        <div class="dataRightSetup dataRightSetup2">
                            <div class="dataSetupText">设置</div>
                            <div class="iconfont icon-xiala"></div>
                        </div>
                        <div class="dataRightSetup">
                            <div class="dataSetupText">操作</div>
                            <div class="iconfont icon-xiala"></div>
                        </div>
                    </div>
                </div>
                <!-- 子活动时间 -->
                <div class="subTime">
                    <div class="voteTime">投票时间：{{listSub.voteTime}}</div>
                    <div class="foundTime">创建时间：{{listSub.foundTime}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'activityList',
        props: {
            activityLists: {
                type: Array, // Object
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                nameState2: '进行中'
            }
        }
    }
</script>
<style>
    /* 活动列表 */
    .activityList {
        background-color: #fff;
    }
    /* 活动头部 */
    .listHead,
    .listHead2 {
        width: 100%;
        box-sizing: border-box;
        height: 56px;
        display: flex;
        justify-content: space-between;
        background-color: #f5f9fc;
        padding: 0 14px;
        line-height: 56px;
    }
    .listHead2 {
        align-items: center;
        justify-content: flex-end;
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
    /* 子活动列表 */
    .listSub {
        margin: 25px 14px 0;
        border-bottom: #f0f0f0 1px solid;
    }
    /* 子活动名字 */
    .subName {
        display: flex;
    }
    /* 子活动名字标题 */
    .nameTitle {
        /* flex: 1; */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 290px;
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
    /* 活动时间 */
    .subTime {
        font-size: 10px;
        color: #999;
        margin-bottom: 20px;
    }
</style>
