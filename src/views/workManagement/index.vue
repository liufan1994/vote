<template>
    <!-- 工单管理-公共页面 -->
    <div class="workManagement">
        <!-- 标头 -->
        <myTitle titleName="工单管理" />
        <router-view/>
    </div>
</template>
<script>
    import myTitle from '../../components/myTitle'

    export default {
        name: 'workManagement',
        components: { myTitle }
    }
</script>
<style scoped>
</style>
