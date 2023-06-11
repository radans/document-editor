<script setup lang="ts">
import {reactive, watch} from "vue";
import axios from "axios";
import getToken from "../../store/getToken.ts";
import {useRoute, useRouter} from "vue-router";
import Folder from "../icons/Folder.vue";
import FolderUp from "../icons/FolderUp.vue";
import File from "../icons/File.vue";

const route = useRoute()
const router = useRouter()
const props = defineProps<{ type: string }>()

interface InterfaceItem {
    id: string,
    name: string | null,
    title: string | null,
    folderId: string
}

interface InterfaceData {
    data: InterfaceItem[],
    files: InterfaceItem[],
}

const data = reactive<InterfaceData>({
    data: [],
    files: []
});


const fetchFolders = async () => {
    const token = await getToken();
    const folderIds = route.query.folderId?.toString().split(';');
    if (!folderIds) {
        return;
    }
    const lastFolderId = folderIds[folderIds.length - 1];
    await axios.get(`${token.serverUrl}/api/http/projects/id:${route.query.projectId}/documents/folders/${lastFolderId}/${props.type}`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    }).then((res) => {
        data.data = res.data.data as InterfaceItem[];
    });
}

const fetchDocuments = async () => {
    const token = await getToken();
    const folderIds = route.query.folderId?.toString().split(';');
    if (!folderIds) {
        return;
    }
    const lastFolderId = folderIds[folderIds.length - 1];
    await axios.get(`${token.serverUrl}/api/http/projects/id:${route.query.projectId}/documents/folders/${lastFolderId}/documents`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    }).then((res) => {
        data.files = res.data.data.filter((obj: InterfaceItem) => obj.title) as InterfaceItem[];
    });
}

fetchFolders();
fetchDocuments();

watch(() => route.query, () => {
    fetchFolders();
    fetchDocuments();
})

const openProject = (obj: any) => {
    router.push({
        name: 'home',
        query: {
            ...route.query,
            ...obj
        },
    })
}
const goBack = () => {
    const folderIds = route.query.folderId?.toString().split(';');
    if (!folderIds) {
        return;
    }
    folderIds.pop();
    openProject({folderId: folderIds?.join(';')})

}

const isActive = (item: InterfaceItem) => {
    if (!item) {
        return false;
    }
    const id: string = item.id;
    if (id) {
        return false;
    }
    if (!route.query.folderId) {
        return false;
    }
    return route?.query?.folderId?.indexOf(id) > -1 ?? false;
}


</script>
<template>
    <ul>
        <li>
            <div v-if="route.query.folderId !== 'root'" class="middle" @click="goBack">
                <FolderUp color="black" width="20"/>
                ...
            </div>
        </li>
        <li v-for="item in data.data">
            <div @click="()=> {
                        openProject({folderId: `${route.query.folderId};id:${item.id}`})
                }"
                 :class="{'active': isActive(item), 'middle': true}">
                <Folder color="black" width="20"/>
                {{ item.name }}
            </div>
        </li>
        <li v-for="(item) in data.files">
            <div :class="{'active': route.query.documentId == item.id, 'middle': true}"
                 @click="()=> {
                openProject({documentId: item.id})
                }">
                <div class="icon-ocntainer">
                    <File color="black" width="15"/>
                </div>
                <div>
                    {{ item.title }}
                </div>
            </div>
        </li>
    </ul>
</template>
<style scoped>
ul {
    list-style: none;
    margin-left: 10px;
    padding-left: 0;
}

.icon-ocntainer {
    margin-right: 5px;
}

div.active {
    font-weight: bold;
}

.middle {
    display: flex;
    align-content: center;
}

li {
    list-style: none;
    cursor: pointer;
}

li > div {
    padding: 5px 15px;
}
</style>