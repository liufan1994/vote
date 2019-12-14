<template>
    <!-- 票数排名 -->
    <div class="voteRanking">
        <!-- 标头 -->
        <myTitle titleName="票数排名" />
        <!-- 活动名称 -->
        <div class="voteRankingName">
            <div class="voteRankingLeft">
                <!-- 活动名称 -->
                <span class="voteRankingText">{{voteRankingText}}</span>
                <span class="voteRankingText2">票数排名</span>
            </div>
            <div class="voteRankingRight">
                <!-- 选择分组 -->
                <div>{{voteRankingGrouping}}</div>
                <div class="iconfont icon-xiala"></div>
            </div>
        </div>
        <!-- 排名列表 -->
        <div class="voteRankingList" v-for="(voteRankingList,index) in voteRankingLists" :key="index">
            <!-- 排名 -->
            <div class="voteRankingNumber">{{index+1}}</div>
            <!-- 头像 -->
            <img class="voteRankingImg" :src="require('../assets/'+voteRankingList.voteRankingImg)">
            <!-- 内容 -->
            <div class="voteRankingContent">
                <!-- 内容顶部 -->
                <div class="voteRankingTop">
                    <div class="voteRankingTopLeft">
                        <!-- 选手号数 -->
                        <div class="voteRankingTopNumber">{{voteRankingList.voteRankingTopNumber}}号</div>
                        <!-- 选手名称 -->
                        <div class="voteRankingTopName">{{voteRankingList.voteRankingTopName}}</div>
                    </div>
                    <!-- 分组 -->
                    <div class="voteRankingTopRight">{{voteRankingList.voteRankingTopGrouping}}</div>
                </div>
                <!-- 内容底部 -->
                <div class="voteRankingBottom">
                    <!-- 票数 -->
                    <div class="voteRankingBottomNumber1">票数:{{voteRankingList.voteRankingVotes}}</div>
                    <div class="voteRankingBottomNumber2">
                        <!-- 浏览量 -->
                        <span class="voteRankingBottomNumber3">浏览量:{{voteRankingList.voteRankingSee}}</span>
                        <!-- 评论数 -->
                        <span>评论数:{{voteRankingList.voteRankingComment}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部间隔 -->
        <intervalD/>
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'
    import intervalD from '../components/intervalD'

    export default {
        name: 'voteRanking',
        components: {
            myTitle,
            intervalD
        },
        data() {
            return {
                voteRankingText: '2019年成都市最萌宝宝评选活动名称特别长特别长',
                voteRankingGrouping: '全部分组',
                voteRankingLists: [
                    {
                        // 头像
                        voteRankingImg: 'img5.jpg',
                        // 选手号数
                        voteRankingTopNumber: '001',
                        // 选手名称
                        voteRankingTopName: '选手名称',
                        // 分组
                        voteRankingTopGrouping: '默认分组',
                        // 票数
                        voteRankingVotes: '54352',
                        // 浏览量
                        voteRankingSee: '876498',
                        // 评论数
                        voteRankingComment: '4668'
                    },
                    {
                        // 头像
                        voteRankingImg: 'img3.jpg',
                        // 选手号数
                        voteRankingTopNumber: '013',
                        // 选手名称
                        voteRankingTopName: '选手名称',
                        // 分组
                        voteRankingTopGrouping: '默认分组',
                        // 票数
                        voteRankingVotes: '54352',
                        // 浏览量
                        voteRankingSee: '876498',
                        // 评论数
                        voteRankingComment: '4668'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    /* 活动名称 */
    .voteRankingName {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 14px;
        background-color: #f5f5f5;
    }
    .voteRankingLeft {
        width: 254px;
        margin-right: 20px;
        text-align: justify;
    }
    .voteRankingText2 {
        color: #3399ff;
    }
    .voteRankingRight {
        flex: none;
        display: flex;
        align-items: center;
    }
    .icon-xiala {
        font-size: 20px;
    }
    /* 排名列表 */
    .voteRankingList {
        display: flex;
        align-items: center;
        padding: 28px 14px;
        background-color: #fff;
        border-bottom: #f5f5f5 1px solid;
    }
    /* 排名 */
    .voteRankingNumber {
        width: 28px;
        height: 28px;
        flex: none;
        background-color: #3399ff;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 28px;
        border-radius: 50%;
    }
    /* 头像 */
    .voteRankingImg {
        flex: none;
        width: 56px;
        height: 56px;
        background-color: #f5f5f5;
        border-radius: 7px;
        margin: 0 14px;
    }
    /* 内容 */
    .voteRankingContent {
        width: 100%;
    }
    /* 内容顶部 */
    .voteRankingTop {
        display: flex;
        justify-content: space-between;
    }
    /* 内容顶部-左边 */
    .voteRankingTopLeft {
        display: flex;
        align-items: center;
    }
    .voteRankingTopNumber {
        color: #999;
        font-size: 12px;
        margin-right: 14px;
    }
    /* 内容顶部-右边 */
    .voteRankingTopRight {
        color: #666;
    }
    /* 内容底部 */
    .voteRankingBottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
    }
    .voteRankingBottomNumber1 {
        color: #666;
        font-size: 12px;
    }
    .voteRankingBottomNumber2 {
        font-size: 10px;
        color: #999;
    }
    .voteRankingBottomNumber3 {
        margin-right: 10px;
    }
</style>
