<template>
    <div class="page-not-found">
        <h1>404 - Page Not Found</h1>
        <RouterLink to="/">Go back to Home</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.page-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    box-sizing: border-box;
}

.page-not-found h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.page-not-found a {
    color: #1DB954;
    text-decoration: none;
    font-size: 1.2rem;
}
</style>
