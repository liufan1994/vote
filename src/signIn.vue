<template>
    <div class="app">
        <div class="top">
            <img class="topImg" src="./assets/top.png">
            <div class="title">
                <img class="logo" src="./assets/logo.png">
                <div class="titleText">
                    <div class="titleText1">{{name}}</div>
                    <div class="titleText2">{{name2}}</div>
                </div>
            </div>
        </div>
        <div class="signin">登录</div>
        <div class="content">
            <div class="input1">
                <div class="inputText1">{{inputText1}}</div>
                <input type="text" placeholder="请输入您的账号">
            </div>
            <div class="input1">
                <div class="inputText1">{{inputText2}}</div>
                <input type="text" placeholder="请输入您的密码">
            </div>
            <div class="input1">
                <div class="inputText1">{{inputText3}}</div>
                <input type="text" placeholder="请输入验证码">
                <div class="code">获取验证码</div>
            </div>
        </div>
        <div class="signinB">登录</div>
        <div class="bottom">
            <div class="bottomText">忘记密码</div>
            <div class="bottomLine"></div>
            <div class="bottomText">快速注册</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                name: '领跑评选',
                name2: '微信投票活动制作平台',
                inputText1: '账号',
                inputText2: '密码',
                inputText3: '验证码'
            }
        }
    }
</script>
<style>
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
    .signin {
        text-align: center;
        font-size: 22px;
        margin-top: 24px;
        margin-bottom: 38px;
    }
    .content {
        width: 320px;
        margin: 0 auto;
    }
    input {
        flex: 1;
    }
    .input1 {
        display: flex;
        align-items: center;
        height: 55px;
        margin-top: 10px;
        border-bottom: 1px #e6e6e6 solid;
    }
    .inputText1 {
        color: #666;
        width: 44px;
        margin-right: 16px;
    }
    .code {
        color: #3399ff;
    }
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
    .bottom {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
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
