<template>
    <!-- 下拉框 -->
    <div class="dropDownBox">
        <div class="dropDownBox1" v-for="(dropDownBox,index) in dropDownBoxs" :key="index" @click="dropDownBoxFun(index)">{{dropDownBox.dropDownBox}}</div>
    </div>
</template>
<script>
    export default {
        name: 'dropDownBox',
        props: {
            dropDownBoxs: {
                type: [String, Array],
                default() {
                    return []
                }
            }
        },
        methods: {
            dropDownBoxFun(index) {
                this.$emit('dropDownBox-fun', index)
            }
        }
    }
</script>
<style>
    .dropDownBox {
        width: 104px;
        position: absolute;
        top: 24px;
        right: 0px;
        background-color: #fff;
        box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 7px;
        z-index: 99;
    }
    .dropDownBox1 {
        margin: 20px 24px;
    }
</style>
