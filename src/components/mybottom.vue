<template>
    <div>这是刘帆要显示父组件给我的东西：{{mybottom}}</div>
</template>
<script>
    export default {
        name: 'mybottom',
        props: {
            mybottom: {
                type: [Number, String, Boolean],
                default: 123
            }
        }
    }
</script>
<style>
</style>
