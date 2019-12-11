<template>
    <!-- 充值中心 -->
    <div class="recharge">
        <!-- 标头 -->
        <myTitle titleName="充值中心" />
        <!-- 选中金额 -->
        <div class="rechargeContent">
            <!-- 当前余额 -->
            <div class="rechargeCurrent">
                <span class="rechargeCurrentName">当前余额</span>
                <span class="rechargeCurrentMoney">¥{{rechargeCurrentMoney}}.00</span>
                <span class="rechargeCurrentButton">当前余额 ></span>
            </div>
            <!-- 充值金额 -->
            <div class="choice">
                <div class="rechargeCurrentName">充值金额</div>
                <div class="choiceList">
                    <div class="choiceMoney" :class="{choiceMoney2:myIndex===index}" v-for="(choiceMoney,index) in choiceMoneys" :key="index" @click="choiceMoneyFun(index)">{{choiceMoney.choiceMoney}}元</div>
                    <input class="choiceMoney3" :class="{choiceMoney4:isShowchoiceMoney3}" type="number" placeholder="自定义金额" @click="choiceMoney3Fun">
                </div>
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 支付方式 -->
        <div class="method">
            <div class="rechargeCurrentName2">支付方式</div>
            <div class="methodAlipay" @click="methodFun(index)" v-for="(methodList,index) in methodLists" :key="index">
                <div class="methodAlipayTitle">
                    <img class="methodAlipayImg" :src="require('../assets/'+methodList.methodImg+'.png')">
                    <div>{{methodList.methodName}}</div>
                </div>
                <img class="methodAlipayCheck" src="../assets/check-x.png" v-if="myIndex2===index">
                <img class="methodAlipayCheck" src="../assets/check.png" v-else>
            </div>
        </div>
        <!-- 确认支付 -->
        <bigButtonDetermine determine="确认支付" />
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'
    import interval from '../components/interval'
    import bigButtonDetermine from '../components/bigButtonDetermine'

    export default {
        name: 'recharge',
        components: {
            myTitle,
            interval,
            bigButtonDetermine
        },
        data() {
            return {
                // 当前余额
                rechargeCurrentMoney: '1000',
                // 充值金额列表
                myIndex: 0,
                choiceMoneys: [
                    {
                        choiceMoney: '100'
                    },
                    {
                        choiceMoney: '200'
                    },
                    {
                        choiceMoney: '300'
                    },
                    {
                        choiceMoney: '500'
                    },
                    {
                        choiceMoney: '1000'
                    }
                ],
                // 点击输入金额
                isShowchoiceMoney3: false,
                // 支付方式
                myIndex2: 0,
                methodLists: [
                    {
                        methodImg: 'alipay',
                        methodName: '支付宝'
                    },
                    {
                        methodImg: 'weChatPayment',
                        methodName: '微信支付'
                    }
                ]
            }
        },
        methods: {
            // 充值金额-单选
            choiceMoneyFun(index) {
                this.myIndex = index
                this.isShowchoiceMoney3 = false
            },
            // 支付方式
            methodFun(index) {
                this.myIndex2 = index
            },
            // 点击输入金额
            choiceMoney3Fun() {
                this.isShowchoiceMoney3 = true
                this.myIndex = this.choiceMoneys.length + 1
            }
        }
    }
</script>
<style>
    /* 充值中心-选中金额 */
    .rechargeContent {
        background-color: #fff;
        padding: 40px 14px 30px;
    }
    /* 当前余额 */
    .rechargeCurrent {
        display: flex;
        align-items: center;
    }
    .rechargeCurrentName {
        color: #999;
        margin-right: 20px;
    }
    .rechargeCurrentMoney {
        font-size: 18px;
        margin-right: 20px;
        font-weight: bold;
    }
    .rechargeCurrentButton {
        color: #3399ff;
    }
    /* 充值金额 */
    .choice {
        margin-top: 30px;
    }
    .choiceList {
        display: flex;
        flex-wrap: wrap;
    }
    .choiceMoney,
    .choiceMoney3 {
        width: 104px;
        height: 47px;
        font-size: 18px;
        border-radius: 7px;
        border: #999 1px solid;
        text-align: center;
        line-height: 49px;
        margin-top: 14px;
        margin-right: 14px;
        font-weight: bold;
    }
    .choiceMoney2 {
        border: #3399ff 1px solid;
        color: #3399ff;
    }
    .choiceMoney3 {
        width: 106px;
        height: 49px;
        margin-right: 0;
    }
    .choiceMoney4 {
        border: #3399ff 1px solid;
    }
    .choiceMoney:nth-child(3n) {
        margin-right: 0;
    }
    input::-webkit-input-placeholder {
        color: #999;
    }
    /* 支付方式 */
    .rechargeCurrentName2 {
        color: #999;
        background-color: #f5f5f5;
        margin-bottom: 14px;
        margin-left: 14px;
    }
    .methodAlipay {
        height: 82px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        padding: 0 14px;
        border-bottom: #f5f5f5 1px solid;
    }
    .methodAlipayTitle {
        display: flex;
        align-items: center;
    }
    .methodAlipayImg,
    .methodAlipayImg2 {
        width: 26px;
        height: 26px;
        margin-right: 14px;
    }
    .methodAlipayImg2 {
        width: 30px;
    }
    .methodAlipayCheck {
        width: 24px;
        height: 24px;
    }
</style>
