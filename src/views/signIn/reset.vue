<template>
    <!-- 找回密码-重置密码 -->
    <div class="reset">
        <!-- 顶部 -->
        <myhead/>
        <!-- 标题 -->
        <div class="resetTitle">找回密码</div>
        <!-- 步骤 -->
        <div class="stepReset">
            <div class="steptitleReset">
                <div class="resetStepimg"></div>
                <div class="resetStepname">验证手机号</div>
            </div>
            <div class="line"></div>
            <div class="steptitleReset">
                <div class="resetStepimg"></div>
                <div class="resetStepname">重置密码</div>
            </div>
        </div>
        <!-- 输入框内容部分 -->
        <div class="resetContent">
            <!-- 新密码 -->
            <div class="input1Reset">
                <div class="inputText1Reset">新密码</div>
                <input type="password" placeholder="请输入您的密码" v-model="passwordTextReset" @blur="passwordResetFun">
                <div class="tips1Reset" v-if="isShowPasswordReset">请输入6～18位数的密码</div>
            </div>
            <!-- 确认密码 -->
            <div class="input1Reset">
                <div class="inputText1Reset">确认密码</div>
                <input type="password" placeholder="请输入确认密码" v-model="passwordTextR2" @blur="passwordR2Fun">
                <div class="tips1Reset" v-if="isShowPasswordR2">请输入正确的确认密码</div>
            </div>
        </div>
        <div class="resetButton" @click="resetButtonFun">确认</div>
        <!-- 立即登录 -->
        <router-link class="bottom" to="/" tag="div">
            立即登录
        </router-link>
    </div>
</template>
<script>
    import myhead from '../../components/myhead'
    export default {
        name: 'reset',
        components: {
            myhead
        },
        data() {
            return {
                // 新密码输入框内容
                passwordTextReset: '',
                // 确认密码输入框内容
                passwordTextR2: '',
                // 新密码错误提示语
                isShowPasswordReset: false,
                // 确认密码错误提示语
                isShowPasswordR2: false
            }
        },
        methods: {
            // 新密码输入框失去光标时
            passwordResetFun() {
                if (this.passwordTextReset.length < 6) {
                    this.isShowPasswordReset = true
                } else if (this.passwordTextReset.length > 18) {
                    this.isShowPasswordReset = true
                } else {
                    this.isShowPasswordReset = false
                }
                if (
                    this.passwordTextR2.length !== 0 &&
                    this.passwordTextReset !== this.passwordTextR2
                ) {
                    this.isShowPasswordR2 = true
                } else {
                    this.isShowPasswordR2 = false
                }
            },
            // 确认密码输入框失去光标时
            passwordR2Fun() {
                if (this.passwordTextR2.length < 6) {
                    this.isShowPasswordR2 = true
                } else if (this.passwordTextR2.length > 18) {
                    this.isShowPasswordR2 = true
                } else if (this.passwordTextR2 !== this.passwordTextReset) {
                    this.isShowPasswordR2 = true
                } else {
                    this.isShowPasswordR2 = false
                }
            },
            // 点击确认按钮
            resetButtonFun() {
                this.passwordResetFun()
                this.passwordR2Fun()
                if (
                    this.isShowPasswordReset === false &&
                    this.isShowPasswordR2 === false
                ) {
                    this.$router.push('/')
                }
            }
        }
    }
</script>
<style>
    .reset {
        background-color: #fff;
    }
    /* 登录标题 */
    .resetTitle {
        text-align: center;
        font-size: 22px;
        margin-top: 24px;
        margin-bottom: 38px;
    }
    /* 步骤 */
    .stepReset {
        position: relative;
        display: flex;
        justify-content: space-around;
        margin-bottom: 60px;
    }
    .resetStepimg {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 2px #3399ff solid;
        margin: 0 auto;
    }
    .resetStepname {
        color: #3399ff;
    }
    /* 线 */
    .line {
        position: absolute;
        top: 8px;
        width: 170px;
        height: 2px;
        background-color: #3399ff;
        margin-left: 3px;
    }
    /* 输入框内容部分 */
    .resetContent {
        width: 320px;
        margin: 0 auto;
    }
    input {
        flex: 1;
        border: none;
    }
    .input1Reset {
        position: relative;
        display: flex;
        align-items: center;
        height: 55px;
        margin-top: 20px;
        border-bottom: 1px #e6e6e6 solid;
    }
    .inputText1Reset {
        color: #666;
        width: 60px;
        padding-right: 10px;
    }
    /* 错误提示语 */
    .tips1Reset {
        position: absolute;
        top: 56px;
        left: 60px;
        color: #ee6869;
        font-size: 12px;
    }
    /* 确认按钮 */
    .resetButton {
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
