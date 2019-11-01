<template>
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
    </div>
</template>
<script>
    import myhead from './components/myhead'
    export default {
        name: 'reset',
        components: {
            myhead
        }
    }
</script>
<style>
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
        background-color: #e6e6e6;
        margin-left: 3px;
    }
</style>
