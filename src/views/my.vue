<template>
    <div class="my">
        <!-- 顶部 -->
        <div class="myTop">
            <!-- 左边 -->
            <div class="topLeft">
                <!-- 头像 -->
                <img class="topLeftImg" :src="require('../assets/'+topLeftImg)">
                <div>
                    <!-- 用户名称 -->
                    <div class="topLeftName">{{topLeftName}}</div>
                    <!-- 用户电话 -->
                    <div class="topLeftPhone">
                        <div class="phone">{{phone}}</div>
                        <div class="iconfont icon-bianji"></div>
                    </div>
                </div>
            </div>
            <!-- 右边 -->
            <div class="topRight">
                <img class="topRightImg" src="../assets/vip2.png">
                <div>
                    <div class="topRightName">{{topRightName}}</div>
                    <div class="topRightTime">{{topRightTime}}到期</div>
                </div>
            </div>
        </div>
        <div class="money">
            <div class="moneyState">
                <div class="moneyStateName">账户余额</div>
                <div class="moneyStateNumber">¥{{moneyStateNumber}}.00</div>
                <div class="moneyStateButton">充值</div>
            </div>
            <div class="moneyLine"></div>
            <div class="moneyState">
                <div class="moneyStateName">推广奖励</div>
                <div class="moneyStateNumber">¥{{moneyStateNumber2}}.00</div>
                <div class="moneyStateButton">提现</div>
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 功能列表 -->
        <div class="functionList" v-for="functionList in functionLists" :key="functionList.id">
            <!-- 左 -->
            <div class="functionListLeft">
                <img class="functionLeftImg" :src="require('../assets/'+functionList.functionListImg+'.png')">
            </div>
            <!-- 右 -->
            <div class="functionListRight">
                <div class="functionLeftName">{{functionList.functionLeftName}}</div>
                <div class="functionListRight2">
                    <img class="functionRightImg" :src="require('../assets/'+functionList.functionRightImg)" v-if="functionList.isShowFunctionRightImg">
                    <div class="functionRightText" v-if="functionList.isShowFunctionRightText">{{functionList.functionRightText}}</div>
                    <div class="iconfont icon-you"></div>
                </div>
            </div>
        </div>
        <!-- 底部间隔 -->
        <intervalD/>
        <!-- 导航栏 -->
        <navigation :myIndex="3" />
    </div>
</template>
<script>
    import navigation from '../components/navigation'
    import intervalD from '../components/intervalD'
    import interval from '../components/interval'

    export default {
        name: 'my',
        components: {
            navigation,
            intervalD,
            interval
        },
        data() {
            return {
                // 头像
                topLeftImg: 'img7.jpg',
                // 用户名称
                topLeftName: '用户名称1994',
                // 用户手机
                phone: '15283819858',
                // 会员等级
                topRightName: '银卡会员',
                // 会员到期时间
                topRightTime: '2020-10-10',
                // 账户余额
                moneyStateNumber: '39695',
                // 推广奖励
                moneyStateNumber2: '999',
                // 功能列表
                functionLists: [
                    {
                        // 功能列表左-图标
                        functionListImg: 'notice',
                        // 功能列表左-名称
                        functionLeftName: '最新公告',
                        // 功能列表右-图片是否显示
                        isShowFunctionRightImg: false,
                        // 功能列表右-图片
                        functionRightImg: 'img5.jpg'
                    },
                    {
                        // 功能列表左-图标
                        functionListImg: 'weChat2',
                        // 功能列表左-名称
                        functionLeftName: '微信绑定',
                        // 功能列表右-图片是否显示
                        isShowFunctionRightImg: false,
                        // 功能列表右-文字是否显示
                        isShowFunctionRightText: false,
                        // 功能列表右-文字
                        functionRightText: '未绑定'
                    },
                    {
                        // 功能列表左-图标
                        functionListImg: 'news',
                        // 功能列表左-名称
                        functionLeftName: '消息',
                        // 功能列表右-图片是否显示
                        isShowFunctionRightImg: false
                    },
                    {
                        // 功能列表左-图标
                        functionListImg: 'signOut',
                        // 功能列表左-名称
                        functionLeftName: '退出',
                        // 功能列表右-图片是否显示
                        isShowFunctionRightImg: false
                    }
                ]
            }
        },
        mounted() {
            this.functionLists.map((myIndex, index) => {
                if (index === 0) {
                    myIndex.isShowFunctionRightImg = true
                }
                if (index === 1) {
                    myIndex.isShowFunctionRightText = true
                }
            })
        }
    }
</script>
<style>
    /* 顶部 */
    .myTop {
        height: 166px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #3399ff;
    }
    /* 顶部-左边 */
    .topLeft {
        display: flex;
        align-items: center;
        margin-left: 14px;
    }
    /* 左边-头像 */
    .topLeftImg {
        width: 63px;
        height: 63px;
        border-radius: 50%;
        margin-right: 14px;
        object-fit: cover;
    }
    /* 左边-名称 */
    .topLeftName {
        font-size: 16px;
        color: #fff;
        margin-bottom: 10px;
    }
    /* 左边-电话 */
    .topLeftPhone {
        display: flex;
        align-items: center;
        color: #fff;
    }
    /* 左边-编辑图标 */
    .icon-bianji {
        font-size: 20px;
        margin-left: 8px;
    }
    /* 顶部右边 */
    .topRight {
        height: 46px;
        display: flex;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.9);
        padding: 0 14px;
        border-radius: 23px 0 0 23px;
    }
    /* 右边-图标 */
    .topRightImg {
        width: 17px;
        height: 15px;
        margin-right: 8px;
    }
    .topRightName {
        color: #3399ff;
        margin-bottom: -2px;
    }
    .topRightTime {
        color: #999;
        font-size: 10px;
    }
    /* 金额统计 */
    .money {
        height: 150px;
        display: flex;
        align-items: center;
        background-color: #fff;
    }
    .moneyState {
        width: 50%;
        text-align: center;
    }
    .moneyStateName {
        font-size: 12px;
        color: #999;
    }
    .moneyStateNumber {
        font-size: 18px;
        font-weight: bold;
        margin: 2px 0 16px;
    }
    .moneyStateButton {
        width: 83px;
        height: 28px;
        color: #3399ff;
        border-radius: 3px;
        border: #3399ff 1px solid;
        text-align: center;
        line-height: 28px;
        margin: auto;
    }
    .moneyLine {
        width: 1px;
        height: 76px;
        background-color: #ccc;
    }
    /* 功能列表 */
    .functionList {
        height: 78px;
        display: flex;
        align-items: center;
        padding: 0 14px;
        background-color: #fff;
    }
    .functionListLeft {
        display: flex;
        align-items: center;
    }
    .functionLeftImg {
        width: 20px;
        height: 20px;
        margin-right: 14px;
    }
    .functionListRight {
        height: 78px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        color: #999;
        border-bottom: #e6e6e6 1px solid;
    }
    .functionListRight2 {
        display: flex;
        align-items: center;
    }
    .functionRightImg {
        width: 25px;
        height: 25px;
        border-radius: 4px;
        margin-right: 14px;
        object-fit: cover;
    }
    .functionRightText {
        margin-right: 14px;
    }
</style>
