<script setup lang="ts">
//@ts-ignore
import Dropdown from "v-dropdown";
import Swal from 'sweetalert2'
import {createDocument, createFolder, deleteFileOrFolder, MenuItem} from "./scripts.ts";
import store from "../../store";

const props = defineProps<{
    itemType: MenuItem
}>()

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'accent button-with-text',
        cancelButton: 'danger-outer button-with-text'
    },
    buttonsStyling: false
})


const delFile = () => {
    //@ts-ignore
    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: `You are about to delete  ${props.itemType.name} ${props.itemType.type === 'file' ? ' file' : ' folder'}`,
        showCancelButton: true,
    }).then(result => {
        if (result.value) {
            deleteFileOrFolder(props.itemType, props.itemType.type === 'file' ? '' : 'folders/')
        }
    })
}

const createFile = () => {
    //@ts-ignore
    swalWithBootstrapButtons.fire({
        title: 'Create new document',
        input: 'text',
        inputLabel: 'Enter document name',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
    }).then(res => {
        if (res.isConfirmed) {
            createDocument(props.itemType, res.value).then((val) => {
                store.actions.insertMenuItemsToList(val);
            })
        }
    })
}
const addFolder = () => {
    //@ts-ignore
    swalWithBootstrapButtons.fire({
        title: 'Create new folder',
        input: 'text',
        inputLabel: 'Enter folder name',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
        }
    }).then(res => {
        if (res.isConfirmed) {
            createFolder(props.itemType, res.value).then((val) => {
                store.actions.insertMenuItemsToList(val);
            })
        }
    })
}
</script>
<template>
    <div>
        <Dropdown>
            <!-- trigger element -->
            <template #trigger>
                <div>...</div>
            </template>
            <!-- contents display in dropdown -->
            <div>
                <div v-if="['project', 'folder', 'subfolders'].indexOf(itemType.type) > -1"
                     @click="() => addFolder()"
                     class="drowdown-item">
                    Create Folder
                </div>
                <div v-if="['folder', 'subfolders'].indexOf(itemType.type) > -1" class="drowdown-item"
                     @click="() => createFile()">
                    Create Document
                </div>
                <hr v-if="['folder', 'subfolders', 'file'].indexOf(itemType.type) > -1">
                <div class="drowdown-item text-red" @click="() => delFile()">Delete {{
                    itemType.type === 'file' ? 'document' : 'folder'
                    }}
                </div>
            </div>
        </Dropdown>

    </div>
</template>