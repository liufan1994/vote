<template>
    <!-- 客服 -->
    <div class="service">
        <div class="serviceButton" :class="{serviceButton2:isShowService}">客服</div>
    </div>
</template>
<script>
    export default {
        name: 'service',
        props: {
            isShowService: {
                path: [Boolean, Number],
                default: false
            }
        },
        data() {
            return {}
        }
    }
</script>
<style>
    .serviceButton {
        width: 47px;
        height: 47px;
        position: fixed;
        bottom: 83px;
        right: 14px;
        background-color: #3399ff;
        color: #fff;
        text-align: center;
        line-height: 47px;
        box-shadow: 0px 2px 7px 0px rgba(51, 153, 255, 0.5);
        border-radius: 50%;
        z-index: 100;
    }
    .serviceButton2 {
        position: fixed;
        bottom: 14px;
    }
</style>
