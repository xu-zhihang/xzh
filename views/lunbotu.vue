<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="data in list" :key="data.id">
                <img :src="data.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    
</template>

<script>
export default {
    props:["list"]
}
</script>

<style scoped>
    .mint-swipe{
       height:200px;
       width: 100%;
    }
    img{
        width:100%;
        height:100%;
    }
</style>
