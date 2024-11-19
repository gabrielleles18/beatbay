<script setup>
import {RouterView} from 'vue-router'
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
</script>

<template>
    <header/>
    <main>
        <Aside/>
        <div class="content">
            <Header/>
            <RouterView/>
        </div>
    </main>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.content {
    margin-left: 270px;
    padding: 3.2rem;
    height: 100vh;
    overflow-y: auto;
    background-color: #121212;
    gap: 4rem;
    display: flex;
    flex-direction: column;
}
</style>
