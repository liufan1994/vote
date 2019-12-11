<template>
    <!-- 票数排名 -->
    <div class="voteRanking">
        <!-- 标头 -->
        <myTitle titleName="票数排名" />
        <!-- 活动名称 -->
        <div class="voteRankingName">
            <div class="voteRankingLeft">
                <span class="voteRankingText"></span>
                <span class="voteRankingText2">票数排名</span>
            </div>
            <div class="voteRankingRight">
                <div></div>
                <div class="iconfont icon-xiala"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'

    export default {
        name: 'voteRanking',
        components: {
            myTitle
        }
    }
</script>
<style scoped>
</style>
