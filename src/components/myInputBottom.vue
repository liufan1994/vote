<template>
    <!-- 我的输入框只有下边框线 -->
    <div class="myInputBottomA">
        <input class="myInputBottom" type="text" :placeholder="myPlaceholder">
    </div>
</template>
<script>
    export default {
        name: 'myInputBottom',
        props: {
            myPlaceholder: {
                path: [String, Number],
                default: '请输入'
            }
        },
        data() {
            return {}
        }
    }
</script>
<style scoped>
    .myInputBottomA {
        flex: 1;
        /* width: 100%; */
        /* box-sizing: border-box; */
        border-bottom: #ccc 1px solid;
    }
    .myInputBottom {
        height: 55px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        outline: none;
        font-size: 14px;
        color: #333;
        border: none;
        border-radius: 7px;
    }
</style>
