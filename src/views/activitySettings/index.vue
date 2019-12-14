<template>
    <!-- 活动设置-公共页面 -->
    <div class="index" @click="indexFun">
        <!-- 标头 -->
        <myTitle titleName="活动设置" />
        <!-- 大标题切换-活动设置 -->
        <div class="switch">
            <div class="switchLeft" @click.stop="switchLeftFun">
                <div class="switchName">{{switchName}}</div>
                <div class="iconfont icon-xiala"></div>
                <dropDownBox class="dropDownBox" :dropDownBoxs="dropDownBoxs" v-if="isShowDropDownBox" @dropDownBox-fun="dropDownBoxFun" />
            </div>
            <div class="switchRight">预览</div>
        </div>
        <!-- tab切换 -->
        <div class="tab">
            <div :class="{tabName2:myIndex===index}" class="tabName" v-for="(tabName,index) in tabNames" :key="index" @click="tabNameFun(index)">{{tabName.tabName}}</div>
        </div>
        <router-view/>
    </div>
</template>
<script>
    import myTitle from '../../components/myTitle'
    import dropDownBox from '../../components/dropDownBox'

    export default {
        name: 'index',
        components: {
            myTitle,
            dropDownBox
        },
        data() {
            return {
                // 大标题
                switchName: '活动设置',
                // 下拉框是否隐藏
                isShowDropDownBox: false,
                // 下拉框列表
                dropDownBoxs: [
                    {
                        dropDownBox: '活动设置'
                    },
                    {
                        dropDownBox: '选手管理'
                    },
                    {
                        dropDownBox: '页面设置'
                    },
                    {
                        dropDownBox: '投票设置'
                    }
                ],
                // 点击tab，默认下标为0
                myIndex: 0,
                // tab列表
                tabNames: [
                    {
                        tabName: '基本设置',
                        myRouter: '/activitySettings/basicSetup'
                    },
                    {
                        tabName: '轮播图设置',
                        myRouter: '/activitySettings/carouselSetup'
                    },
                    {
                        tabName: '页面设置'
                    },
                    {
                        tabName: '活动介绍'
                    },
                    {
                        tabName: '活动动态'
                    }
                ]
            }
        },
        methods: {
            // 点击整个页面
            indexFun() {
                this.isShowDropDownBox = false
            },
            // 点击头部大标题
            switchLeftFun() {
                this.isShowDropDownBox = !this.isShowDropDownBox
            },
            // 点击大标题下拉框
            dropDownBoxFun(index) {
                this.switchName = this.dropDownBoxs[index].dropDownBox
            },
            // 点击tab
            tabNameFun(index) {
                this.myIndex = index
                this.$router.push(this.tabNames[index].myRouter)
            }
        }
    }
</script>
<style scoped>
    /* 大标题切换-活动设置 */
    .switch {
        display: flex;
        justify-content: space-between;
        background-color: #f5f5f5;
        padding: 16px 14px;
    }
    .switchLeft {
        position: relative;
        display: flex;
        align-items: center;
    }
    .icon-xiala {
        font-size: 20px;
    }
    /* 下拉框 */
    .dropDownBox {
        position: absolute;
        left: 0;
    }
    .switchRight {
        color: #3399ff;
    }
    /* tab切换 */
    .tab {
        height: 52px;
        display: flex;
        align-items: center;
        background-color: #fff;
        padding-left: 14px;
        border-bottom: #e6e6e6 1px solid;
        overflow: auto;
    }
    .tabName {
        flex: none;
        margin-right: 20px;
    }
    .tabName2 {
        color: #3399ff;
    }
</style>
