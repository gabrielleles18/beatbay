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

import {inject} from 'vue';

const OpenSandwich = inject('OpenSandwich');

</script>

<template>
    <aside :class="{sandwich: OpenSandwich}">
        <RouterLink to="/">
            <img alt="BeatBay logo" class="logo" src="@/assets/logo.svg" width="123" height="45"/>
            <img alt="BeatBay logo" class="logo-icon" src="@/assets/logo-icon.svg" width="123" height="45"/>
        </RouterLink>

        <nav class="nav-menu">
            <RouterLink to="/" title="Home">
                <IconHome/>
                <p>Home</p>
            </RouterLink>
            <RouterLink to="/discover" title="Discover">
                <IconDiscover/>
                <p>Discover</p>
            </RouterLink>
            <RouterLink to="/radio" title="Radio">
                <IconRadio/>
                <p>Radio</p>
            </RouterLink>

            <RouterLink to="/albums" title="Albums">
                <IconDisc/>
                <p>Albums</p>
            </RouterLink>

            <RouterLink to="/podcast" title="Podcast">
                <IconMic/>
                <p>Podcast</p>
            </RouterLink>
        </nav>

        <div class="row">
            <h3>Library</h3>
            <nav class="nav-menu">
                <RouterLink to="/recently-added" title="Recently Added">
                    <IconAddMusic/>
                    <p>Recently Added</p>
                </RouterLink>
                <RouterLink to="/favorite" title="Favorite Songs">
                    <IconHeart/>
                    <p>Favorite Songs</p>
                </RouterLink>
                <RouterLink to="/local-files" title="Local Files">
                    <IconFiles/>
                    <p>Local Files</p>
                </RouterLink>
            </nav>
        </div>

        <div class="row">
            <h3>Playlist</h3>
            <nav class="nav-menu">
                <RouterLink to="/1" title="Lo-fi Music">
                    <IconPlaylist/>
                    <p>Lo-fi Music</p>
                </RouterLink>
                <RouterLink to="/2" title="Best of Bon Jovi">
                    <IconPlaylist/>
                    <p>Best of Bon Jovi</p>
                </RouterLink>
                <RouterLink to="/3" title="Best of John Mayer">
                    <IconPlaylist/>
                    <p>Best of John Mayer</p>
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
    transition: width 0.3s ease;
}

.logo {
    margin: 0 3.2rem;
}

.logo-icon {
    display: none;
    transition: all 0.3s;
}

.nav-menu {
    display: flex;
    flex-direction: column;
}

.nav-menu a {
    padding: 1.3rem 3.2rem 1.3rem 3.2rem;
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


aside.sandwich {
    width: 125px;
}

aside.sandwich .nav-menu a {
    justify-content: center;
}

aside.sandwich .nav-menu p {
    display: none;
}

aside.sandwich .nav-menu svg {
    width: 28px;
    height: 28px;
}

aside.sandwich .logo {
    display: none;
}

aside.sandwich .logo-icon {
    display: flex;
}
</style>
