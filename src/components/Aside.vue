<script setup>
import {RouterLink} from "vue-router";

</script>

<template>
    <aside>
        <RouterLink to="/">
            <img alt="BeatBay logo" class="logo" src="@/assets/logo.svg" width="123" height="45"/>
        </RouterLink>

        <nav class="nav-menu">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/discover" class="active">Discover</RouterLink>
        </nav>
    </aside>
</template>
<style scoped>
aside {
    background-color: #212121;
    padding: 3.2rem 0;
    height: 200vh;
    width: 270px;
    position: fixed;
    gap: 4rem;
    display: flex;
    flex-direction: column;
}

.logo {
    margin: 0 3.2rem;
}

.nav-menu {
    display: flex;
    flex-direction: column;
}

.nav-menu a {
    padding: 1.3rem 0 1.3rem 3.2rem;
    color: #949494;
}

.nav-menu a.router-link-active {
    color: #fff;
    position: relative;
    background: linear-gradient(90deg, #2D2D2D 0%, #212121 100%);
    transition: all 0.2s;
}

.nav-menu a:hover {
    color: #fff;
}

.nav-menu a.router-link-active::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background-color: #1DB954;
    left: calc(100% - 6px);
    top: 0;
    border-radius: 4px 0 0 4px;
}
</style>
