<template>
    <div class="home">
        <!-- 头部卡片/数据统计内容 -->
        <div class="cardContent">
            <!-- 卡片 -->
            <div class="card">
                <!-- 个人信息 -->
                <div class="Personal">
                    <!-- 头像 -->
                    <img class="portraitImg" :src="require('../assets/'+portraitImg)">
                    <!-- 信息 -->
                    <div class="PersonalContent">
                        <!-- 账号 -->
                        <div class="account">
                            <div class="accountNumber">{{accountNumber}}</div>
                            <img class="editHome" src="../assets/edit2.png" @click="editHomeFun">
                        </div>
                        <!-- 绑定 -->
                        <div class="bind">
                            <!-- 微信 -->
                            <div class="weChat">
                                <img class="weChatImg" src="../assets/weChat.png">
                                <div class="weChatText">{{weChatText}}</div>
                            </div>
                            <!-- 公众号 -->
                            <div class="official">
                                <div class="officialTitle">公众号授权：</div>
                                <div class="officialText">{{officialText}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 会员 -->
                <div class="vip" @click="vipFun">
                    <!-- 会员等级 -->
                    <div class="vipGrade">
                        <img class="vipImg" src="../assets/vip.png">
                        <div class="vipText">{{vipText}}</div>
                    </div>
                    <!-- 会员到期时间 -->
                    <div class="vipTime">
                        <span class="vipTimeT">{{vipTimeT}}</span>
                        <span>到期</span>
                    </div>
                </div>
            </div>
            <!-- 数据 -->
            <div class="dataContent">
                <!-- 账户余额 -->
                <div class="dataBalance">
                    <div class="balanceNumber">¥{{accountBalance}}.00</div>
                    <div class="balanceTitle">
                        <span>账户余额</span>
                        <span class="balanceButton">充值></span>
                    </div>
                </div>
                <!-- 推广余额 -->
                <div class="dataBalance">
                    <div class="balanceNumber">¥{{extensionBalance}}.00</div>
                    <div class="balanceTitle">
                        <span>推广余额</span>
                        <span class="balanceButton">提现></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 统计 -->
        <div class="statistics">
            <div class="statisticsContent">
                <!-- 全部活动 -->
                <div class="whole">
                    <div class="statisticsNumber1">{{wholeNumber}}</div>
                    <div class="statisticsText">全部活动</div>
                </div>
                <!-- 进行中活动 -->
                <div class="whole">
                    <div class="statisticsNumber2">{{ongoingNumber}}</div>
                    <div class="statisticsText">进行中活动</div>
                </div>
                <!-- 待审核评论 -->
                <div class="whole">
                    <div class="statisticsNumber3">{{commentNumber}}</div>
                    <div class="statisticsText">待审核评论</div>
                </div>
            </div>
            <!-- 创建活动按钮 -->
            <div class="createButton">创建活动</div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 财务明细/工单管理 -->
        <div class="list">
            <div class="financial">
                <div class="financialLeft">
                    <img class="financialImg" src="../assets/finance.png">
                    <div>财务明细</div>
                </div>
                <img class="financialMore" src="../assets/more.png">
            </div>
            <div class="line"></div>
            <div class="financial">
                <div class="financialLeft">
                    <img class="financialImg" src="../assets/workOrder.png">
                    <div>工单管理</div>
                </div>
                <img class="financialMore" src="../assets/more.png">
            </div>
        </div>
        <!-- 间隔 -->
        <interval/>
        <!-- 最新公告 -->
        <div class="news">
            <div class="newsTitle">最新公告</div>
            <!-- 公告内容 -->
            <div class="newsContent">
                <!-- 公告内容1 -->
                <div class="newsContent1" v-for="news in newss" :key="news.id">
                    <div class="newsText">{{news.newsText}}</div>
                    <!-- 图片状态 -->
                    <div class="newsImg">
                        <img class="newsImg1" :class="{newsImg2:news.newsImgs.length>1}" v-for="newsImg in news.newsImgs" :key="newsImg.id" :src="require('../assets/'+newsImg.newsImgUrl)">
                    </div>
                    <!-- 发布公告时间 -->
                    <div class="newsTime">{{news.newsTime}}</div>
                </div>
            </div>
        </div>
        <!-- 底部间隔 -->
        <intervalD/>
        <!-- 客服 -->
        <service/>
        <!-- 导航栏 -->
        <navigation/>
    </div>
</template>
<script>
    import service from '../components/service.vue'
    import navigation from '../components/navigation.vue'
    import intervalD from '../components/intervalD.vue'
    import interval from '../components/interval.vue'

    export default {
        name: 'home',
        components: { service, navigation, intervalD, interval },
        data() {
            return {
                // 头像
                portraitImg: 'portrait.png',
                // 账号
                accountNumber: '15283819858',
                // 微信绑定状态
                weChatText: '未绑定>',
                // 公众号授权状态
                officialText: '未授权>',
                // 会员等级文本
                vipText: '银卡会员',
                // 会员到期时间
                vipTimeT: '2019-12-12 00:00:00',
                // 账户余额
                accountBalance: '28899',
                // 推广余额
                extensionBalance: '8888',
                // 全部活动数量
                wholeNumber: '221',
                // 进行中活动数量
                ongoingNumber: '22',
                // 待审核评论数量
                commentNumber: '312',
                // 公告
                newss: [
                    {
                        // 公告标题
                        newsText:
                            '这是活动动态标题这是活动动态标题这是活动动态标题这是活动动态标题这是活动动态标题这是活动动态标题这是活动动态标题',
                        // 公告图片
                        newsImgs: [{ newsImgUrl: 'img2.jpg' }],
                        // 公告时间
                        newsTime: '2019-12-01 00:00:00'
                    },
                    {
                        // 公告标题
                        newsText: '这是活动动态标题这是活动动态标题',
                        // 公告图片
                        newsImgs: [
                            { newsImgUrl: 'img1.jpg' },
                            { newsImgUrl: 'img3.jpg' },
                            { newsImgUrl: 'img6.jpg' }
                        ],
                        // 公告时间
                        newsTime: '2019-11-24 12:02:56'
                    },
                    {
                        // 公告标题
                        newsText: '这是活动动态标题',
                        // 公告图片
                        newsImgs: [
                            { newsImgUrl: 'img4.jpg' },
                            { newsImgUrl: 'img5.jpg' }
                        ],
                        // 公告时间
                        newsTime: '2019-11-24 15:12:04'
                    }
                ]
            }
        },
        methods: {
            editHomeFun() {
                this.$router.push('/personalData')
            },
            vipFun() {
                this.$router.push('/member')
            }
        }
    }
</script>
<style>
    /* 顶部内容 */
    .cardContent {
        height: 282px;
        background-color: #fff;
        padding-top: 20px;
    }
    /* 卡片 */
    .card {
        position: relative;
        width: 347px;
        height: 174px;
        background-image: url(../assets/homeCard.png);
        background-size: 100%;
        margin: 0 auto 40px;
        border-radius: 7px;
        box-shadow: 0px 7px 14px 0px rgba(51, 153, 255, 0.2);
    }
    /* 个人信息 */
    .Personal {
        position: absolute;
        top: 28px;
        left: 14px;
        display: flex;
        align-items: center;
    }
    /* 头像 */
    .portraitImg {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-right: 15px;
        object-fit: cover;
    }
    /* 个人信息-账号 */
    .account {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    /* 个人信息-账号-手机号 */
    .accountNumber {
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        margin-right: 14px;
    }
    /* 设置图标 */
    .editHome {
        width: 15px;
        height: 15px;
    }
    /* 绑定 */
    .bind {
        display: flex;
        align-items: center;
    }
    /* 微信 */
    .weChat {
        display: flex;
        align-items: center;
        margin-right: 32px;
    }
    /* 微信-图标 */
    .weChatImg {
        width: 17px;
        height: 15px;
        margin-right: 7px;
    }
    /* 微信-文本 */
    .weChatText {
        font-size: 12px;
        color: #fff;
    }
    /* 公众号 */
    .official {
        display: flex;
        align-items: center;
    }
    /* 公众号-标题 */
    .officialTitle {
        font-size: 10px;
        color: #fff;
    }
    /* 公众号-文本 */
    .officialText {
        font-size: 12px;
        color: #fff;
    }
    /* 会员 */
    .vip {
        position: absolute;
        right: 14px;
        bottom: 25px;
        color: #fff;
        font-size: 10px;
    }
    /* 会员等级 */
    .vipGrade {
        display: flex;
        align-items: center;
    }
    /* 会员图标 */
    .vipImg {
        width: 15px;
        height: 13px;
        margin-right: 10px;
    }
    /* 会员文本 */
    .vipText {
        font-size: 14px;
    }
    /* 会员时间文本 */
    .vipTimeT {
        margin-right: 6px;
    }
    /* 数据 */
    .dataContent {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    /* 数据-余额 */
    .dataBalance {
        text-align: center;
        color: #999;
        font-size: 12px;
    }
    /* 数据-余额-数字 */
    .balanceNumber {
        color: #333;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    /* 数据-余额-按钮 */
    .balanceButton {
        color: #3399ff;
        margin-left: 10px;
    }
    /* 统计 */
    .statistics {
        height: 160px;
        background-color: #fff;
        padding-top: 20px;
    }
    /* 统计内容 */
    .statisticsContent {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    /* 统计内容-数字 */
    .statisticsNumber1,
    .statisticsNumber2,
    .statisticsNumber3 {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        font-size: 16px;
        color: #fff;
        background-color: #f59481;
        text-align: center;
        line-height: 44px;
        margin: 0 auto 10px;
    }
    .statisticsNumber2 {
        background-color: #52e6da;
    }
    .statisticsNumber3 {
        background-color: #f4a96d;
    }
    /* 创建活动按钮 */
    .createButton {
        width: 347px;
        height: 42px;
        background-color: #3399ff;
        border-radius: 7px;
        color: #fff;
        text-align: center;
        line-height: 42px;
        margin: 26px auto;
    }
    /* 列表 */
    .list {
        height: 141px;
        background-color: #fff;
        padding: 0 14px;
    }
    /* 财务明细 */
    .financial {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 70px;
    }
    /* 财务明细-左边 */
    .financialLeft {
        display: flex;
        align-items: center;
    }
    /* 财务明细-图标 */
    .financialImg {
        width: 19px;
        height: 19px;
        margin-right: 14px;
    }
    /* 财务明细-更多 */
    .financialMore {
        width: 7px;
        height: 13px;
    }
    /* 线 */
    .line {
        width: 313px;
        height: 1px;
        background-color: #f0f0f0;
        margin-left: 33px;
    }
    /* 公告标题 */
    .newsTitle {
        height: 34px;
        color: #666;
        background-color: #f5f5f5;
        padding-left: 14px;
    }
    /* 公告内容 */
    .newsContent {
        background-color: #fff;
        padding: 0 14px;
    }
    /* 公告内容1 */
    .newsContent1 {
        padding: 28px 0 14px;
        border-bottom: #f0f0f0 1px solid;
    }
    .newsText {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    /* 公告图片 */
    .newsImg {
        display: flex;
        margin: 14px 0 6px;
    }
    /* 公告图片状态1 */
    .newsImg1,
    .newsImg2 {
        width: 347px;
        height: 181px;
        border-radius: 7px;
        object-fit: cover;
        margin-right: 0;
    }
    /* 公告图片状态2 */
    .newsImg2 {
        width: 107px;
        height: 107px;
        margin-right: 13px;
    }
    /* 公告时间 */
    .newsTime {
        color: #999;
        font-size: 10px;
    }
</style>
