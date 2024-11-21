<script setup>
import IconHeartOutline from "@/components/icons/IconHeartOutline.vue";
import IconHeartBold from "@/components/icons/IconHeartBold.vue";
import {ref} from "vue";
import IconShuffle from "@/components/icons/IconShuffle.vue";
import IconBackwardSolid from "@/components/icons/IconBackwardSolid.vue";
import IconPlay from "@/components/icons/IconPlay.vue";
import IconRepeat from "@/components/icons/IconRepeat.vue";
import IconPause from "@/components/icons/IconPause.vue";
import IconVolumeHigh from "@/components/icons/IconVolumeHigh.vue";
import IconMusicQueue from "@/components/icons/IconMusicQueue.vue";
import IconVolumeMute from "@/components/icons/IconVolumeMute.vue";
import IconVolumeMid from "@/components/icons/IconVolumeMid.vue";

const isFavorite = ref(false);
const isPlaying = ref(false);
const rangeVolume = ref('50');

function handleFavorite() {
    isFavorite.value = !isFavorite.value;
}

function handlePlay() {
    isPlaying.value = !isPlaying.value;
}

</script>

<template>
    <div class="player">
        <div class="bar-progress">
            <div class="progress"/>
        </div>
        <div class="artists">
            <img
                src="https://www.acdcbrasil.net/wp-content/uploads/veja-a-capa-e-faixas-do-novo-album-do-ac-dc-power-up.jpg"
                alt="">
            <hgroup>
                <h3>AC/DC</h3>
                <h4>Power Up</h4>
            </hgroup>

            <button @click="handleFavorite">
                <template v-if="!isFavorite">
                    <IconHeartOutline/>
                </template>

                <template v-else>
                    <IconHeartBold/>
                </template>
            </button>
        </div>
        <div class="play">
            <button>
                <IconShuffle/>
            </button>

            <button>
                <IconBackwardSolid/>
            </button>

            <button class="play-pause">
                <template v-if="!isPlaying">
                    <IconPlay @click="handlePlay"/>
                </template>
                <template v-else>
                    <IconPause @click="handlePlay"/>
                </template>
            </button>

            <button class="forward">
                <IconBackwardSolid/>
            </button>

            <button>
                <IconRepeat/>
            </button>
        </div>
        <div class="controls">
            <div class="time">
                1:45 / 4:42
            </div>

            <div class="volume">
                <IconVolumeMute v-if="rangeVolume === '0'"/>
                <IconVolumeMid v-if="rangeVolume < 49 && rangeVolume > 0"/>
                <IconVolumeHigh v-if="rangeVolume >= 50"/>
                <input
                    @change="rangeVolume = $event.target.value"
                    type="range"
                    min="0"
                    max="100"
                    value="{{rangeVolume}}"
                />
            </div>

            <IconMusicQueue/>
        </div>
    </div>
</template>

<style scoped>
.player {
    height: 112px;
    width: 100%;
    background-color: rgba(18, 18, 18, 0.85);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;
    padding: 2rem 3.2rem;
    position: relative;
}

.bar-progress {
    position: absolute;
    width: 100%;
    height: 4px;
    top: 0;
    left: 0;
    background-color: #656565;
}

.bar-progress .progress {
    width: 29%;
    height: 100%;
    background-color: #fff;
    border-radius: 2px;
}

.artists {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    flex-direction: row;
}

.artists hgroup {
    display: flex;
    flex-direction: column;
    margin-right: 1.6rem;
}

.artists hgroup h3 {
    color: #fff;
}

.artists hgroup h4 {
    font-weight: 400;
}

.artists img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 12px;
}

.play {
    display: flex;
    align-items: center;
    gap: 2.4rem;
}

.play svg {
    color: #fff;
}

.play svg:hover {
    transform: scale(1.06);
    transition: transform 0.2s;
}

.play .play-pause svg {
    width: 4.8rem;
    height: 4.8rem;
}

.play .forward svg {
    transform: rotate(180deg);
}

.play .forward svg:hover {
    transform: rotate(180deg) scale(1.06);
}

.controls {
    display: flex;
    flex-direction: row;
    gap: 2.4rem;
    align-items: center;
}

.controls .volume {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.controls .volume input[type="range"] {
    -webkit-appearance: none;
    width: 100px;
    height: 5px;
    background: #ddd;
    border-radius: 5px;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.controls .volume input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #1DB954;
    cursor: pointer;
    border-radius: 50%;
}

.controls .volume input[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #1DB954;
    cursor: pointer;
    border-radius: 50%;
}
</style>
