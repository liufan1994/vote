<template>
    <!-- 大按钮-确定 -->
    <div class="bigButtonDetermine">
        <div class="bigButtonDetermine2">{{determine}}</div>
    </div>
</template>
<script>
    export default {
        name: 'bigButtonDetermine',
        props: {
            determine: {
                type: [String, Number],
                default: '确定'
            }
        }
    }
</script>
<style scoped>
    .bigButtonDetermine2 {
        height: 42px;
        background-color: #3399ff;
        text-align: center;
        line-height: 42px;
        margin-left: 14px;
        margin-right: 14px;
        margin-top: 40px;
        margin-bottom: 80px;
        border-radius: 7px;
        color: #fff;
    }
</style>
