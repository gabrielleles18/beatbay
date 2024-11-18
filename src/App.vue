<script setup>
import {RouterView} from 'vue-router'
import Aside from "@/components/Aside.vue";
</script>

<template>
    <header>
    </header>

    <main>
        <Aside/>
        <div class="content">
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
}
</style>
