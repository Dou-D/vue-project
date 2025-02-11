<script setup lang="js">
import Archive from './Archive.vue';
const Archives = [
    {
        id: 1,
        year: "2023",
        aticle: [
            {
                id: 1,
                title: "箭头函数与普通函数",
                update_time: "2024-08-21"
            },
            {
                id: 2,
                title: "Vue 3 组合式 API 入门",
                update_time: "2024-08-22"
            },
            {
                id: 3,
                title: "JavaScript 闭包详解",
                update_time: "2024-08-23"
            },
        ]
    },
    {
        id: 2,
        year: "2024",
        aticle: [
            {
                id: 4,
                title: "React Hooks 使用指南",
                update_time: "2024-08-24"
            },
            {
                id: 5,
                title: "TypeScript 类型系统深入",
                update_time: "2024-08-25"
            },
            {
                id: 6,
                title: "前端性能优化实践",
                update_time: "2024-08-26"
            },
            {
                id: 7,
                title: "Node.js 异步编程模型",
                update_time: "2024-08-27"
            },
            {
                id: 8,
                title: "Webpack 配置详解",
                update_time: "2024-08-28"
            },
            {
                id: 9,
                title: "CSS Grid 布局实战",
                update_time: "2024-08-29"
            },
            {
                id: 10,
                title: "vue响应式底层",
                update_time: "2025-01-01"
            }
        ]
    }
]
</script>

<template>
  <div v-for="item in Archives" :key="item.id" class="w-75">
    <Archive :year="item.year" :aticle="item.aticle" />
  </div>
</template>
