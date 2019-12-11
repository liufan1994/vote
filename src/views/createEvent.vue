<template>
    <!-- 创建活动 -->
    <div class="createEvent">
        <myTitle titleName="创建活动" />
        <div class="createEventContent">
            <!-- 活动名称 -->
            <div class="createEventInput">
                <div class="createEventName">活动名称</div>
                <textarea class="createEventTextarea" placeholder="请输入活动名称（50字内）"></textarea>
            </div>
            <!-- 开始时间 -->
            <div class="createEventInput">
                <div class="createEventName">开始时间</div>
                <myInput myPlaceholder="投票开始时间" />
            </div>
            <!-- 结束时间 -->
            <div class="createEventInput">
                <div class="createEventName">结束时间</div>
                <myInput myPlaceholder="投票结束时间" />
            </div>
        </div>
        <!-- 创建活动按钮 -->
        <bigButtonDetermine determine="创建活动" />
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'
    import myInput from '../components/myInput'
    import bigButtonDetermine from '../components/bigButtonDetermine'

    export default {
        name: 'createEvent',
        components: {
            myTitle,
            myInput,
            bigButtonDetermine
        }
    }
</script>
<style scoped>
    .createEventContent {
        padding: 24px 14px;
        background-color: #fff;
    }
    .createEventInput {
        display: flex;
        margin-top: 22px;
    }
    .createEventName {
        color: #999;
        margin-top: 10px;
        margin-right: 14px;
        flex: none;
    }
    .createEventTextarea {
        height: 76px;
    }
</style>
