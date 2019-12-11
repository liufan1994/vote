<template>
    <!-- 会员升级 -->
    <div class="member">
        <div class="memberCurrent">
            <span class="memberCurrentName">当前会员</span>
            <span>{{memberCurrentText}}</span>
        </div>
        <div class="memberCurrent">
            <span class="memberCurrentName">有效期限</span>
            <span>{{memberCurrentTime}}</span>
        </div>
        <div class="memberVip">
            <span class="memberCurrentName">升级会员</span>
            <div class="memberVip1" :class="{memberVip3:isShowmemberVip3}" @click="memberVipFun">
                <div class="memberVipMask"></div>
                <div class="memberVipName1">银卡会员</div>
                <img class="memberVipImg" src="../assets/silverCard.png">
            </div>
            <div class="memberVip2" :class="{memberVip4:isShowmemberVip4}" @click="memberVipAFun">
                <div class="memberVipMask2"></div>
                <div class="memberVipName2">金卡会员</div>
                <img class="memberVipImg" src="../assets/goldCard.png">
            </div>
        </div>
        <!-- 开通时长 -->
        <div class="duration">
            <span class="memberCurrentName">开通时长</span>
            <div class="durationList" :class="{durationList2:durationList.isShowDurationList}" v-for="(durationList,index) in durationLists" :key="index" @click="durationListFun(index)">
                <div class="durationListLeft" :class="{durationListLeft2:durationList.isShowDurationList}">¥{{durationList.durationMoney}}.00</div>
                <div class="durationListRight">
                    <div class="durationYMoney">¥{{durationList.durationYMoney}}.00</div>
                    <div class="durationLine"></div>
                    <div class="durationTime">{{durationList.durationTime}}</div>
                </div>
            </div>
        </div>
        <!-- 账户余额 -->
        <div class="balance">
            <span class="memberCurrentName">账户余额</span>
            <span class="balanceMoney">¥{{balanceMoney}}.00</span>
            <span class="balanceButton" @click="balanceButtonFun">去充值 ></span>
        </div>
        <!-- 立即升级 -->
        <div class="upgrade">立即升级</div>
    </div>
</template>
<script>
    export default {
        name: 'member',
        data() {
            return {
                // 当前等级
                memberCurrentText: '15283819858（银卡会员）',
                // 有效期限
                memberCurrentTime: '2019-05-06 00:00:00',
                // 会员卡点击样式
                isShowmemberVip3: true,
                isShowmemberVip4: false,
                // 开通时长选择样式
                durationLists: [
                    {
                        isShowDurationList: true,
                        // 会员价格
                        durationMoney: '399',
                        // 会员原价
                        durationYMoney: '599',
                        // 开通时长
                        durationTime: '1个月'
                    },
                    {
                        isShowDurationList: false,
                        // 会员价格
                        durationMoney: '999',
                        // 会员原价
                        durationYMoney: '1699',
                        // 开通时长
                        durationTime: '3个月'
                    },
                    {
                        isShowDurationList: false,
                        // 会员价格
                        durationMoney: '1699',
                        // 会员原价
                        durationYMoney: '3099',
                        // 开通时长
                        durationTime: '6个月'
                    },
                    {
                        isShowDurationList: false,
                        // 会员价格
                        durationMoney: '3099',
                        // 会员原价
                        durationYMoney: '5699',
                        // 开通时长
                        durationTime: '1年'
                    }
                ],
                // 账户余额
                balanceMoney: '388'
            }
        },
        methods: {
            memberVipFun() {
                this.isShowmemberVip3 = true
                this.isShowmemberVip4 = false
            },
            memberVipAFun() {
                this.isShowmemberVip3 = false
                this.isShowmemberVip4 = true
            },
            durationListFun(index) {
                this.durationLists.map((my, myIndex) => {
                    console.log(myIndex)
                    if (myIndex === index) {
                        my.isShowDurationList = true
                    } else {
                        my.isShowDurationList = false
                    }
                })
            },
            balanceButtonFun() {
                this.$router.push('/recharge')
            }
        }
    }
</script>
<style>
    .member {
        background-color: #fff;
        padding: 0 14px;
    }
    /* 当前会员等级/有效期限 */
    .memberCurrent {
        margin: 28px 0;
    }
    .memberCurrentName {
        color: #999;
        margin-right: 18px;
    }
    /* 会员等级 */
    .memberVip1,
    .memberVip2 {
        height: 90px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 5px 17px 0px rgba(57, 216, 242, 0.1);
        border-radius: 7px;
        padding: 0 34px;
        margin-top: 20px;
        overflow: hidden;
    }
    .memberVip2 {
        box-shadow: 0px 5px 17px 0px rgba(248, 160, 108, 0.1);
    }
    .memberVip3 {
        border: #39d8f2 1px solid;
    }
    .memberVip4 {
        border: #f8a06c 1px solid;
    }
    /* 会员卡样式遮罩 */
    .memberVipMask,
    .memberVipMask2 {
        width: 200px;
        height: 180px;
        position: absolute;
        top: 10px;
        right: 235px;
        background-color: rgba(57, 216, 242, 0.1);
        transform: rotate(-40deg);
    }
    .memberVipMask2 {
        background: rgba(248, 160, 108, 0.1);
    }
    /* 银卡会员/金卡会员 */
    .memberVipName1,
    .memberVipName2 {
        font-size: 22px;
        font-weight: bold;
        color: #39d8f2;
    }
    .memberVipName2 {
        color: #f8a06c;
    }
    .memberVipImg {
        width: 43px;
        height: 37px;
    }
    /* 开通时长 */
    .duration {
        margin: 28px 0 40px;
    }
    /* 列表 */
    .durationList {
        height: 83px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: #ccc 1px solid;
        border-radius: 7px;
        margin-top: 14px;
    }
    .durationList2 {
        border: #3399ff 1px solid;
    }
    /* 列表-左边 */
    .durationListLeft {
        font-size: 24px;
        margin-left: 20px;
    }
    .durationListLeft2 {
        color: #3399ff;
    }
    /* 列表-右边 */
    .durationListRight {
        display: flex;
        align-items: center;
    }
    .durationYMoney {
        color: #999;
        text-decoration: line-through;
    }
    .durationLine {
        width: 1px;
        height: 50px;
        background-color: #ccc;
        margin-left: 20px;
    }
    .durationTime {
        width: 76px;
        font-size: 16px;
        text-align: center;
    }
    /* 账户余额 */
    .balanceMoney {
        color: #ee6869;
        margin-right: 38px;
    }
    .balanceButton {
        color: #3399ff;
    }
    /* 立即升级 */
    .upgrade {
        height: 42px;
        background-color: #3399ff;
        color: #fff;
        border-radius: 7px;
        text-align: center;
        line-height: 42px;
        margin: 40px 0 24px;
    }
</style>
