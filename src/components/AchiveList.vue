<script setup lang="js">
import { onMounted, reactive } from 'vue';
import Archive from './Archive.vue';
const Archives = reactive([]);
onMounted(() => {
    fetch('http://localhost:3000/api/archives').then(res => res.json().then(res => {
        Archives.push(...res);
    }))
})
</script>

<template>
  <div v-for="item in Archives" :key="item.id" class="w-75">
    <Archive :year="item.year" :aticle="item.aticle" />
  </div>
</template>
