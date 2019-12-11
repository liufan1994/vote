<template>
    <!-- 评论管理tab -->
    <div class="commentTab">
        <div class="commentTabName" :class="{commentTabName2:myIndex===index}" v-for="(TabName,index) in TabNames" :key="index" @click="commentTabNameFun(index)">{{TabName.commentTabName}}</div>
    </div>
</template>
<script>
    export default {
        name: 'commentTab',
        data() {
            return {
                myIndex: 0,
                TabNames: [
                    {
                        commentTabName: '全部评论'
                    },
                    {
                        commentTabName: '待审核'
                    },
                    {
                        commentTabName: '已通过'
                    },
                    {
                        commentTabName: '已拒绝'
                    }
                ]
            }
        },
        methods: {
            commentTabNameFun(index) {
                this.myIndex = index
                if (index === 0) {
                    this.$emit('commentTab0-fun')
                }
                if (index === 1) {
                    this.$emit('commentTab1-fun', '待审核')
                }
                if (index === 2) {
                    this.$emit('commentTab2-fun', '通过')
                }
                if (index === 3) {
                    this.$emit('commentTab3-fun', '拒绝')
                }
            }
        }
    }
</script>
<style scoped>
    .commentTab {
        height: 42px;
        display: flex;
        justify-content: space-around;
        border-bottom: #e6e6e6 1px solid;
        background-color: #f5f5f5;
    }
    .commentTabName {
        width: 25%;
        height: 42px;
        text-align: center;
        line-height: 42px;
    }
    .commentTabName2 {
        color: #3399ff;
        border-bottom: #3399ff 2px solid;
    }
</style>
