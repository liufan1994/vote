<template>
    <!-- 我的输入框 -->
    <div class="myInputA">
        <input class="myInput" type="text" :placeholder="myPlaceholder">
    </div>
</template>
<script>
    export default {
        name: 'myInput',
        props: {
            myPlaceholder: {
                path: [String, Number],
                default: '请输入'
            }
        }
    }
</script>
<style scoped>
    .myInputA {
        flex: 1;
    }
    .myInput::-webkit-input-placeholder {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #e5e5e5;
        font-size: 14px;
    }
    .myInput {
        width: 100%;
        /* box-sizing: border-box; */
        height: 42px;
        box-sizing: border-box;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        outline: none;
        font-size: 14px;
        color: #333;
        border: #ccc 1px solid;
        border-radius: 7px;
        padding: 0 14px;
    }
</style>
