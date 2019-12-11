<template>
    <!-- 导航栏 -->
    <div class="navigation">
        <!-- 按钮 -->
        <div class="navigationButton" v-for="(button,index) in buttons" :key="button.id" @click="buttonFun(button,index)">
            <!-- 图片 -->
            <img class="buttonImg" :src="require('../assets/'+button.buttonImg+'.png')" v-if="myIndex!==index">
            <img class="buttonImg" :src="require('../assets/'+button.buttonImg2+'.png')" v-else>
            <!-- 文字 -->
            <div class="buttonName" :class="{buttonName2:myIndex===index}">{{button.buttonName}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'navigation',
        data() {
            return {
                myIndex: 0,
                buttons: [
                    {
                        buttonImg: 'home',
                        buttonImg2: 'home-x',
                        buttonName: '首页',
                        myRouter: '/navigationBar/home'
                    },
                    {
                        buttonImg: 'management',
                        buttonImg2: 'management-x',
                        buttonName: '管理活动',
                        myRouter: '/navigationBar/management'
                    },
                    {
                        buttonImg: 'extension',
                        buttonImg2: 'extension-x',
                        buttonName: '推广中心',
                        myRouter: '/navigationBar/extend'
                    },
                    {
                        buttonImg: 'my',
                        buttonImg2: 'my-x',
                        buttonName: '我的',
                        myRouter: '/navigationBar/my'
                    }
                ]
            }
        },
        methods: {
            buttonFun(button, index) {
                this.myIndex = index
                this.$router.push(button.myRouter)
                window.scrollTo(0, 0)
            }
        },
        mounted() {
            if (this.$route.path === '/navigationBar/my') {
                this.myIndex = 3
            }
            if (this.$route.path === '/navigationBar/extend') {
                this.myIndex = 2
            }
            if (this.$route.path === '/navigationBar/management') {
                this.myIndex = 1
            }
            if (this.$route.path === '/navigationBar/home') {
                this.myIndex = 0
            }
        }
    }
</script>
<style>
    /* 导航栏 */
    .navigation {
        width: 100%;
        height: 69px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        box-shadow: 0px -2px 7px 0px rgba(51, 153, 255, 0.1);
        z-index: 100;
    }
    /* 导航栏按钮 */
    .navigationButton {
        text-align: center;
    }
    /* 按钮图标 */
    .buttonImg {
        width: 21px;
        height: 21px;
    }
    /* 按钮名字 */
    .buttonName {
        color: #999;
        font-size: 12px;
    }
    .buttonName2 {
        color: #3399ff;
    }
</style>
