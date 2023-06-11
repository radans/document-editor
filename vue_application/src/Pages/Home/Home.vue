<template>
    <div :class="{'main': true, 'comments': store?.state?.showComments}">
        <Menu/>
        <EditorComponent/>
    </div>
</template>

<script setup lang="ts">
import EditorComponent from "./components/Editor.vue";
import {inject} from "vue";
import Menu from '../../components/menu/Index.vue'
import {Store} from "../../store";
import getProfile from "../../store/getProfile.ts";

const store: Store | undefined = inject("store");
getProfile();
</script>

<style scoped>
.main {
    position: relative;
}

.container {
    position: absolute;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 999;
}
</style>