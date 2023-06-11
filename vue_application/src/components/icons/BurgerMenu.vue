<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
         :width="props.width+'px'" :color="props.color">
        <path d="M32 96h448v96h-448zM32 224h448v96h-448zM32 352h448v96h-448z"/>
    </svg>
</template>
<script setup lang="ts">

const props = defineProps<{ color: string, width: string }>();

</script>