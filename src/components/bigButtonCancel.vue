<template>
    <!-- 大按钮-取消 -->
    <div class="bigButtonCancel">{{cancel}}</div>
</template>
<script>
    export default {
        name: 'bigButtonCancel',
        props: {
            cancel: {
                type: [String, Number],
                default: '取消'
            }
        }
    }
</script>
<style scoped>
    .bigButtonCancel {
        height: 42px;
        background-color: transparent;
        text-align: center;
        line-height: 42px;
        margin-left: 14px;
        margin-right: 14px;
        margin-top: 20px;
        border: #ccc 1px solid;
        border-radius: 7px;
        color: #666;
    }
</style>
