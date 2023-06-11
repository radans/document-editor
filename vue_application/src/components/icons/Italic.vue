<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
         :width="props.width+'px'">
        <g :fill="props.color" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 5h6"></path>
            <path d="M7 19h6"></path>
            <path d="M14 5l-4 14"></path>
        </g>
    </svg>
</template>
<script setup lang="ts">

const props = defineProps<{ color: string, width: string }>();

</script>