<template>
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
                <div class="memberVipName1">银卡会员</div>
                <img class="memberVipImg" src="../assets/silverCard.png">
            </div>
            <div class="memberVip2" :class="{memberVip4:isShowmemberVip4}" @click="memberVipAFun">
                <div class="memberVipName2">金卡会员</div>
                <img class="memberVipImg" src="../assets/goldCard.png">
            </div>
        </div>
        <!-- 开通时长 -->
        <div class="duration">
            <span class="memberCurrentName">开通时长</span>
            <div class="durationList" :class="{durationList2:isShowdurationList2}" v-for="durationList in durationLists" :key="durationList.id" @click="durationListFun">
                <div class="durationListLeft" :class="{durationListLeft2:isShowdurationList2}">¥{{durationList.durationMoney}}.00</div>
                <div class="durationListRight">
                    <div class="durationYMoney">¥{{durationList.durationYMoney}}.00</div>
                    <div class="durationLine"></div>
                    <div class="durationTime">{{durationList.durationTime}}</div>
                </div>
            </div>
        </div>
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
                isShowdurationList2: true,
                durationLists: [
                    {
                        // 会员价格
                        durationMoney: '399',
                        // 会员原价
                        durationYMoney: '599',
                        // 开通时长
                        durationTime: '1个月'
                    },
                    {
                        // 会员价格
                        durationMoney: '999',
                        // 会员原价
                        durationYMoney: '1699',
                        // 开通时长
                        durationTime: '3个月'
                    },
                    {
                        // 会员价格
                        durationMoney: '1699',
                        // 会员原价
                        durationYMoney: '3099',
                        // 开通时长
                        durationTime: '6个月'
                    },
                    {
                        // 会员价格
                        durationMoney: '3099',
                        // 会员原价
                        durationYMoney: '5699',
                        // 开通时长
                        durationTime: '1年'
                    }
                ]
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
            durationListFun() {
                this.durationLists.map(my => {
                    console.log(my)
                    this.durationList2 = true
                })
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 5px 17px 0px rgba(57, 216, 242, 0.1);
        border-radius: 7px;
        padding: 0 34px;
        margin-top: 20px;
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
    .duration {
        margin-top: 28px;
    }
    .durationList {
        height: 83px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: #ccc 1px solid;
        padding: 0 20px;
        border-radius: 7px;
        margin-top: 14px;
    }
    .durationList2 {
        border: #ccc 1px solid;
    }
    .durationListLeft {
        font-size: 24px;
    }
    .durationListLeft2 {
        color: #3399ff;
    }
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
        margin: 0 20px;
    }
    .durationTime {
        font-size: 16px;
    }
</style>
