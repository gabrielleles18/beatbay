<script setup>
import {useRoute} from 'vue-router';
import IconArrow from "@/components/icons/IconArrow.vue";
import {ref, watch} from 'vue';

const route = useRoute();
const name = ref('');

watch(route, (newRoute) => {
    name.value = newRoute.name;
});
</script>

<template>
    <nav class="breadcrumb">
        <ul>
            <li>
                <RouterLink to="/">
                    Home
                </RouterLink>
            </li>
            <li v-if="name !== 'Home' && name !== undefined ">
                <IconArrow/>
                <p>
                    {{ name }}
                </p>
            </li>

            <li v-if="name === undefined">
                <IconArrow/>
                <p>
                    Page not found
                </p>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.breadcrumb {
    flex: 1;
}

.breadcrumb ul {
    display: flex;
    list-style: none;
    gap: 8px;
}

.breadcrumb ul li {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
}

.breadcrumb ul li:not(:first-child) {
    color: #fff;
}
</style>
