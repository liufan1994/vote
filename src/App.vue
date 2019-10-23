<template>
    <div id="app">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <signIn />
    </div>
</template>

<script>
    import signIn from './signIn.vue'

    export default {
        name: 'app',
        components: {
            signIn
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
        outline: none;
    }
</style>
