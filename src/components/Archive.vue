<script setup lang="js">
import ArchiveCard from './ArchiveCard.vue';

defineProps({
    year: String,
    aticle: Array
})
</script>

<template>
  <!-- 时间 -->
  <div class="text-center border-bottom">{{ year }}</div>
  <!-- 内容 -->
  <div v-for="item in aticle" :key="item.id">
    <ArchiveCard :time="item.update_time" :title="item.title" />
  </div>
</template>
