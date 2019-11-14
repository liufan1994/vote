<template>
    <div class="app">
        <!-- 顶部样式 -->
        <myhead/>
        <div class="signin">登录</div>
        <!-- 输入框 -->
        <div class="content">
            <div class="input1">
                <div class="inputText1">账号
                </div>
                <input type="text" placeholder="请输入您的账号" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')" @blur="phoneFun" v-model="phoneText" />
                <div class="tips1" v-if="isShowPhone">请输入正确的账号</div>
            </div>
            <div class="input1">
                <div class="inputText1">密码</div>
                <input type="password" placeholder="请输入您的密码" v-model="passwordText" @blur="passwordFun">
                <div class="tips1" v-if="isShowPassword">请输入正确的密码</div>
            </div>
            <div class="input1">
                <div class="inputText1">验证码</div>
                <input type="text" placeholder="请输入验证码" v-model.number="codeText" @blur="codeFun" maxlength="4">
                <div class="code" @click="codeButtonFun" v-if="isShowObtainCode">获取验证码</div>
                <div class="countdown" v-else>{{countdown}}s后获取
                </div>
                <div class="tips1" v-if="isShowCode">请输入正确的验证码</div>
            </div>
        </div>
        <div class="signinB" @click="signinButtonFun">登录</div>
        <!-- 忘记密码/注册 -->
        <div class="bottom">
            <router-link class="bottomText" to="/forget" tag="div">忘记密码</router-link>
            <div class="bottomLine"></div>
            <router-link class="bottomText" to="/register" tag="div">快速注册</router-link>
        </div>
    </div>
</template>
<script>
    import myhead from '../components/myhead'
    export default {
        name: 'app',
        components: {
            myhead
        },
        data() {
            return {
                // 输入框错误提示
                isShowPhone: false,
                isShowPassword: false,
                isShowCode: false,
                // 输入框内容
                phoneText: '',
                passwordText: '',
                codeText: '',
                codeTextO: '',
                // 倒计时
                countdown: 60,
                // 获取验证码是否隐藏
                isShowObtainCode: true
            }
        },
        methods: {
            //账号输入框失去光标
            phoneFun() {
                var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
                if (!myreg.test(this.phoneText)) {
                    this.isShowPhone = true
                } else {
                    this.isShowPhone = false
                }
            },
            // 密码输入框失去光标
            passwordFun() {
                if (this.passwordText.length < 6) {
                    this.isShowPassword = true
                } else if (this.passwordText.length > 18) {
                    this.isShowPassword = true
                } else {
                    this.isShowPassword = false
                }
            },
            // 验证码输入框失去光标
            codeFun() {
                if (this.codeText !== this.codeTextO) {
                    this.isShowCode = true
                } else if (this.codeText.length === 0) {
                    this.isShowCode = true
                } else {
                    this.isShowCode = false
                }
            },
            // 点击获取验证码
            codeButtonFun() {
                // 账号
                this.phoneFun()
                // 如果账号的错误提示不出现，那么获取验证码字体消失，验证码出现，开始倒计时
                if (this.isShowPhone === false) {
                    this.isShowObtainCode = false
                    this.isShowCode = false
                    this.codeTextO = this.rand(1000, 9999)
                    this.codeText = this.codeTextO
                    this.countdown = 60
                    this.countdownFun()
                } else {
                    this.isShowPhone = true
                }
            },
            // 生成一个4位数的随机数方法
            rand(min, max) {
                return Math.floor(Math.random() * (max - min)) + min
            },
            // 倒计时
            countdownFun() {
                let timeClock = setInterval(() => {
                    this.countdown--
                    if (this.countdown === 0) {
                        clearInterval(timeClock)
                        this.isShowObtainCode = true
                    }
                }, 1000)
            },
            // 登录按钮
            signinButtonFun() {
                this.phoneFun()
                this.passwordFun()
                this.codeFun()
                if (
                    this.isShowPhone === false &&
                    this.isShowPassword === false &&
                    this.isShowCode === false
                ) {
                    this.$router.push('/home')
                }
            }
        }
    }
</script>
<style>
    /* 登录标题 */
    .signin {
        text-align: center;
        font-size: 22px;
        margin-top: 24px;
        margin-bottom: 38px;
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
    .input1 {
        position: relative;
        display: flex;
        align-items: center;
        height: 55px;
        margin-top: 20px;
        border-bottom: 1px #e6e6e6 solid;
    }
    .inputText1 {
        color: #666;
        width: 44px;
        /* margin-right: 16px; */
        padding-right: 16px;
    }
    /* 错误提示语 */
    .tips1 {
        position: absolute;
        top: 56px;
        left: 60px;
        color: #ee6869;
        font-size: 12px;
    }
    .code {
        color: #3399ff;
        font-size: 12px;
    }
    /* 倒计时 */
    .countdown {
        color: #999;
        font-size: 12px;
    }
    /* 登录按钮 */
    .signinB {
        width: 333px;
        height: 42px;
        color: #fff;
        background-color: #3399ff;
        text-align: center;
        line-height: 42px;
        margin: 80px auto 20px;
        border-radius: 7px;
    }
    /* 忘记密码/注册 */
    .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 20px;
    }
    .bottomText {
        color: #666;
    }
    .bottomLine {
        width: 1px;
        height: 10px;
        background-color: #ccc;
        margin: 0 20px;
    }
</style>
