<template>
    <!-- 标头 -->
    <div class="myTitle">
        <div class="iconfont icon-xiangzuo"></div>
        <div class="titleName">{{titleName}}</div>
    </div>
</template>
<script>
    export default {
        name: 'myTitle',
        props: {
            titleName: {
                type: [String, Number],
                default: ''
            }
        }
    }
</script>
<style scoped>
    .myTitle {
        height: 50px;
        position: relative;
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
    }
    .icon-xiangzuo {
        margin-left: 14px;
    }
    .titleName {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
    }
</style>
