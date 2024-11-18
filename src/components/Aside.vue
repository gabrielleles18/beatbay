<script setup>
import {RouterLink} from "vue-router";

</script>

<template>
    <aside>
        <img alt="BeatBay logo" class="logo" src="@/assets/logo.svg" width="123" height="45"/>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/discover">Discover</RouterLink>
        </nav>
    </aside>
</template>
<style scoped>
aside {
    background-color: #212121;
    padding: 3.2rem 0 3.2rem 3.2rem;
    height: 200vh;
    width: 270px;
    position: fixed;
}
</style>
