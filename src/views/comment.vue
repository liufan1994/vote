<template>
    <!-- 评论管理 -->
    <div class="comment" @click="commentFun">
        <!-- 标头 -->
        <myTitle titleName="评论管理" />
        <!-- 搜索框 -->
        <search myPlaceholder="请输入用户名/订单号" />
        <!-- tab -->
        <commentTab @commentTab0-fun="commentTab0Fun" @commentTab1-fun="commentTab1Fun" @commentTab2-fun="commentTab2Fun" @commentTab3-fun="commentTab3Fun" />
        <!-- 批量操作 -->
        <div class="Batch">
            <!-- 复选框 -->
            <div @click="fuxuankuangFun">
                <div class="iconfont icon-fuxuankuang1" v-if="isShowBatch"></div>
                <div class="iconfont icon-fuxuankuang" v-else></div>
            </div>
            <!-- 操作按钮 -->
            <div class="BatchName">
                <div>操作</div>
                <div class="iconfont icon-xiala"></div>
            </div>
        </div>
        <!-- 评论管理-列表 -->
        <div class="commentList" v-for="(commentList,index2) in commentLists2" :key="index2">
            <!-- 复选框 -->
            <div @click="fuxuankuangFun2(index2)">
                <div class="iconfont icon-fuxuankuang1" v-if="myIndex2.includes(index2)"></div>
                <div class="iconfont icon-fuxuankuang" v-else></div>
            </div>
            <!-- 头像 -->
            <img class="commentListHead" :src="require('../assets/'+commentList.commentListHead)">
            <!-- 内容 -->
            <div class="commentListContent">
                <div class="commentListTop">
                    <!-- 评论用户名称 -->
                    <div class="commentListName">{{commentList.commentListName}}</div>
                    <!-- 被评论选手 -->
                    <div class="commentListNumber">选手{{commentList.commentListNumber}}</div>
                </div>
                <div class="commentListCenter">
                    <!-- 活动名称 -->
                    <div class="commentListHuod">{{commentList.commentListHuod}}</div>
                    <!-- 评论状态 -->
                    <div class="commentListState" @click.stop="commentListStateFun(index2)">
                        <div class="commentListStateText" :class="[commentListStateText2===commentList.commentListStateText?'commentListStateText2':(commentListStateText3===commentList.commentListStateText?'commentListStateText3':'')]">{{commentList.commentListStateText}}</div>
                        <div class="iconfont icon-xiala"></div>
                        <!-- 下拉框 -->
                        <dropDownBox :dropDownBoxs="dropDownBoxs" v-if="myIndex===index2" @dropDownBox-fun="index=>dropDownBoxFun(index,index2)" />
                    </div>
                </div>
                <!-- 评论内容-超出展开 -->
                <div :data-content="commentList.commentListComment" :class="{textPackUp:commentList.commentListComment.length>38&&!textOpen}" class="top-wrapper">
                    <div class="context">
                        {{ commentList.commentListComment }}
                    </div>
                    <span v-if="commentList.commentListComment.length>38" class="more" @click.stop="textOpen=!textOpen">{{ textOpen?'收起':'展开' }}</span>
                </div>
            </div>
            <!-- 删除 -->
            <div class="delete">删除</div>
        </div>
        <!-- 底部间隔 -->
        <intervalD/>
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'
    import search from '../components/search'
    import commentTab from '../components/commentTab'
    import dropDownBox from '../components/dropDownBox'
    import intervalD from '../components/intervalD'

    export default {
        name: 'comment',
        components: {
            myTitle,
            search,
            commentTab,
            dropDownBox,
            intervalD
        },
        data() {
            return {
                // 批量操作复选框
                isShowBatch: false,
                // 复选框选中的数组
                myIndex2: [],
                // 评论内容是否展开
                textOpen: false,
                // 状态默认下标值
                myIndex: -1,
                // 状态下拉框
                dropDownBoxs: [
                    { dropDownBox: '待审核' },
                    { dropDownBox: '通过' },
                    { dropDownBox: '拒绝' }
                ],
                // 评论状态-
                commentListStateText2: '通过',
                commentListStateText3: '拒绝',
                commentLists: [
                    {
                        // 头像
                        commentListHead: 'img8.jpg',
                        // 评论用户名称
                        commentListName: '会飞的猪1994',
                        // 被评论选手
                        commentListNumber: '001',
                        // 活动名称
                        commentListHuod: '某某活动某某活动某某',
                        // 评论状态
                        commentListStateText: '待审核',
                        // 评论内容
                        commentListComment:
                            '评论内容评论内容评论内容评，论内容评论内容评论评论内容评，论内容评论内容评论内容评，论内容评论内容论内容评论内容评论评论内容评，论内容评论内容评论内容评，论内容评论内容'
                    },
                    {
                        // 头像
                        commentListHead: 'img5.jpg',
                        // 评论用户名称
                        commentListName: '会飞的猪1994',
                        // 被评论选手
                        commentListNumber: '012',
                        // 活动名称
                        commentListHuod: '某某活动某某活动某某',
                        // 评论状态
                        commentListStateText: '通过',
                        // 评论内容
                        commentListComment: '评论内容评论内容评论内容评论内容'
                    },
                    {
                        // 头像
                        commentListHead: 'img3.jpg',
                        // 评论用户名称
                        commentListName: '会飞的猪1994',
                        // 被评论选手
                        commentListNumber: '044',
                        // 活动名称
                        commentListHuod: '某某活动某某活动',
                        // 评论状态
                        commentListStateText: '拒绝',
                        // 评论内容
                        commentListComment: '评论内容评论内容评论内容评论内容'
                    },
                    {
                        // 头像
                        commentListHead: 'img5.jpg',
                        // 评论用户名称
                        commentListName: '会飞的猪1994',
                        // 被评论选手
                        commentListNumber: '012',
                        // 活动名称
                        commentListHuod: '某某活动某某活动某某',
                        // 评论状态
                        commentListStateText: '通过',
                        // 评论内容
                        commentListComment: '评论内容评论内容评论内容评论内容'
                    }
                ],
                commentLists2: []
            }
        },
        methods: {
            // 点击整个页面
            commentFun() {
                this.myIndex = -1
            },
            // 点击tab下标为0时
            commentTab0Fun() {
                const commentLists = JSON.parse(JSON.stringify(this.commentLists))
                this.commentLists2 = commentLists
            },
            // 点击tab下标为1时
            commentTab1Fun(tab1) {
                this.commentLists2 = []
                this.commentLists.map(commentList => {
                    if (commentList.commentListStateText === tab1) {
                        this.commentLists2.push(commentList)
                        // console.log(commentList)
                    }
                })
            },
            // 点击tab下标为2时
            commentTab2Fun(tab2) {
                this.commentLists2 = []
                this.commentLists.map(commentList => {
                    if (commentList.commentListStateText === tab2) {
                        this.commentLists2.push(commentList)
                    }
                })
            },
            // 点击tab下标为3时
            commentTab3Fun(tab3) {
                this.commentLists2 = []
                this.commentLists.map(commentList => {
                    if (commentList.commentListStateText === tab3) {
                        this.commentLists2.push(commentList)
                    }
                })
            },
            // 点击批量操作-复选框-未选中
            fuxuankuangFun() {
                this.isShowBatch = !this.isShowBatch
                if (this.isShowBatch === true) {
                    this.commentLists.map((commentList, index) => {
                        this.myIndex2.push(index)
                    })
                } else {
                    this.myIndex2 = []
                }
            },
            // 点击列表-复选框-未选中
            fuxuankuangFun2(index2) {
                let _myIndex2 = this.myIndex2.findIndex(number => {
                    return number === index2
                })
                // console.log(_myIndex2)
                if (_myIndex2 === -1) {
                    this.myIndex2.push(index2)
                } else {
                    this.myIndex2.splice(_myIndex2, 1)
                }
                if (this.myIndex2.length === this.commentLists2.length) {
                    this.isShowBatch = true
                } else {
                    this.isShowBatch = false
                }
            },
            // 点击状态
            commentListStateFun(index2) {
                if (this.myIndex === index2) {
                    if (this.myIndex === -1) {
                        this.myIndex = index2
                    } else {
                        this.myIndex = -1
                    }
                } else {
                    this.myIndex = index2
                }
            },
            // 点击下拉框选项
            dropDownBoxFun(index, index2) {
                console.log(index)
                console.log(index2)
                this.commentLists2[index2].commentListStateText = this.dropDownBoxs[
                    index
                ].dropDownBox
            }
        },
        computed: {},
        mounted() {
            const _commentLists = JSON.parse(JSON.stringify(this.commentLists))
            this.commentLists2 = _commentLists
        }
    }
</script>
<style scoped>
    /* 批量操作 */
    .Batch {
        height: 60px;
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
        padding-left: 14px;
    }
    /* 复选框 */
    .icon-fuxuankuang,
    .icon-fuxuankuang1 {
        margin-right: 10px;
        font-size: 26px;
        color: #ccc;
    }
    .icon-fuxuankuang1 {
        color: #3399ff;
    }
    /* 操作按钮 */
    .BatchName {
        display: flex;
        align-items: center;
    }
    .icon-xiala {
        font-size: 20px;
        color: #666;
    }
    /* 评论管理-列表 */
    .commentList {
        position: relative;
        display: flex;
        align-items: center;
        padding: 24px 14px;
        background-color: #fff;
        border-bottom: #f5f5f5 1px solid;
        /* z-index: 10; */
    }
    .commentListHead {
        width: 49px;
        height: 49px;
        flex: none;
        border-radius: 50%;
        margin-right: 14px;
    }
    /* 内容 */
    .commentListContent {
        width: 100%;
    }
    /* 内容-顶部 */
    .commentListTop {
        display: flex;
        align-items: center;
    }
    .commentListNumber {
        font-size: 12px;
        color: #999;
        margin-left: 10px;
    }
    .commentListCenter {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #666;
        margin-bottom: 12px;
    }
    .commentListHuod {
        font-size: 12px;
    }
    .commentListState {
        position: relative;
        display: flex;
        align-items: center;
    }
    .commentListStateText2 {
        color: #29cc7a;
    }
    .commentListStateText3 {
        color: #ee6869;
    }
    /* 评论内容 */
    .top-wrapper {
        position: relative;
        font-size: 10px;
        color: #999;
        line-height: 14px;
        overflow: hidden;
        word-break: break-all;
        text-align: justify;
    }
    .more {
        position: absolute;
        bottom: -1px;
        right: 0;
        z-index: 1;
        width: 30px;
        text-align: right;
    }
    .textPackUp::before {
        content: attr(data-content);
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        height: 14px;
        overflow: hidden;
        color: #999;
        background-color: #fff;
    }
    .textPackUp::after {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        content: attr(data-content);
        position: absolute;
        left: 0;
        top: 0;
        text-indent: -35px;
        padding-right: 35px;
        color: #999;
        background-color: #fff;
    }
    .textPackUp .context {
        height: 28px;
        text-align: justify;
    }
    /* 删除 */
    .delete {
        width: 56px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        color: #ee6869;
        background-color: #e6e6e6;
        z-index: -1;
    }
</style>
