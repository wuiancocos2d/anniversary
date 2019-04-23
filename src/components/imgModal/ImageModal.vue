<template>
    <div class="content">
        <div class="img-container">
            <img :src="imgUrl" alt="">
        </div>
        <div class="title"><p>{{title}}</p></div>
        <div class="like"><a-icon type="heart" /><p>{{like}}</p></div>
        <div class="context">
            <span>{{context}}</span>
        </div>
    </div>
</template>
<script>
import {Icon} from 'ant-design-vue'
export default {
    name: 'imgModal',
    props: [
        'imgUrl',
        'title',
        'context',
        'like'
    ],
    components: {
        'a-icon': Icon
    }
}
</script>
<style lang="scss" scoped>
    .img-container {
        display: block;
        width: 100%;
        img {
            display: block;
            width: 100%;
            
        }
    }
</style>