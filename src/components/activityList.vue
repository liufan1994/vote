<template>
    <div @click="allFun">
        <!-- 活动列表 -->
        <div class="activityList" v-for="(activityList,index) in activityLists" :key="index">
            <!-- 间隔 -->
            <interval/>
            <!-- 列表头部-一个以上的子活动 -->
            <div class="listHead" v-if="activityList.listSubs.length>1">
                <!-- 头部左边 -->
                <div class="headLeft">
                    <div class="leftStyle"></div>
                    <div class="leftName" v-if="myIndex2!==index">{{activityList.headName}}</div>
                    <input ref="inputDom" type="text" id="headInput" :placeholder="activityList.headName" v-else @blur="leftInputFun(index)" v-model="leftInput">
                    <img class="leftImg" src="../assets/edit.png" @click.stop="editFun(index)" v-if="myIndex2!==index">
                </div>
                <!-- 头部右边 -->
                <div class="headRight">
                    <!-- 新增子活动按钮 -->
                    <div class="rightButton" @click="rightButtonFun">新增子活动</div>
                    <!-- 设置 -->
                    <div class="rightSetup" @click.stop="rightSetupFun(index)">
                        <div class="setupName">设置</div>
                        <div class="iconfont icon-xiala"></div>
                        <!-- 头部设置按钮下拉框 -->
                        <dropDownBox v-if="myIndex===index" :dropDownBoxs="dropDownBoxs" />
                    </div>
                </div>
            </div>
            <!-- 列表头部-一个子活动 -->
            <div class="listHead2" v-else>
                <div class="rightButton" @click="rightButtonFun">新增子活动</div>
            </div>
            <!-- 子活动列表 -->
            <div class="listSub" v-for="(listSub,index2) in activityList.listSubs" :key="index2">
                <!-- 子活动名字 -->
                <div class="subName">
                    <div class="nameTitle">{{listSub.nameTitle}}</div>
                    <div class="nameState" v-if="listSub.nameState===nameState2">{{listSub.nameState}}</div>
                    <div class="nameState2" v-else>{{listSub.nameState}}</div>
                </div>
                <!-- 子活动数据 -->
                <div class="subData">
                    <!-- 子活动数据左边 -->
                    <div class="dataLeft">
                        <!-- 左边票数 -->
                        <div class="leftData">
                            <img class="leftImg1" src="../assets/votes.png">
                            <div class="leftNumber">{{listSub.votesNumber}}</div>
                        </div>
                        <!-- 左边人数 -->
                        <div class="leftData">
                            <img class="leftImg2" src="../assets/number.png">
                            <div class="leftNumber">{{listSub.numberNumber}}</div>
                        </div>
                        <!-- 左边浏览量 -->
                        <div class="leftData">
                            <img class="leftImg3" src="../assets/visits.png">
                            <div class="leftNumber">{{listSub.visitsNumber}}</div>
                        </div>
                    </div>
                    <!-- 子活动数据右边 -->
                    <div class="dataRight">
                        <div class="dataRightSetup dataRightSetup2" @click.stop="dataRightSetupFun(index,index2)">
                            <div class="dataSetupText">设置</div>
                            <div class="iconfont icon-xiala"></div>
                            <!-- 子活动数据右边-设置按钮下拉框 -->
                            <dropDownBox v-if="myIndex3===index&&myIndex4===index2" :dropDownBoxs="dropDownBoxs2" @dropDownBox-fun="dropDownBoxFun2" />
                        </div>
                        <div class="dataRightSetup" @click.stop="dataRightSetup2Fun(index,index2)">
                            <div class="dataSetupText">操作</div>
                            <div class="iconfont icon-xiala"></div>
                            <!-- 子活动数据右边-操作按钮下拉框 -->
                            <dropDownBox v-if="myIndex3===index&&myIndex5===index2" :dropDownBoxs="dropDownBoxs3" @dropDownBox-fun="dropDownBoxFun" />
                        </div>
                    </div>
                </div>
                <!-- 子活动时间 -->
                <div class="subTime">
                    <div class="voteTime">投票时间：{{listSub.voteTime}}</div>
                    <div class="foundTime">创建时间：{{listSub.foundTime}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import interval from '../components/interval'
    import dropDownBox from '../components/dropDownBox'

    export default {
        name: 'activityList',
        components: {
            interval,
            dropDownBox
        },
        props: {
            activityLists: {
                type: Array, // Object
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                // 子活动默认状态
                nameState2: '进行中',
                leftInput: '',
                // 点击头部编辑专题图标，默认下标为-1
                myIndex2: -1,
                // 点击头部设置按钮，默认下标为-1
                myIndex: -1,
                // 头部设置-下拉框列表内容
                dropDownBoxs: [
                    { dropDownBox: '专题网址' },
                    { dropDownBox: '删除' }
                ],
                // 点击子活动设置按钮，默认专题下标为-1
                myIndex3: -1,
                // 点击子活动设置按钮，默认子活动下标为-1
                myIndex4: -1,
                // 点击子活动操作按钮，默认子活动下标为-1
                myIndex5: -1,
                // 子活动设置-下拉框列表内容
                dropDownBoxs2: [
                    { dropDownBox: '活动设置' },
                    { dropDownBox: '选手管理' },
                    { dropDownBox: '页面设置' },
                    { dropDownBox: '投票设置' },
                    { dropDownBox: '评论管理' },
                    { dropDownBox: '票数排行' }
                ],
                // 子活动操作-下拉框列表内容
                dropDownBoxs3: [
                    { dropDownBox: '操作记录' },
                    { dropDownBox: '活动网址' },
                    { dropDownBox: '复制活动' },
                    { dropDownBox: '清空' },
                    { dropDownBox: '删除' }
                ]
            }
        },
        methods: {
            // 点击整个页面
            allFun() {
                this.myIndex = -1
                this.myIndex3 = -1
            },
            // 点击编辑图标
            editFun(index) {
                this.myIndex = -1
                this.myIndex3 = -1
                if (this.myIndex2 === index) {
                    if (this.myIndex2 === -1) {
                        this.myIndex2 = index
                    } else {
                        this.myIndex2 = -1
                    }
                } else {
                    this.myIndex2 = index
                }
                this.$nextTick(() => {
                    this.$refs.inputDom[0].focus()
                })
            },
            // 点击头部设置按钮
            rightSetupFun(index) {
                // 如果myIndex和index相等，表示点击的是同一个下标
                // console.log(index)
                this.myIndex2 = -1
                this.myIndex3 = -1
                if (this.myIndex === index) {
                    if (this.myIndex === -1) {
                        this.myIndex = index
                    } else {
                        this.myIndex = -1
                    }
                } else {
                    this.myIndex = index
                }
            },
            // 头部专题输入框失去光标
            leftInputFun(index) {
                this.myIndex2 = -1
                // console.log(this.leftInput)
                if (this.leftInput.length > 0) {
                    this.activityLists[index].headName = this.leftInput
                }
            },
            // 新增子活动按钮
            rightButtonFun() {
                this.$router.push('/createEvent')
            },
            // 点击子活动设置按钮
            dataRightSetupFun(index, index2) {
                // console.log(index)
                this.myIndex = -1
                this.myIndex2 = -1
                this.myIndex5 = -1
                if (this.myIndex3 === index && this.myIndex4 === index2) {
                    if (this.myIndex3 === -1 && this.myIndex4 === -1) {
                        this.myIndex3 = index
                        this.myIndex4 = index2
                    } else {
                        this.myIndex3 = -1
                        this.myIndex4 = -1
                    }
                } else {
                    this.myIndex3 = index
                    this.myIndex4 = index2
                }
            },
            // 点击子活动操作按钮
            dataRightSetup2Fun(index, index2) {
                this.myIndex = -1
                this.myIndex2 = -1
                this.myIndex4 = -1
                if (this.myIndex3 === index && this.myIndex5 === index2) {
                    if (this.myIndex3 === -1 && this.myIndex5 === -1) {
                        this.myIndex3 = index
                        this.myIndex5 = index2
                    } else {
                        this.myIndex3 = -1
                        this.myIndex5 = -1
                    }
                } else {
                    this.myIndex3 = index
                    this.myIndex5 = index2
                }
            },
            // 点击子活动操作下拉框
            dropDownBoxFun(index) {
                // console.log(index)
                if (index === 0) {
                    this.$router.push('/operationRecord')
                }
            },
            // 点击子活动设置下拉框
            dropDownBoxFun2(index) {
                if (index === 4) {
                    this.$router.push('/comment')
                }
                if (index === 5) {
                    this.$router.push('/voteRanking')
                }
            }
        }
    }
</script>
<style >
    input {
        outline: none;
    }
    /* 活动列表 */
    .activityList {
        background-color: #fff;
    }
    /* 活动头部 */
    .listHead,
    .listHead2 {
        width: 100%;
        box-sizing: border-box;
        height: 56px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f5f9fc;
        padding: 0 14px;
    }
    .listHead2 {
        justify-content: flex-end;
    }
    /* 头部左边 */
    .headLeft {
        display: flex;
        align-items: center;
    }
    /* 左边样式 */
    .leftStyle {
        width: 2px;
        height: 14px;
        background-color: #3399ff;
        margin-right: 7px;
    }
    /* 左边名字 */
    .leftName {
        color: #666;
        margin-right: 14px;
    }
    /* 左边图标 */
    .leftImg {
        width: 13px;
        height: 13px;
    }
    /* 头部右边 */
    .headRight {
        display: flex;
        align-items: center;
    }
    /* 右边新增子活动按钮 */
    .rightButton {
        width: 83px;
        height: 31px;
        color: #3399ff;
        border: #3399ff 1px solid;
        border-radius: 3px;
        text-align: center;
        line-height: 31px;
    }
    /* 右边设置 */
    .rightSetup {
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    /* 设置名字 */
    .setupName {
        font-size: 12px;
        margin-right: 7px;
    }
    /* 子活动列表 */
    .listSub {
        margin: 25px 14px 0;
        border-bottom: #f0f0f0 1px solid;
    }
    /* 子活动名字 */
    .subName {
        display: flex;
    }
    /* 子活动名字标题 */
    .nameTitle {
        /* flex: 1; */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 290px;
    }
    /* 子活动状态 */
    .nameState,
    .nameState2 {
        font-size: 12px;
        margin-left: 14px;
        color: #29cc7a;
    }
    .nameState2 {
        color: #999;
    }
    /* 子活动数据 */
    .subData {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0 16px;
    }
    /* 子活动数据左边 */
    .dataLeft {
        display: flex;
        /* align-items: center; */
    }
    /* 左边-票数 */
    .leftData {
        display: flex;
        align-items: center;
        margin-right: 14px;
    }
    /* 票数-图标 */
    .leftImg1 {
        width: 14px;
        height: 11px;
        margin-right: 6px;
    }
    /* 人数-图标 */
    .leftImg2 {
        width: 11px;
        height: 13px;
        margin-right: 7px;
    }
    /* 浏览量-图标 */
    .leftImg3 {
        width: 16px;
        height: 11px;
        margin-right: 7px;
    }
    /* 子活动数据右边 */
    .dataRight {
        display: flex;
    }
    /* 数据右边1 */
    .dataRightSetup {
        position: relative;
        display: flex;
        align-items: center;
    }
    .dataRightSetup2 {
        margin-right: 14px;
    }
    /* 数据右边1-文字 */
    .dataSetupText {
        font-size: 12px;
        margin-right: 6px;
    }
    /* 活动时间 */
    .subTime {
        font-size: 10px;
        color: #999;
        margin-bottom: 20px;
    }
</style>
