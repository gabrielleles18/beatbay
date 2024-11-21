<template>
    <div class="card-album">
        <img src="@/assets/background.png" alt="Album cover"/>

        <div class="content">
            <h3>Divide</h3>
            <p>2024</p>
        </div>
    </div>
</template>

<style scoped>
.card-album {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
}

.card-album img {
    width: 118px;
    height: 118px;
    border-radius: 12px;
}

.card-album .content {
    display: flex;
    flex-direction: column;
}

.card-album .content h3 {
    color: #fff;
}

</style>
<script setup lang="ts">
</script>
