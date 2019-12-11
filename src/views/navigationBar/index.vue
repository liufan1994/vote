<template>
    <!-- 导航栏四页面-公共页面 -->
    <div>
        <router-view/>
        <!-- 底部间隔 -->
        <intervalD/>
        <!-- 导航栏 -->
        <navigation />
    </div>
</template>
<script>
    import intervalD from '../../components/intervalD'
    import navigation from '../../components/navigation'

    export default {
        name: '',
        components: {
            intervalD,
            navigation
        }
    }
</script>
<style scoped>
</style>
