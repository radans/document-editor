<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
         :width="props.width+'px'">
        <g fill="none">
            <path d="M16.5 8a4.25 4.25 0 0 0 0 8.5h.5v4.75a.75.75 0 0 0 1.5 0V9.5h1v11.75a.75.75 0 0 0 1.5 0V9.5h.25a.75.75 0 0 0 0-1.5H16.5zm0 1.5h.5V15h-.5a2.75 2.75 0 1 1 0-5.5zM2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75zm0 5a.75.75 0 0 0 0 1.5h8.553c.076-.53.23-1.034.452-1.5H2.75zm9.277 5H2.75a.75.75 0 0 0 0 1.5h10.667a5.278 5.278 0 0 1-1.39-1.5z"
                  fill="currentColor"></path>
        </g>
    </svg>
</template>
<script setup lang="ts">

const props = defineProps<{ color: string, width: string }>();

</script>