<template>
    <div class="nav-bar">
        <router-link to="/" :class="{ active: active === 'product' }">商品列表</router-link>
        <router-link to="/shoppingcart" :class="{ active: active === 'shoppingcart' }">商品列表</router-link>
    </div>
</template>

<script lang="ts">
import{ defineComponent }from 'vue';
export default defineComponent ({
    name: "navbar",
    props: {
        count: Number,
        active: String
    }
})
</script>

<style scoped lang="less">
.nav-bar{
    background-color: antiquewhite;
}
</style>