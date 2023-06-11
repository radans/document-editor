<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"
         :width="props.width+'px'">
        <path d="M6 6h20v2H6z" fill="currentColor"></path>
        <path d="M6 12h20v2H6z" fill="currentColor"></path>
        <path d="M6 18h20v2H6z" fill="currentColor"></path>
        <path d="M6 24h20v2H6z" fill="currentColor"></path>
    </svg>
</template>
<script setup lang="ts">

const props = defineProps<{ color: string, width: string }>();

</script>