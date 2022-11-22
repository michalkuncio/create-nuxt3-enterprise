<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue';
import './assets/styles/main.scss';
useHead({
    title: 'Nuxt Starter',
    link: [
        {
            rel: 'icon',
            href: '/favicon.png'
        }
    ]
});
</script>

<template>
    <MainLayout>
        <NuxtPage />
    </MainLayout>
</template>
