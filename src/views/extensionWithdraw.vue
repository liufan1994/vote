<template>
    <!-- 推广提现 -->
    <div class="extensionWithdraw">
        <!-- 标头 -->
        <myTitle titleName="推广提现" />
        <!-- 提现内容 -->
        <div class="wthdrawContent">
            <!-- 推广余额 -->
            <div class="wthdrawBalance">
                <div class="wthdrawBalanceName">推广余额(元)</div>
                <div class="wthdrawBalanceMoney">{{wthdrawBalanceMoney}}.00</div>
            </div>
            <!-- 支付宝账号 -->
            <div class="wthdrawList">
                <div class="wthdrawListLeft">
                    <div class="wthdrawTitle">支付宝账号</div>
                    <div class="wthdrawAccount">{{wthdrawAccount}}</div>
                    <div class="wthdrawName">{{wthdrawName}}</div>
                </div>
                <div class="wthdrawListRight">设置</div>
            </div>
            <!-- 提现金额 -->
            <div class="wthdrawList">
                <div class="wthdrawTitle">提现金额</div>
                <div class="wthdrawListRight2">
                    <input class="wthdrawInput" type="text" placeholder="请输入需要提现的金额">
                    <div class="wthdrawButton">全部提现</div>
                    <div class="wthdrawPs">每次200元起提现</div>
                </div>
            </div>
        </div>
        <bigButtonDetermine determine="提现" />
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'
    import bigButtonDetermine from '../components/bigButtonDetermine'

    export default {
        name: 'extensionWithdraw',
        components: {
            myTitle,
            bigButtonDetermine
        },
        data() {
            return {
                wthdrawBalanceMoney: '2000',
                wthdrawAccount: '15283819858@163.com',
                wthdrawName: '真实姓名'
            }
        }
    }
</script>
<style scoped>
    /* 提现内容 */
    .wthdrawContent {
        padding: 40px 14px;
        background-color: #fff;
    }
    /* 账户余额 */
    .wthdrawBalance {
        margin-bottom: 60px;
        text-align: center;
    }
    /* 账户余额-标题 */
    .wthdrawBalanceName {
        color: #999;
        margin-bottom: 14px;
    }
    /* 账户余额-金额 */
    .wthdrawBalanceMoney {
        font-size: 28px;
        font-weight: bold;
    }
    /* 支付宝账号 */
    .wthdrawList {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 46px;
    }
    /* 支付宝账号-左 */
    .wthdrawListLeft {
        display: flex;
        align-items: center;
        position: relative;
    }
    /* 支付宝账号-标题 */
    .wthdrawTitle {
        width: 70px;
        color: #999;
        margin-right: 14px;
    }
    /* 支付宝账号-真实姓名 */
    .wthdrawName {
        position: absolute;
        left: 84px;
        top: 18px;
        color: #999;
        font-size: 12px;
    }
    /* 支付宝账号-右 */
    .wthdrawListRight {
        color: #3399ff;
    }
    /* 提现金额-右 */
    .wthdrawListRight2 {
        height: 50px;
        position: relative;
        flex: 1;
        line-height: 50px;
        border-bottom: #ccc 1px solid;
    }
    .wthdrawInput {
        outline: none;
        /* border: none; */
    }
    /* 全部提现 */
    .wthdrawButton {
        position: absolute;
        top: 0;
        right: 0;
        color: #3399ff;
    }
    /* 提示 */
    .wthdrawPs {
        position: absolute;
        top: 36px;
        left: 0;
        color: #ee6869;
        font-size: 12px;
    }
</style>
