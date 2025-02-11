<script setup lang="js">
defineProps({
    id: Number,
    title: String,
    author: String,
    update_time: String,
    description: String
})
</script>

<template>
    <a href="" class="link-offset-2 link-underline link-underline-opacity-0">
        <div class="card mb-3" style="max-width: 580px;">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ title }}</h5>
                        <p class="card-text">{{ description }}</p>
                        <p class="card-text grid gap-0 row-gap-3">
                            <small class="text-body-secondary p-2">{{ update_time }}</small>
                            <small class="text-body-secondary p-2">{{ author }}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>