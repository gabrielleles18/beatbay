<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import BreadCrumb from "@/components/BreadCrumb";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBell from "@/components/icons/IconBell.vue";
import axios from 'axios';

import {inject} from 'vue';

const OpenSandwich = inject('OpenSandwich');

function handleOpenSandwich() {
    OpenSandwich.value = !OpenSandwich.value;
}

function handlleSpot() {
    axios.post('https://accounts.spotify.com/api/token',
        new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: '9cd8b8d978604b6d9839dbf7ad04aa8a',
            client_secret: 'd10f6e2aff224c5d8c02f4aaf0cef7aa'
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    ).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.error(error);
    });
}

</script>

<template>
    <header>
        <div class="box arrow" @click="handleOpenSandwich" :class="{sandwich :OpenSandwich}">
            <IconArrow/>
        </div>
        <BreadCrumb/>
        <div class="search-wrapper">
            <IconSearch/>
            <input type="text" placeholder="Search music, artist, albums..."/>
        </div>
        <button class="box" @click="handlleSpot">
            <IconBell/>
        </button>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 2.4rem;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: #212121;
    cursor: pointer;
    transition: background-color 0.2s;
}

.box:hover {
    background-color: #333;
}

.box svg {
    color: #fff;
}

.arrow svg {
    rotate: 180deg;
    transition: rotate 0.3s;
}

.arrow.sandwich svg {
    rotate: 0deg;
}

.search-wrapper {
    min-width: 380px;
    background-color: #212121;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 1.6rem;
}

.search-wrapper svg {
    color: #fff;
    width: 24px;
    height: 24px;
}

.search-wrapper input {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.6rem;
    width: 100%;
    outline: none;
}

</style>
