<template>
    <!-- 提交工单 -->
    <div class="submissionWork">
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
            <div>
                <div class="submissionWorkName">工单内容</div>
                <textarea class="submissionWorkTextarea" placeholder="请输入工单内容" />
            </div>
        </div>
        <!-- 取消 -->
        <bigButtonCancel/>
        <!-- 确定 -->
        <bigButtonDetermine/>
    </div>
</template>
<script>
    import workManagementTab from '../../components/workManagementTab'
    import interval from '../../components/interval'
    import bigButtonCancel from '../../components/bigButtonCancel'
    import bigButtonDetermine from '../../components/bigButtonDetermine'

    export default {
        name: 'submissionWork',
        components: {
            workManagementTab,
            interval,
            bigButtonCancel,
            bigButtonDetermine
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
        margin: 10px 0 28px;
    }
    .submissionWorkTextarea {
        margin-top: 10px;
    }
</style>
