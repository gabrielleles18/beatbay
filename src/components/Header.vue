<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import BreadCrumb from "@/components/BreadCrumb";
</script>

<template>
    <header>
        <div class="back">
            <IconArrow/>
        </div>
        <BreadCrumb/>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    gap: 1.6rem;
}

.back {
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

.back:hover {
    background-color: #333;
}

.back svg {
    color: #fff;
    rotate: 180deg;
}

</style>
