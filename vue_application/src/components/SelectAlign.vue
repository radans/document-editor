<script setup lang="ts">
import AlignLeft from "./icons/AlignLeft.vue";
import AlignCenter from "./icons/AlignCenter.vue";
import AlignRight from "./icons/AlignRight.vue";
import AlignJustify from "./icons/AlignJustify.vue";
//@ts-ignore
import Dropdown from "v-dropdown";

const props = defineProps<{ editor: any }>();
</script>
<template>
    <Dropdown>
        <template #trigger class="holder">
            <AlignLeft v-if="props.editor.isActive({ textAlign: 'left' })" color="transparent" width="20"/>
            <AlignCenter v-if="props.editor.isActive({ textAlign: 'center' })" color="transparent" width="20"/>
            <AlignRight v-if="props.editor.isActive({ textAlign: 'right' })" color="transparent" width="20"/>
            <AlignJustify v-if="props.editor.isActive({ textAlign: 'justify' })" color="transparent" width="20"/>
        </template>
        <div class="dropdown-items">
            <div @click="() => {
                props.editor.chain().focus().setTextAlign('left').run();
            }"
                 class="drowdown-item"
            >
                <AlignLeft color="transparent" width="20"/>
                Align left
            </div>
            <div @click="() => {
                props.editor.chain().focus().setTextAlign('center').run();
            }"
                 class="drowdown-item"
            >
                <AlignCenter color="transparent" width="20"/>
                Align center
            </div>
            <div @click="() => {
                props.editor.chain().focus().setTextAlign('right').run();
            }"
                 class="drowdown-item"
            >
                <AlignRight color="transparent" width="20"/>
                Align right
            </div>
            <div @click="() => {
                props.editor.chain().focus().setTextAlign('justify').run();
            }"
                 class="drowdown-item"
            >
                <AlignJustify color="transparent" width="20"/>
                Align justify
            </div>
        </div>
    </Dropdown>
</template>