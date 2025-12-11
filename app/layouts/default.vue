<template>
    <header>
        <!-- <UNavigationMenu :items="items" /> -->
    </header>

    <main>
        <NuxtPage />
    </main>

    <footer>
       <div class="container mx-auto px-4 py-12 text-center">
           <span class="text-slate-400 text-sm">© {{ new Date().getFullYear() }}  Quant AI Platform</span>
       </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = ref([
    {
        label: '首页',
        icon: 'i-lucide-book-open',
        to: '/',


    },
    {
        label: '登录',
        icon: 'i-lucide-database',
        to: '/login',


    },


])
</script>
