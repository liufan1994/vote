<template>
    <!-- 注册 -->
    <div class="register">
        <!-- 顶部样式 -->
        <myhead/>
        <div class="registerText">注册</div>
        <!-- 输入框 -->
        <div class="contentRegister">
            <div class="input1Register">
                <div class="inputText1Register">手机号码
                </div>
                <input type="text" placeholder="请输入您的手机号码" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" @blur="phoneRegisterFun" v-model="phoneTextRegister" />
                <div class="tips1Register" v-if="isShowPhoneR">请输入正确的手机号码</div>
            </div>
            <div class="input1Register">
                <div class="inputText1Register">密码</div>
                <input type="password" placeholder="请输入您的密码" v-model="passwordTextRegister" @blur="passwordRegisterFun">
                <div class="tips1Register" v-if="isShowPasswordRegister">请输入6～18位数的密码</div>
            </div>
            <div class="input1Register">
                <div class="inputText1Register">确认密码</div>
                <input type="password" placeholder="请输入确认密码" v-model="passwordTextR" @blur="passwordRFun">
                <div class="tips1Register" v-if="isShowPasswordR">请输入正确的确认密码</div>
            </div>
            <div class="input1Register">
                <div class="inputText1Register">验证码</div>
                <input type="text" placeholder="请输入验证码" v-model.number="codeTextRegister" @blur="codeRegisterFun" maxlength="4">
                <div class="codeRegister" @click="codeButtonRegisterFun" v-if="isShowObtainCodeR">获取验证码</div>
                <div class="countdownRegister" v-else>{{countdownRegister}}s后获取
                </div>
                <div class="tips1Register" v-if="isShowCodeR">请输入正确的验证码</div>
            </div>
        </div>
        <div class="registerB" @click="registerButtonFun">注册</div>
        <!-- 立即登录 -->
        <router-link class="bottom" to="/" tag="div">
            立即登录
        </router-link>
    </div>
</template>
<script>
    import myhead from '../components/myhead'
    export default {
        name: 'register',
        components: { myhead },
        data() {
            return {
                // 输入框错误提示
                isShowPhoneR: false,
                isShowPasswordRegister: false,
                isShowPasswordR: false,
                isShowCodeR: false,
                // 输入框内容
                phoneTextRegister: '',
                passwordTextRegister: '',
                passwordTextR: '',
                codeTextRegister: '',
                codeTextRegisterO: '',
                // 倒计时
                countdownRegister: 60,
                // 获取验证码是否隐藏
                isShowObtainCodeR: true
            }
        },
        methods: {
            //失去光标账号错误提示
            phoneRegisterFun() {
                var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
                if (!myreg.test(this.phoneTextRegister)) {
                    this.isShowPhoneR = true
                } else {
                    this.isShowPhoneR = false
                }
            },
            // 失去光标密码错误提示
            passwordRegisterFun() {
                if (this.passwordTextRegister.length < 6) {
                    this.isShowPasswordRegister = true
                } else if (this.passwordTextRegister.length > 18) {
                    this.isShowPasswordRegister = true
                } else {
                    this.isShowPasswordRegister = false
                }
                if (
                    this.passwordTextR.length !== 0 &&
                    this.passwordTextRegister !== this.passwordTextR
                ) {
                    this.isShowPasswordR = true
                } else {
                    this.isShowPasswordR = false
                }
            },
            // 失去光标确认密码错误提示
            passwordRFun() {
                if (this.passwordTextR.length < 6) {
                    this.isShowPasswordR = true
                } else if (this.passwordTextR.length > 18) {
                    this.isShowPasswordR = true
                } else if (this.passwordTextR !== this.passwordTextRegister) {
                    this.isShowPasswordR = true
                } else {
                    this.isShowPasswordR = false
                }
            },
            // 失去光标验证码错误提示
            codeRegisterFun() {
                if (this.codeTextRegister !== this.codeTextRegisterO) {
                    this.isShowCodeR = true
                } else if (this.codeTextRegister.length === 0) {
                    this.isShowCodeR = true
                } else {
                    this.isShowCodeR = false
                }
            },
            // 点击获取验证码
            codeButtonRegisterFun() {
                this.phoneRegisterFun()
                if (this.isShowPhoneR === false) {
                    this.isShowObtainCodeR = false
                    this.isShowCodeR = false
                    this.codeTextRegisterO = this.rand(1000, 9999)
                    this.codeTextRegister = this.codeTextRegisterO
                    this.countdownRegister = 60
                    this.countdownFun()
                } else {
                    this.isShowPhoneR = true
                }
            },
            // 生成一个4位数的随机数方法
            rand(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            // 60秒倒计时
            countdownFun() {
                let timeClock = setInterval(() => {
                    this.countdownRegister--
                    if (this.countdownRegister === 0) {
                        clearInterval(timeClock)
                        this.isShowObtainCodeR = true
                    }
                }, 1000)
            },
            // 注册按钮
            registerButtonFun() {
                this.phoneRegisterFun()
                this.passwordRegisterFun()
                this.passwordRFun()
                this.codeRegisterFun()
            }
        }
    }
</script>
<style>
    /* 顶部 */
    .top {
        position: relative;
    }
    .topImg {
        width: 100%;
    }
    .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        top: 28px;
        left: 28px;
    }
    .logo {
        width: 19px;
        height: 29px;
        margin-right: 10px;
    }
    .titleText {
        color: #fff;
    }
    .titleText2 {
        font-size: 12px;
    }
    /* 登录标题 */
    .registerText {
        text-align: center;
        font-size: 22px;
        margin-top: 24px;
        margin-bottom: 38px;
    }
    /* 输入框 */
    .contentRegister {
        width: 320px;
        margin: 0 auto;
    }
    input {
        flex: 1;
        border: none;
    }
    .input1Register {
        position: relative;
        display: flex;
        align-items: center;
        height: 55px;
        margin-top: 10px;
        border-bottom: 1px #e6e6e6 solid;
    }
    .inputText1Register {
        color: #666;
        width: 60px;
        padding-right: 10px;
    }
    /* 错误提示语 */
    .tips1Register {
        position: absolute;
        top: 56px;
        left: 76px;
        color: #ee6869;
        font-size: 12px;
    }
    .codeRegister {
        width: 62px;
        color: #3399ff;
        font-size: 12px;
    }
    /* 倒计时 */
    .countdownRegister {
        color: #999;
        font-size: 12px;
    }
    /* 登录按钮 */
    .registerB {
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
