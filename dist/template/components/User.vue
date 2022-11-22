<script setup lang="ts">
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
</script>

<template>
    <div>
        Your pinia store user:
        {{ userStore.user.firstName }}
        {{ userStore.user.lastName }}
    </div>
</template>
