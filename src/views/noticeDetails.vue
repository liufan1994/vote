<template>
    <!-- 公告详情 -->
    <div class="noticeDetails">
        <!-- 标头 -->
        <myTitle titleName="公告详情" />
        <!-- 内容 -->
        <div class="noticeDetailsContent">
            <div class="noticeDetailsTitle">
                <div class="noticeDetailsText">{{noticeDetailsText}}</div>
                <div class="noticeDetailsTime">{{noticeDetailsTime}}</div>
            </div>
            <div class="noticeDetailsDetails" v-html="noticeDetailsDetails"></div>
        </div>
    </div>
</template>
<script>
    import myTitle from '../components/myTitle'

    export default {
        name: 'noticeDetails',
        components: { myTitle },
        data() {
            return {
                noticeDetailsText:
                    '这是活动动态标题这是活动动态标题这是活动动态标题这是活动动态标题',
                noticeDetailsTime: '2019-06-28 00:00:00',
                noticeDetailsDetails:
                    '<p class="ql-align-justify">为深入贯彻全省教育工作大会精神，落实立德树人根本任务，加强对广大学生资助政策、征信知识和金融基础知识的普及宣传教育，进一步促进学院诚信校园文化建设，根据上级相关文件精神及学校《关于开展“诚信校园行”校园短剧大赛的通知》，结合我院实际，决定于11月开展“诚信筑未来，奋进新时代”校园短剧大赛。</p><h1 class="ql-align-center"><strong style="color: rgb(230, 0, 0);">活动主题</strong></h1><p class="ql-align-center"><br></p><p class="ql-align-center">“诚信筑未来，奋进新时代”</p><p class="ql-align-center"><br></p><h1 class="ql-align-center"><strong style="color: rgb(230, 0, 0);">活动目的</strong></h1><p class="ql-align-center"><br></p><p class="ql-align-justify">宣传国家资助政策及相关知识，培养广大学生诚实守信、知恩感恩、自立自强的良好品质,充分发挥资助育人功能，促进学院学生资助工作持续、健康发展。</p><p class="ql-align-justify"><br></p><p class="ql-align-justify"><br></p><p class="ql-align-center">国际教育学院</p><p><br></p>'
            }
        }
    }
</script>
<style scoped>
    .noticeDetailsContent {
        background-color: #fff;
        padding: 0 14px;
    }
    .noticeDetailsTitle {
        padding: 24px 0 14px;
        border-bottom: #e6e6e6 1px solid;
        text-align: center;
    }
    .noticeDetailsText {
        text-align: justify;
        text-align-last: center;
    }
    .noticeDetailsTime {
        color: #999;
        font-size: 12px;
        margin-top: 6px;
    }
    .noticeDetailsDetails {
        color: #666;
        font-size: 12px;
        text-align: justify;
        margin: 24px 0;
    }
    img {
        border-radius: 7px;
        margin: 10px 0;
    }
</style>
