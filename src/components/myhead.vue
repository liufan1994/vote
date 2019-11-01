<template>
    <!-- 顶部样式 -->
    <div class="top">
        <img class="topImg" src="../assets/top.png">
        <div class="title">
            <img class="logo" src="../assets/logo.png">
            <div class="titleText">
                <div class="titleText1">领跑评选</div>
                <div class="titleText2">微信投票活动制作平台</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'myhead'
    }
</script>
<style >
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
</style>
