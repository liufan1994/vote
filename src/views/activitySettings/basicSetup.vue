<template>
    <!-- 基本设置 -->
    <div class="basicSetup">
        <!-- 活动名称 -->
        <div class="basicSetupA">
            <!-- 标题 -->
            <div class="basicSetupName">活动名称</div>
            <myInput myPlaceholder="请输入活动名称" />
        </div>
        <!-- 投票时间 -->
        <div class="basicSetupA">
            <!-- 标题 -->
            <div class="basicSetupName">投票时间</div>
            <myInput myPlaceholder="投票开始时间" /> ~
            <myInput myPlaceholder="投票结束时间" />
        </div>
        <!-- 活动公告 -->
        <div :class="{basicSetupA2:checked===true}" class="basicSetupA">
            <!-- 标题 -->
            <div class="basicSetupName">活动公告</div>
            <van-switch v-model="checked" size="24px" active-color="#29CC7A" />
            <textarea class="basicSetupTextarea" placeholder="请输入活动公告" v-if="checked===true"></textarea>
        </div>
        <!-- 关闭活动 -->
        <div class="basicSetupA" :class="{basicSetupA2:checked2===true}">
            <!-- 标题 -->
            <div class="basicSetupName">关闭活动</div>
            <van-switch v-model="checked2" size="24px" active-color="#29CC7A" />
            <div class="iconfont icon-wenhao"></div>
            <textarea class="basicSetupTextarea" placeholder="请输入关闭活动后提示" v-if="checked2===true"></textarea>
        </div>
        <!-- 虚拟总票数 -->
        <div class="basicSetupA">
            <!-- 标题 -->
            <div class="basicSetupName">虚拟总票数</div>
            <myInput myPlaceholder="请输入虚拟总票数" />
            <div class="iconfont icon-wenhao"></div>
        </div>
        <!-- 虚拟访问量 -->
        <div class="basicSetupA">
            <!-- 标题 -->
            <div class="basicSetupName">虚拟访问量</div>
            <myInput myPlaceholder="请输入虚拟访问量" />
            <div class="iconfont icon-wenhao"></div>
        </div>
    </div>
</template>
<script>
    import myInput from '../../components/myInput'

    export default {
        name: 'basicSetup',
        components: {
            myInput
        },
        data() {
            return {
                // 活动公告-开关
                checked: false,
                // 关闭活动-开关
                checked2: false
            }
        }
    }
</script>
<style scoped>
    /* 基本设置 */
    .basicSetup {
        background-color: #fff;
        padding: 0 14px;
    }
    /* 活动名称 */
    .basicSetupA {
        height: 42px;
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 20px;
        color: #999;
    }
    .basicSetupA2 {
        margin-bottom: 82px;
    }
    /* 标题 */
    .basicSetupName {
        flex: none;
        width: 70px;
        text-align: right;
        color: #999;
        margin-right: 14px;
    }
    /* 活动公告-多行输入框 */
    .basicSetupTextarea {
        width: 263px;
        height: 66px;
        position: absolute;
        top: 40px;
        left: 84px;
    }
    /* 问号 */
    .icon-wenhao {
        font-size: 20px;
        margin-left: 14px;
    }
</style>
