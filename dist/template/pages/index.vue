<script setup lang="ts">
const { data } = await useFetch('/api/hello');
</script>

<template>
    <h1>Homepage</h1>
    <div>
        {{ data }}
    </div>
</template>
