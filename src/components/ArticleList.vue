<script setup lang="js">
import Article from './Article.vue';
import { onMounted, reactive } from 'vue'
const articles = reactive([]);
onMounted(() => {
    fetch('http://localhost:3000/api/articles').then(res => res.json().then(res => {
        articles.push(...res);
    })
    )
})
</script>

<template>
  <div v-for="item in articles" :key="item.id">
    <!-- sfc -->
    <Article
      :id="item.id"
      :author="item.author"
      :title="item.title"
      :update_time="item.update_time"
      :description="item.description"
    />
  </div>
  
</template>
