<template>
    <nav>
        <NuxtLink to="/">
            Home
        </NuxtLink>
        <NuxtLink to="/about">
            About
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
nav {
    display: flex;
    gap: 20px;

    a {
        color: white;
        text-decoration: none;
        font-size: 1.2rem;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
