<template>
    <div class="upload-container">
        <a-upload class="img-block" @click="handleUploadClick">
            <a-icon class="plus"  type="plus" />
            <p class="hint">Please upload you image here</p>
        </a-upload>
    </div>
</template>
<script>
import {Icon, Upload} from 'ant-design-vue'
export default {
    name: 'UploadModal',
    components: {
        "a-icon": Icon,
        "a-upload": Upload
    },
    methods: {
        handleUploadClick() {

        }
    }
}
</script>
<style lang="scss" scoped>
    .upload-container {
        width: 100%;
        padding: 0 10px;
        .img-block {
            width: 100%;
            height: 150px;
            background-color: rgb(239, 239, 239);
            text-align: center;
            position: relative;
            cursor: pointer;
            .plus {
                position: relative;
                font-size: 28px;
                line-height: 150px;
            }
            .hint {
                position: absolute;
                top: 20px;
                left: 50px;
            }
        }
    }
</style>
