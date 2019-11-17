<template>
    <div class="search">
        <input class="searchInput" type="text" placeholder="请输入专题/活动名称">
        <img class="searchImg" src="../assets/search.png">
    </div>
</template>
<script>
    export default {
        name: 'search',
        data() {
            return {}
        }
    }
</script>
<style>
    .search {
        flex: 1;
        position: relative;
        margin: 0 14px;
    }
    .searchInput {
        width: 100%;
        box-sizing: border-box;
        height: 42px;
        border: #ccc 1px solid;
        border-radius: 21px;
        padding: 0 14px;
        margin: 22px 0;
        background-color: #f0f0f0;
    }
    .searchImg {
        position: absolute;
        top: 35px;
        right: 16px;
        width: 17px;
        height: 19px;
    }
</style>
