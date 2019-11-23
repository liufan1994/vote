<template>
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
        props: {
            myIndex: {
                path: [String, Number],
                default: 0
            }
        },
        data() {
            return {
                buttonName2: true,
                buttons: [
                    {
                        buttonImg: 'home',
                        buttonImg2: 'home-x',
                        buttonName: '首页',
                        myRouter: '/home'
                    },
                    {
                        buttonImg: 'management',
                        buttonImg2: 'management-x',
                        buttonName: '管理活动',
                        myRouter: '/management'
                    },
                    {
                        buttonImg: 'extension',
                        buttonImg2: 'extension-x',
                        buttonName: '推广中心',
                        myRouter: '/extend'
                    },
                    {
                        buttonImg: 'my',
                        buttonImg2: 'my-x',
                        buttonName: '我的',
                        myRouter: '/my'
                    }
                ]
            }
        },
        methods: {
            buttonFun(button) {
                this.$router.push(button.myRouter)
                window.scrollTo(0, 0)
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
