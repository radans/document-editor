<template>
    <svg
            :width="props.width+'px'"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        <path d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z" fill="currentColor"></path>
    </svg>
</template>
<script setup lang="ts">

const props = defineProps<{ color: string, width: string }>();

</script>