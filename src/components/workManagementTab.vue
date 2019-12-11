<template>
    <!-- 工单管理tab -->
    <div class="workManagementTab">
        <div class="workName" :class="{workName2:myIndex===index}" v-for="(workName,index) in workNames" :key="index" @click="workNameFun(workName,index)">{{workName.workName}}</div>
    </div>
</template>
<script>
    export default {
        name: 'workManagementTab',
        props: {
            myIndex: {
                type: [String, Number],
                default: 0
            }
        },
        data() {
            return {
                // 工单管理tab
                workNames: [
                    {
                        workName: '我的工单',
                        myRouter: '/workManagement/myWork'
                    },
                    {
                        workName: '提交工单',
                        myRouter: '/workManagement/submissionWork'
                    }
                ]
            }
        },
        methods: {
            workNameFun(workName) {
                this.$router.push(workName.myRouter)
            }
        }
    }
</script>
<style scoped>
    .workManagementTab {
        height: 42px;
        display: flex;
        justify-content: space-around;
        background-color: #f5f5f5;
        border-bottom: #e6e6e6 1px solid;
    }
    .workName {
        width: 50%;
        height: 42px;
        text-align: center;
        line-height: 42px;
    }
    .workName2 {
        color: #3399ff;
        border-bottom: #3399ff 2px solid;
    }
</style>
