<template>
    <div class="foundTab">
        <div class="foundTabText" :class="{foundTabText2:myIndex===index}" v-for="(text,index) in texts" :key="text.id" @click="textFun(text,index)">{{text.foundTabText}}</div>
    </div>
</template>
<script>
    export default {
        name: 'foundTab',
        data() {
            return {
                myIndex: 0,
                texts: [
                    {
                        foundTabText: '全部'
                    },
                    {
                        foundTabText: '进行中'
                    },
                    {
                        foundTabText: '已结束'
                    }
                ]
            }
        },
        methods: {
            textFun(text, index) {
                this.myIndex = index
                if (index === 1) {
                    this.$emit('my-state', '进行中')
                }
            }
        }
    }
</script>
<style>
    .foundTab {
        height: 38px;
        display: flex;
        justify-content: space-around;
        border-bottom: #f0f0f0 1px solid;
        line-height: 38px;
        background-color: #f0f0f0;
    }
    .foundTabText {
        width: 33%;
        height: 38px;
        text-align: center;
    }
    .foundTabText2 {
        color: #3399ff;
        border-bottom: #3399ff 2px solid;
    }
</style>
