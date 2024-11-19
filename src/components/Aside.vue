<script setup>
import {RouterLink} from "vue-router";
import IconHome from "@/components/icons/IconHome";
import IconDiscover from "@/components/icons/IconDiscover.vue";
import IconRadio from "@/components/icons/IconRadio.vue";
import IconDisc from "@/components/icons/IconDisc.vue";
import IconMic from "@/components/icons/IconMic.vue";
import IconAddMusic from "@/components/icons/IconAddMusic.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconFiles from "@/components/icons/IconFiles.vue";
import IconPlaylist from "@/components/icons/IconPlaylist.vue";

</script>

<template>
    <aside>
        <RouterLink to="/">
            <img alt="BeatBay logo" class="logo" src="@/assets/logo.svg" width="123" height="45"/>
        </RouterLink>

        <nav class="nav-menu">
            <RouterLink to="/">
                <IconHome/>
                Home
            </RouterLink>
            <RouterLink to="/discover" class="active">
                <IconDiscover/>
                Discover
            </RouterLink>
            <RouterLink to="/radio">
                <IconRadio/>
                Radio
            </RouterLink>

            <RouterLink to="/albums">
                <IconDisc/>
                Albums
            </RouterLink>

            <RouterLink to="/podcast">
                <IconMic/>
                Podcast
            </RouterLink>
        </nav>

        <div class="row">
            <h3>Library</h3>
            <nav class="nav-menu">
                <RouterLink to="/recently-added">
                    <IconAddMusic/>
                    Recently Added
                </RouterLink>
                <RouterLink to="/favorite">
                    <IconHeart/>
                    Favorite Songs
                </RouterLink>
                <RouterLink to="/local-files">
                    <IconFiles/>
                    Local Files
                </RouterLink>
            </nav>
        </div>

        <div class="row">
            <h3>Playlist</h3>
            <nav class="nav-menu">
                <RouterLink to="/1">
                    <IconPlaylist/>
                    Lo-fi Music
                </RouterLink>
                <RouterLink to="/2">
                    <IconPlaylist/>
                    Best of Bon Jovi
                </RouterLink>
                <RouterLink to="/3">
                    <IconPlaylist/>
                    Best of John Mayer
                </RouterLink>
            </nav>
        </div>
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
    align-items: center;
    display: flex;
    gap: 1.6rem;
    font-weight: 600;
}

.nav-menu a.router-link-active svg {
    color: #1DB954;
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

.row h3 {
    color: #949494;
    font-size: 1.4rem;
    margin: 0 3.2rem 1rem;
    font-weight: 600;
    text-transform: uppercase;
}
</style>
