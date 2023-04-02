<template>
  <navbar :count="0" :active="'product'"></navbar>
  <div class="body">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import navbar from './components/navbar.vue'
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
