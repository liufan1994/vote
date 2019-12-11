<template>
    <div id="app">
        <!-- <router-link to="/"></router-link> -->
        <router-view></router-view>
        <!-- 客服 -->
        <service :isShowService="isShowService" />
    </div>
</template>

<script>
    import service from './components/service'

    export default {
        name: 'app',
        components: { service },
        data() {
            return {
                isShowService: false
            }
        },
        watch: {
            $route(newVal) {
                this.isShowService = newVal.path.indexOf('/navigationBar') === -1
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-size: 14px;
        /* background-color: #f5f5f5; */
    }
    * {
        margin: 0;
    }
    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #e5e5e5;
        font-size: 14px;
    }
    textarea {
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        outline: none;
        font-size: 14px;
        color: #333;
        border: #ccc 1px solid;
        border-radius: 7px;
        padding: 10px 14px;
    }
    .serviceButton2 {
        position: fixed;
        bottom: 14px;
    }
    img {
        object-fit: cover;
    }
</style>
