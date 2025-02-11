<script setup lang="js">
defineProps({
    title: String,
    time: String
})
</script>

<template>
    <div class="border border-0 rounded border-primary p-3 d-flex justify-content-between">
        <span>{{ title }}</span>
        <span>{{ time }}</span>
    </div>
</template>
