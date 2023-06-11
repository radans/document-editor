<template>
    <div v-if="!store.actions.isMobile()">

        <h3 class="title">Projects </h3>
        <ul>
            <li v-for="obj in projects">
                <div @click="() => openProject(obj)">
                    {{ obj.name }}
                </div>
                <FileStructure v-if="route.query.projectId === obj.id" type="subfolders"/>
            </li>
        </ul>
    </div>
    <div v-if="store.state.showMenu && store.actions.isMobile()" class="mobile">
        <div class="title">
            <h3>Projects</h3>
            <button v-if="store.actions.isMobile()" @click="() => store.actions.toggleMenu()"
                    class="toggle-mobile-menu">
                <BurgerMenu color="black" width="20"/>
            </button>
        </div>
        <ul>
            <li v-for="obj in projects">
                <div @click="() => openProject(obj)">
                    {{ obj.name }}
                </div>
                <FileStructure v-if="route.query.projectId === obj.id" type="subfolders"/>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import axios from "axios";
import getToken from "../../store/getToken.ts";
import {useRoute, useRouter} from "vue-router";
import FileStructure from "./FileStructure.vue";
import store from "../../store";
import BurgerMenu from "../icons/BurgerMenu.vue";

const router = useRouter()
const route = useRoute()
const projects = ref()

const loadProjects = async () => {
    const token = await getToken();
    const response = await axios.get(`${token.serverUrl}/api/http/projects`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    });
    projects.value = response.data.data;
}
loadProjects();

const openProject = (obj: any) => {
    router.push({
        name: 'home',
        query: {
            projectId: obj.id,
            folderId: 'root'
        },
    })
}
</script>

<style scoped>
ul {
    list-style: none;
    margin-left: 0px;
    padding-left: 0;
}

li > ul {
    margin-left: 10px;

}

li {
    list-style: none;
    cursor: pointer;
}

li > div {
    padding: 5px 15px;
}

.title {
    margin: 0;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid rgba(12, 12, 13, .2);
    border-right: 1px solid rgba(12, 12, 13, .2);
    display: flex;
    justify-content: space-between;
}

.mobile {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 5;
}
</style>