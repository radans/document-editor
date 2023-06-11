<template>
    <div class="flex">
        <button class="accent button-with-text" @click="saveDocument">
            <Save color="black" width="20"/>
        </button>
    </div>
</template>
<script setup lang="ts">
import Save from "./icons/Save.vue";
import {Editor} from "@tiptap/vue-3";
import updateDocument from "../store/updateDocument.ts";
import {useRoute} from "vue-router";

const route = useRoute()
const {editor} = defineProps<{ editor: Editor }>()
const saveDocument = async () => {
    await updateDocument(editor.getJSON(), editor.storage.comment, route.query)
}
</script>