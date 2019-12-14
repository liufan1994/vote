<template>
    <!-- 轮播图设置 -->
    <div class="carouselSetup">
        <!-- 技术支持 -->
        <div class="carouselSetup1">
            <!-- 技术支持-标题 -->
            <div class="carouselSetupName">技术支持</div>
            <div class="carouselSetupDan" v-for="(carouselDan,index) in carouselDans" :key="index" @click="carouselDanFun(index)">
                <div :class="{carouselSetupIcon2:myIndex===index}" class="carouselSetupIcon"></div>
                <div class="carouselSetupText">{{carouselDan.carouselSetupText}}</div>
            </div>
            <!-- 当为自定义时 -->
            <div class="carouselDanZi" v-if="myIndex===2">
                <div class="carouselDanZi2" v-for="(carouselDanZi,index2) in carouselDanZis" :key="index2">
                    <div class="carouselDanZiText">{{carouselDanZi.carouselDanZiText}}</div>
                    <myInput class="carouselDanZiInput" :myPlaceholder="carouselDanZi.carouselDanZiInput" />
                </div>
            </div>
        </div>
        <!-- 底部菜单 -->
        <div class="carouselSetup2">
            <div class="carouselSetupName">底部菜单</div>
            <div class="iconfont icon-wenhao carouselSetupName"></div>
            <!-- 复选框 -->
            <div class="carouselSetupFu">
                <van-checkbox class="carouselSetupFu1" v-model="checked" shape="square" checked-color="#3399ff" v-for="(checkedFor,index3) in checkedFors" :key="index3">{{checkedFor.vanCheckbox}}</van-checkbox>
            </div>
        </div>
    </div>
</template>
<script>
    import myInput from '../../components/myInput'

    export default {
        name: 'carouselSetup',
        components: {
            myInput
        },
        data() {
            return {
                // 技术支持-单选默认下标为0
                myIndex: 0,
                // 技术支持-单选
                carouselDans: [
                    {
                        carouselSetupText: '显示'
                    },
                    {
                        carouselSetupText: '隐藏'
                    },
                    {
                        carouselSetupText: '自定义'
                    }
                ],
                carouselDanZis: [
                    {
                        carouselDanZiText: '技术支持文本',
                        carouselDanZiInput: '请输入技术支持文本'
                    },
                    {
                        carouselDanZiText: '文本链接',
                        carouselDanZiInput: '请输入文本链接'
                    }
                ],
                // 底部菜单-复选框默认下标为0
                myIndex2: 0,
                checked: false,
                checkedFors: [
                    {
                        vanCheckbox: '介绍'
                    },
                    {
                        vanCheckbox: '排行'
                    },
                    {
                        vanCheckbox: '投票'
                    },
                    {
                        vanCheckbox: '报名'
                    },
                    {
                        vanCheckbox: '动态'
                    },
                    {
                        vanCheckbox: '自定义'
                    }
                ]
            }
        },
        methods: {
            carouselDanFun(index) {
                this.myIndex = index
            }
        }
    }
</script>
<style scoped>
    /* 轮播图设置 */
    .carouselSetup {
        background-color: #fff;
        padding: 0 14px;
    }
    /* 技术支持 */
    .carouselSetup1 {
        display: flex;
        align-items: center;
        position: relative;
        margin: 30px 0;
    }
    /* 技术支持-标题 */
    .carouselSetupName {
        color: #999;
    }
    .carouselSetupDan {
        display: flex;
        align-items: center;
        margin-left: 28px;
    }
    .carouselSetupIcon {
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        border: #ccc 1px solid;
        border-radius: 50%;
        margin-right: 6px;
    }
    .carouselSetupIcon2 {
        border: #29cc7a 6px solid;
    }
    /* 当为自定义时 */
    .carouselDanZi {
        position: absolute;
        top: 20px;
        right: 0;
    }
    .carouselDanZi2 {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .carouselDanZiText {
        width: 84px;
        margin-right: 14px;
        text-align: right;
    }
    .carouselDanZiInput {
        width: 238px;
    }
    /* 底部菜单 */
    .carouselSetup2 {
        display: flex;
        /* align-items: center; */
    }
    .carouselSetupName {
        flex: none;
    }
    .icon-wenhao {
        margin: 0 10px 0 2px;
    }
    .carouselSetupFu {
        display: flex;
        flex-wrap: wrap;
    }
    .carouselSetupFu1 {
        margin-right: 26px;
        margin-bottom: 20px;
    }
</style>
