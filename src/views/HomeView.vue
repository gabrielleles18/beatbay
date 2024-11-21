<script setup>
import IconVerified from "@/components/icons/IconVerified.vue";
import IconHeadPhone from "@/components/icons/IconHeadPhone.vue";
import CardAlbum from "@/components/CardAlbum.vue";
import CardMusic from "@/components/CardMusic.vue";
</script>

<template>
    <div class="banner">
        <img src="@/assets/background.png" alt="">
        <div class="verified">
            <IconVerified/>
            <h4>Verified Artist</h4>
        </div>

        <h1>Ed Sheeran</h1>

        <div class="listeners">
            <IconHeadPhone/>
            <p><b>82,736,050</b> monthly listeners</p>
        </div>

        <div class="cta">
            <button>Play</button>
            <button>Following</button>
        </div>
    </div>

    <div class="albums row">
        <div class="head">
            <h2>Albums</h2>

            <a href="" class="see-all">See All</a>
        </div>
        <div class="list">
            <CardAlbum/>
            <CardAlbum/>
        </div>
    </div>

    <div class="popular row">
        <div class="head">
            <h2>Popular Song</h2>
        </div>
        <div class="list">
           <CardMusic/>
           <CardMusic/>
           <CardMusic/>
        </div>
    </div>
</template>

<style scoped>
.banner {
    width: 100%;
    min-height: 295px;
    position: relative;
    padding: 4rem 5.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    justify-content: center;
}

.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    position: absolute;
    top: 0;
    left: 0;
}

.banner h1 {
    font-size: 4.5rem;
    font-weight: 800;
    color: #fff;
    position: relative;
}

.banner .verified {
    display: flex;
    gap: 1rem;
    position: relative;
}

.banner .listeners {
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
}

.banner .listeners p {
    color: #7F7F7F;
}

.banner .listeners p b {
    color: #fff;
    font-weight: 600;
}

.cta {
    display: flex;
    gap: 1.2rem;
    position: relative;
    margin-top: 2rem;
}

.cta button {
    padding: 1.4rem 2.4rem;
    border-radius: 44px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #fff;
    background-color: #1DB954;
    cursor: pointer;
    text-transform: uppercase;
    border: 1px solid transparent;
    transition: all 0.2s;
}

.cta button:last-child {
    background-color: transparent;
    border: 1px solid #fff;
}

.cta button:hover {
    transform: scale(1.02);
}

.row {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
}

.row .head h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
}

.row .head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.albums .head .see-all {
    font-size: 1.6rem;
    font-weight: 500;
    color: #1DB954;
    text-decoration: none;
    transition: all 0.2s;
}

.albums .head .see-all:hover {
    text-decoration: underline;
}

.row .list {
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;
    overflow: hidden;
}

.popular{
    gap: 0.8rem;
}
.popular .list {
    flex-direction: column;
}
</style>
