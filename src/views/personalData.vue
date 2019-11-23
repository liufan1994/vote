<template>
    <div class="personalData">
        <!-- 头部 -->
        <div class="personalDataHead">
            <div class="DataHeadImg">
                <div class="DataHeadImgName">头像</div>
                <img class="DataHeadImgImg" src="../assets/img6.jpg">
            </div>
            <div class="DataHeadList" v-for="DataHeadList in DataHeadLists" :key="DataHeadList.id">
                <div>{{DataHeadList.DataHeadListName}}</div>
                <div class="DataHeadListRight">
                    <div class="DataHeadRightText">{{DataHeadList.DataHeadRightText}}</div>
                    <div class="iconfont icon-you"></div>
                </div>
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 操作列表 -->
        <div class="personalDataOperate">
            <div class="personalDataOperate2" v-for="operate in operates" :key="operate.id">
                <div class="operateName">{{operate.operateName}}</div>
                <div class="iconfont icon-you"></div>
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
    </div>
</template>
<script>
    import interval from '../components/interval'

    export default {
        name: 'personalData',
        components: {
            interval
        },
        data() {
            return {
                // 头部列表
                DataHeadLists: [
                    {
                        DataHeadListName: '昵称',
                        DataHeadRightText: '会飞的猪1994'
                    },
                    {
                        DataHeadListName: '提现账户',
                        DataHeadRightText: '去设置'
                    },
                    {
                        DataHeadListName: '微信绑定',
                        DataHeadRightText: '未绑定'
                    },
                    {
                        DataHeadListName: '公众号授权',
                        DataHeadRightText: '未授权'
                    }
                ],
                operates: [
                    {
                        operateName: '会员升级'
                    },
                    {
                        operateName: '修改密码'
                    },
                    {
                        operateName: '退出'
                    }
                ]
            }
        }
    }
</script>
<style>
    /* 头部 */
    .personalDataHead {
        background-color: #fff;
        padding: 0 14px;
    }
    /* 头像 */
    .DataHeadImg {
        height: 125px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: #e6e6e6 1px solid;
    }
    .DataHeadImgImg {
        width: 63px;
        height: 63px;
        border-radius: 50%;
        object-fit: cover;
    }
    /* 头部列表 */
    .DataHeadList {
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: #e6e6e6 1px solid;
    }
    .DataHeadListRight {
        display: flex;
        align-items: center;
        color: #999;
    }
    .icon-you {
        font-size: 12px;
        margin-left: 14px;
    }
    /* 操作列表 */
    .personalDataOperate {
        background-color: #fff;
        padding: 0 14px;
    }
    .personalDataOperate2 {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: #e6e6e6 1px solid;
    }
</style>
