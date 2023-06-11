<template>
    <div class="projects-container"
         v-if="(store.actions.isMobile() && store.state.showMenu) || !store.actions.isMobile()">
        <h3 class="title">Projects </h3>
        <MenuItemComponent :parentId="null"/>
    </div>
</template>
<script setup lang="ts">
import {useRoute} from "vue-router";
import {watch} from "vue";
import {fetchDocuments, fetchFolders, loadProjects} from "./scripts.ts";
import MenuItemComponent from './MenuItem.vue'
import store from "../../store";

const route = useRoute()

loadProjects().then((val) => {
    store.actions.insertMenuItemsToList(val);
})


watch(() => route.query.folderId, () => {
    fetchFolders(route).then((val) => {
        if (!val) {
            return;
        }
        store.actions.insertMenuItemsToList(val);
    })
    fetchDocuments(route).then((val) => {
        if (!val) {
            return;
        }
        store.actions.insertMenuItemsToList(val);
    })

})
watch(() => route.query.documentId, () => {

    fetchDocuments(route).then((val) => {
        if (!val) {
            return;
        }
        store.actions.insertMenuItemsToList(val);
    })
})
</script>
<style scoped>
.projects-container {
    overflow: auto;
}
</style>