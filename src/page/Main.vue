<script setup lang="js">
import NavBar from '@/components/NavBar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
    <NavBar />
    <div class="container-fluid d-flex align-items-center justify-content-center flex-column w-100">
        <RouterView />
    </div>
</template>