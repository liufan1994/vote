<template>
    <div id="app">
        <!-- <router-link to="/"></router-link> -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size: 14px;
    }
    * {
        margin: 0;
    }
    input::-webkit-input-placeholder {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #e5e5e5;
        font-size: 14px;
    }
    input {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        outline: none;
        font-size: 14px;
        color: #333;
    }
</style>
