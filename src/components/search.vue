<template>
    <!-- 搜索 -->
    <div class="search">
        <input class="searchInput" type="text" :placeholder="myPlaceholder">
        <img class="searchImg" src="../assets/search.png">
    </div>
</template>
<script>
    export default {
        name: 'search',
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
<style>
    .search {
        flex: 1;
        position: relative;
        height: 80px;
        padding: 0 14px;
        background-color: #f5f5f5;
    }
    .searchInput {
        width: 100%;
        height: 42px;
        color: #333;
        font-size: 14px;
        box-sizing: border-box;
        outline: none;
        border: #ccc 1px solid;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        border-radius: 21px;
        padding: 0 14px;
        margin: 16px 0;
        background-color: #f5f5f5;
    }
    .searchImg {
        position: absolute;
        top: 28px;
        right: 30px;
        width: 17px;
        height: 19px;
    }
</style>
