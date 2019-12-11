<template>
    <!-- 我的工单-查看 -->
    <div class="myWorkSee">
        <!-- 步骤条 -->
        <div class="stepBar">
            <div class="stepBar1">待处理
                <div class="stepBarTop"></div>
            </div>
            <div class="stepBar1" :class="{stepBar2:isShowStepBar}">处理中
                <div class="stepBarTop" :class="{stepBarTop2:isShowStepBar}"></div>
            </div>
            <div class="stepBar1" :class="{stepBar2:isShowStepBar}">已解决</div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 工单标题 -->
        <div class="workOrder">
            <!-- 左 -->
            <div class="workOrderLeft">
                <!-- 标题 -->
                <div class="workOrderTitle">{{workOrderTitle}}</div>
                <!-- 下部信息 -->
                <div class="workOrderInformation">
                    <!-- 状态 -->
                    <div class="workOrderState" :class="[workOrderState==='处理中'?'workOrderState2':(workOrderState==='已解决'?'workOrderState3':'')]">{{workOrderState}}</div>
                    <!-- 工单编号 -->
                    <div class="workOrderNumber">工单编号：{{workOrderNumber}}</div>
                    <!-- 时间 -->
                    <div class="workOrderTime">{{workOrderTime}}</div>
                </div>
            </div>
            <!-- 右 -->
            <div class="workOrderRight">删除</div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 沟通记录 -->
        <div class="communication">
            <!-- 标题 -->
            <div class="communicationTitle">沟通记录</div>
            <!-- 工单内容 -->
            <div class="communicationContent">
                <!-- 工单列表-回复 -->
                <div class="communicationList" v-for="(communicationList,index) in communicationLists" :key="index">
                    <img class="communicationListLeft" :class="{communicationListLeft2:index===1}" :src="require('../../assets/'+communicationList.communicationImg)">
                    <div :class="{communicationListRight:index===0}">
                        <div class="communicationPhone">{{communicationList.communicationPhone}}</div>
                        <div class="communicationName" v-if="index===0">工单详情：</div>
                        <div class="communicationText">{{communicationList.communicationText}}</div>
                        <div class="communicationTime">{{communicationList.communicationTime}}</div>
                    </div>
                </div>
                <!-- 回复输入框 -->
                <div class="replyTextarea">
                    <textarea placeholder="请输入回复内容" />
                    <div class="replyButton">提交</div>
                </div>
                <!-- 反馈 -->
                <div class="feedback">
                    <div class="feedbackText">问题是否解决</div>
                    <div class="feedbackButton">已解决</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import interval from '../../components/interval'

    export default {
        name: 'myWorkSee',
        components: {
            interval
        },
        data() {
            return {
                // 步骤条样式
                isShowStepBar: true,
                // 查看工单-标题
                workOrderTitle: '',
                workOrderState: '',
                workOrderNumber: '2FOA7G91',
                workOrderTime: '2019-05-16 00:00:00',
                // 查看工单-回复
                communicationLists: [
                    {
                        communicationImg: 'img9.jpg',
                        communicationPhone: '15283819858',
                        communicationText:
                            '这里是工单详情它有很多这里是工单详情它有很多这里是工单详情它有很多这里是工单详情它有很多这里是工单详情它有很多',
                        communicationTime: '2019-01-10 00:00:00'
                    },
                    {
                        communicationImg: 'logo.png',
                        communicationPhone: '领跑',
                        communicationText:
                            '这里是回复内容内容很多这里是回复内容内容很多这里是回复内容内容很多这里是回复内容内容很多',
                        communicationTime: '2019-01-10 00:00:00'
                    },
                    {
                        communicationImg: 'img9.jpg',
                        communicationPhone: '15283819858',
                        communicationText: '这里是回复内容内容很多这里是回复内容',
                        communicationTime: '2019-01-10 00:00:00'
                    }
                ]
            }
        },
        mounted() {
            this.workOrderTitle = this.$route.query.name
            this.workOrderState = this.$route.query.state
        }
    }
</script>
<style scoped>
    /* 步骤条 */
    .stepBar {
        display: flex;
        justify-content: space-around;
        overflow: hidden;
    }
    /* 步骤1 */
    .stepBar1,
    .stepBar2 {
        width: 33.3333%;
        height: 35px;
        position: relative;
        background-color: #3399ff;
        text-align: center;
        line-height: 35px;
        color: #fff;
    }
    .stepBar2 {
        color: #999;
        background-color: #e6e6e6;
    }
    /* 棱形 */
    .stepBarTop {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 3px;
        right: -11px;
        transform: rotate(45deg);
        border-top: #f5f5f5 5px solid;
        border-right: #f5f5f5 5px solid;
        background-color: #3399ff;
        z-index: 100;
    }
    .stepBarTop2 {
        background-color: #e6e6e6;
    }
    /* 工单信息 */
    .workOrder {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        padding: 28px 14px;
    }
    /* 工单信息-左 */
    .workOrderLeft {
        margin-right: 14px;
    }
    .workOrderTitle {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .workOrderInformation {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .workOrderState,
    .workOrderState2,
    .workOrderState3 {
        color: #ee6869;
        margin-right: 16px;
    }
    .workOrderState2 {
        color: #29cc7a;
    }
    .workOrderState3 {
        color: #999;
    }
    .workOrderNumber {
        color: #666;
        font-size: 12px;
        margin-right: 10px;
    }
    .workOrderTime {
        font-size: 12px;
        color: #999;
    }
    /* 工单信息-右 */
    .workOrderRight {
        flex: none;
        color: #999;
    }
    /* 沟通记录-标题 */
    .communicationTitle {
        background-color: #f5f5f5;
        color: #666;
        padding: 0 14px 10px;
    }
    /* 沟通记录-内容 */
    .communicationContent {
        padding: 0 14px;
    }
    /* 沟通记录-列表 */
    .communicationList {
        display: flex;
        padding: 26px 0;
        border-bottom: #e6e6e6 1px solid;
    }
    /* 沟通记录-列表-左 */
    .communicationListLeft,
    .communicationListLeft2 {
        width: 49px;
        height: 49px;
        flex: none;
        border-radius: 50%;
        background-color: #e6e6e6;
        margin-right: 14px;
    }
    .communicationListLeft2 {
        background-color: #3399ff;
    }
    /* 沟通记录-列表-右 */
    .communicationListRight {
        color: #999;
    }
    .communicationPhone {
        margin-bottom: 10px;
    }
    .communicationTime {
        font-size: 12px;
        color: #999;
    }
    /* 回复输入框 */
    .replyTextarea {
        position: relative;
        margin-top: 28px;
    }
    .replyButton {
        width: 63px;
        height: 31px;
        position: absolute;
        bottom: 14px;
        right: 14px;
        background-color: #3399ff;
        color: #fff;
        border-radius: 3px;
        text-align: center;
        line-height: 31px;
    }
    /* 反馈 */
    .feedback {
        display: flex;
        align-items: center;
        justify-content: center;
        columns: #666;
        margin: 42px 0;
    }
    .feedbackText {
        margin-right: 6px;
    }
    .feedbackButton {
        width: 69px;
        height: 31px;
        text-align: center;
        line-height: 31px;
        border-radius: 3px;
        border: #ccc 1px solid;
    }
</style>
