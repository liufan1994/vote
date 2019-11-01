<template>
    <div id="app">
        <!-- 登陆页面 -->
        <signIn v-if="isSignIn" @register-fun="registerFun" @forget-fun="forgetFun" />
        <!-- 注册页面 -->
        <register v-if="isRegister" @signIn-fun="signInFun" />
        <!-- 忘记密码 -->
        <forget v-if="isForget" @forget-signInFun="forgetSignInFun" />
    </div>
</template>

<script>
    import signIn from './signIn.vue'
    import register from './register.vue'
    import forget from './forget.vue'

    export default {
        name: 'app',
        components: {
            signIn,
            register,
            forget
        },
        data() {
            return {
                isSignIn: true,
                isRegister: false,
                isForget: false
            }
        },
        methods: {
            // 登陆页面点击快速注册
            registerFun() {
                this.isRegister = true
                this.isSignIn = false
                this.isForget = false
            },
            // 注册页面点击立即登录
            signInFun() {
                this.isSignIn = true
                this.isRegister = false
                this.isForget = false
            },
            // 登录页面点击忘记密码
            forgetFun() {
                this.isForget = true
                this.isSignIn = false
                this.isRegister = false
            },
            // 忘记密码页面点击立即登录
            forgetSignInFun() {
                this.isSignIn = true
                this.isRegister = false
                this.isForget = false
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size: 14px;
    }
    * {
        margin: 0;
    }
    input::-webkit-input-placeholder {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #e5e5e5;
        font-size: 14px;
    }
    input {
        outline: none;
    }
</style>
