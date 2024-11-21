<script setup>

import IconHeadPhone from "@/components/icons/IconHeadPhone.vue";
import IconMore from "@/components/icons/IconMore.vue";
import IconClock from "@/components/icons/IconClock.vue";
import IconHeartOutline from "@/components/icons/IconHeartOutline.vue";
</script>

<template>
    <div class="card-music">
        <span>1</span>
        <!--        <IconPlay class="icon-play" v-if="showPlay"/>-->
        <img src="@/assets/background.png" alt="">
        <p>Shape of You</p>
        <div class="listeners item-icon">
            <IconHeadPhone/>
            <p>82,736,050</p>
        </div>

        <div class="time item-icon flex-1">
            <IconClock/>
            <p>3:56</p>
        </div>

        <IconHeartOutline class="flex-1"/>

        <IconMore class="icon-more"/>
    </div>
</template>

<style scoped>
.card-music {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
    padding: 1.6rem 0;
    transition: background-color 0.2s ease;
    border-bottom: 1px solid #282828;
}

.card-music .icon-play {
    display: none;
}

.card-music:hover {
    background-color: #282828;
    border-radius: 6px;
}

.card-music span {
    padding: 0 1.6rem;
}

.card-music img {
    width: 54px;
    height: 54px;
    border-radius: 12px;
}

.card-music p {
    flex: 3;
}

.card-music .flex-1 {
    flex: 1;
}

.listeners {
    flex: 2;
}

.item-icon {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.icon-more {
    width: 45px;
    padding-right: 1.6rem;
}
</style>
