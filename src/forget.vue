<template>
    <div class="forget">
        <!-- 顶部 -->
        <myhead/>
        <!-- 标题 -->
        <div class="forgetTitle">找回密码</div>
        <!-- 步骤 -->
        <div class="step">
            <div class="steptitle">
                <div class="stepimg1"></div>
                <div class="stepname1">验证手机号</div>
            </div>
            <div class="line"></div>
            <div class="steptitle">
                <div class="stepimg2"></div>
                <div class="stepname2">重置密码</div>
            </div>
        </div>
        <div class="content">
            <!-- 手机号 -->
            <div class="myphone">
                <div class="myphoneTitle">手机号
                </div>
                <input type="text" placeholder="请输入您的手机号码" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" @blur="myphoneFun" v-model="myphoneText" />
                <div class="myphoneTips" v-if="isShowMyphone">请输入正确的手机号码</div>
            </div>
            <!-- 验证码 -->
            <div class="myphone">
                <div class="myphoneTitle">验证码</div>
                <input type="text" placeholder="请输入验证码" v-model.number="mycodeText" @blur="mycodeFun" maxlength="4">
                <div class="mycodeTips" @click="mycodeButtonFun" v-if="isShowMycodeButton">获取验证码</div>
                <div class="countdown" v-else>{{mycountdown}}s后获取
                </div>
                <div class="myphoneTips" v-if="isShowMycode">请输入正确的验证码</div>
            </div>
        </div>
        <div class="forgetButton" @click="forgetButtonFun">找回密码</div>
        <!-- 立即登录 -->
        <div class="bottom" @click="signInFun">
            立即登录
        </div>
    </div>
</template>
<script>
    import myhead from './components/myhead'
    export default {
        name: 'forget',
        components: {
            myhead
        },
        data() {
            return {
                // 手机号输入框
                myphoneText: '',
                // 验证码输入框
                mycodeText: '',
                mycodeTextA: '',
                // 手机号错误提示
                isShowMyphone: false,
                // 验证码错误提示
                isShowMycode: false,
                // 获取验证码隐藏显示
                isShowMycodeButton: true,
                // 倒计时
                mycountdown: 60
            }
        },
        methods: {
            // 手机号输入框失去光标时
            myphoneFun() {
                var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
                if (!myreg.test(this.myphoneText)) {
                    this.isShowMyphone = true
                } else {
                    this.isShowMyphone = false
                }
            },
            // 验证码输入框失去光标时
            mycodeFun() {
                if (this.mycodeText !== this.mycodeTextA) {
                    this.isShowMycode = true
                } else if (this.mycodeText.length === 0) {
                    this.isShowMycode = true
                } else {
                    this.isShowMycode = false
                }
            },
            // 点击获取验证码
            mycodeButtonFun() {
                this.myphoneFun()
                if (this.isShowMyphone === false) {
                    this.isShowMycodeButton = false
                    this.isShowMycode = false
                    this.mycodeTextA = this.mynumber(1000, 9999)
                    this.mycodeText = this.mycodeTextA
                    this.mycountdown = 60
                    this.timeFun()
                } else {
                    this.isShowMyphone = true
                }
            },
            // 生成一个4位数的随机数方法
            mynumber(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            // 倒计时
            timeFun() {
                let timeClock = setInterval(() => {
                    this.mycountdown--
                    if (this.mycountdown === 0) {
                        clearInterval(timeClock)
                        this.isShowMycodeButton = true
                    }
                }, 1000)
            },
            // 找回密码按钮
            forgetButtonFun() {
                this.myphoneFun()
                this.mycodeFun()
                // if (this.isShowMyphone === false && this.isShowMycode === false) {
                // }
            },
            // 立即登录
            signInFun() {
                this.$emit('forget-signInFun')
            }
        }
    }
</script>
<style>
    /* 登录标题 */
    .forgetTitle {
        text-align: center;
        font-size: 22px;
        margin-top: 24px;
        margin-bottom: 38px;
    }
    /* 步骤 */
    .step {
        position: relative;
        display: flex;
        justify-content: space-around;
        margin-bottom: 60px;
    }
    .stepimg1,
    .stepimg2 {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px #3399ff solid;
        margin: 0 auto;
    }
    .stepname1 {
        color: #3399ff;
    }
    /* 线 */
    .line {
        position: absolute;
        top: 8px;
        width: 170px;
        height: 2px;
        background-color: #e6e6e6;
        margin-left: 3px;
    }
    .stepimg2 {
        border: 2px #e6e6e6 solid;
    }
    .stepname1 {
        color: #666;
    }
    /* 输入框 */
    .content {
        width: 320px;
        margin: 0 auto;
    }
    input {
        flex: 1;
        border: none;
    }
    .myphone {
        position: relative;
        display: flex;
        align-items: center;
        height: 55px;
        margin-top: 20px;
        border-bottom: 1px #e6e6e6 solid;
    }
    .myphoneTitle {
        color: #666;
        width: 44px;
        /* margin-right: 16px; */
        padding-right: 16px;
    }
    /* 错误提示语 */
    .myphoneTips {
        position: absolute;
        top: 56px;
        left: 60px;
        color: #ee6869;
        font-size: 12px;
    }
    /* 获取验证码 */
    .mycodeTips {
        color: #3399ff;
        font-size: 12px;
    }
    /* 倒计时 */
    .countdown {
        color: #999;
        font-size: 12px;
    }
    /* 登录按钮 */
    .forgetButton {
        width: 333px;
        height: 42px;
        color: #fff;
        background-color: #3399ff;
        text-align: center;
        line-height: 42px;
        margin: 80px auto 20px;
        border-radius: 7px;
    }
    /* 立即登录 */
    .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 20px;
        color: #666;
    }
</style>
