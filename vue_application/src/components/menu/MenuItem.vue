<template>
    <div :class="{'working-tree': true, 'isParent': parentId === null}">
        <div v-for="item in store.state.menuList.filter((obj: IMenuItem) => obj.parentId === parentId)" :key="item.id">
            <div :class="{'title': true, 'opened': route.query.folderId && route?.query?.folderId?.indexOf(item.id) > -1}"
                 @click="() => openProject(item)">
                <Folder v-if="['project','folder', 'subfolders'].indexOf(item.type) > -1" color="black" width="20"/>
                <File v-if="['file'].indexOf(item.type) > -1" color="black" class="file" width="13"/>
                {{ item.name }}

                <MenuItemOptions class="options" :item-type="item"/>
            </div>
            <MenuItem
                    :parent-id="item.id"
                    :key="`child_${item.id}`"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>

import {MenuItem as IMenuItem} from "./scripts.ts";
import Folder from "../icons/Folder.vue";
import {useRoute, useRouter} from "vue-router";
import File from "../icons/File.vue";
import MenuItemOptions from "./MenuItemOptions.vue";
import store from "../../store";

const route = useRoute()
const router = useRouter()

interface Props {
    parentId: string | null
}

defineProps<Props>()

const openProject = (obj: IMenuItem) => {
    let query = {}
    switch (obj.type) {
        case "file":
            query = {...route.query, documentId: obj.id}
            break;
        case "project":
            query = {...route.query, folderId: `root`, projectId: obj.id}
            break;
        default:
            query = {...route.query, folderId: `${route.query.folderId};id:${obj.id}`}
            break;
    }
    console.log(query);
    router.push({
        name: 'home',
        query,
    })
}
</script>

<style scoped>
.working-tree.isParent {
    overflow: auto;
    height: 94vh;
    border-left: none;

}

.working-tree {
    margin-left: 7px;
    border-left: 1px solid #F2F4F6;
    padding-left: 5px;
}

.file {
    margin-left: 3px;
}

.title {
    display: grid;
    gap: 5px;
    padding: 5px;
    cursor: pointer;
    justify-content: center;
    grid-template-columns: 20px 1fr 30px;
    align-items: center;
}

.title > .options {
    margin-left: auto;
    margin-right: 5px;
}

.title:hover {
    background: #F2F4F6;
}
</style>