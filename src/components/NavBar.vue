<script setup>
import { reactive } from 'vue';

const nav_items = reactive([
    { id: 1, title: "首页", link: '/home' },
    { id: 2, title: "分类", link: '/tags' },
    { id: 3, title: "归档", link: '/archives' },
    { id: 4, title: "我", link: '/about' },
])
</script>

<template>
    <nav class="nav nav-pills flex-column flex-sm-row justify-content-center">
        <a class="text-sm-center nav-link" v-for="item in nav_items" :href="item.link" :key="item.id">
            {{ item.title }}
        </a>
    </nav>
</template>