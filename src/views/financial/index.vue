<template>
    <!-- 财务明细-公共页面 -->
    <div>
        <!-- 标头 -->
        <myTitle titleName="财务明细" />
        <!-- 搜索 -->
        <search/>
        <!-- 财务明细Tab -->
        <financialTab />
        <!-- 间隔 -->
        <interval/>
        <router-view/>
    </div>
</template>
<script>
    import myTitle from '../../components/myTitle'
    import search from '../../components/search'
    import financialTab from '../../components/financialTab'
    import interval from '../../components/interval'

    export default {
        name: 'index',
        components: {
            myTitle,
            search,
            financialTab,
            interval
        }
    }
</script>
<style scoped>
</style>
