<template>
    <div class="products" v-if="!loading">
        <div class="product-list" v-for="(item, index) in products" :key="index">
            <span class="name">{{ item.title }}</span>
            <span class="name">{{ item.price }}</span>
            <button @click="addToCart(item)">加入购物车</button>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Product } from '../interface/index'
import { apiGetProducts } from '../api/index'

export default defineComponent({
    name: "products",
    setup() {
        const products = ref<Product[]>([]);
        const loading = ref(false);
        const getProducts = async () => {
            loading.value = true;
            products.value = await apiGetProducts();
            loading.value = false;
        }
        getProducts();
        return {
            loading,
            products
        }
    },
    methods: {
        addToCart(product: Product) {
            console.log('加入购物车')
        }
    }
})
</script>
  
<style scoped lang="less"></style>