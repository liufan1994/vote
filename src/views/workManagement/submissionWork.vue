<template>
    <!-- 提交工单 -->
    <div class="submissionWork">
        <!-- 标头 -->
        <myTitle titleName="工单管理" />
        <!-- 工单管理tab -->
        <workManagementTab :myIndex="1" />
        <!-- 间隔 -->
        <interval/>
        <!-- 提交工单内容 -->
        <div class="submissionWorkContent">
            <div>
                <div class="submissionWorkName">工单标题</div>
                <input class="submissionWorkInput" type="text" placeholder="请输入工单标题">
            </div>
        </div>
    </div>
</template>
<script>
    import myTitle from '../../components/myTitle'
    import workManagementTab from '../../components/workManagementTab'
    import interval from '../../components/interval'

    export default {
        name: 'submissionWork',
        components: {
            myTitle,
            workManagementTab,
            interval
        }
    }
</script>
<style scoped>
    .submissionWorkContent {
        background-color: #fff;
        padding: 28px 14px;
    }
    .submissionWorkName {
        color: #666;
    }
    .submissionWorkInput {
        height: 42px;
        width: 100%;
        border: #ccc 1px solid;
        padding: 0 14px;
    }
</style>
