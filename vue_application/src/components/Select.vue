<script setup lang="ts">
//@ts-ignore
import Dropdown from "v-dropdown";

const props = defineProps<{ editor: any }>();
</script>
<template>
    <Dropdown>
        <!-- trigger element -->
        <template #trigger>
            <button type="button">
                {{ props.editor.isActive('paragraph') == true ? 'Paragraph' : '' }}
                {{ props.editor.isActive('heading', {level: 1}) == true ? 'Heading 1' : '' }}
                {{ props.editor.isActive('heading', {level: 2}) == true ? 'Heading 2' : '' }}
                {{ props.editor.isActive('heading', {level: 3}) == true ? 'Heading 3' : '' }}
                {{ props.editor.isActive('heading', {level: 4}) == true ? 'Heading 4' : '' }}
                {{ props.editor.isActive('heading', {level: 5}) == true ? 'Heading 5' : '' }}
                {{ props.editor.isActive('heading', {level: 6}) == true ? 'Heading 6' : '' }}
            </button>
        </template>
        <!-- contents display in dropdown -->
        <div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().setParagraph().run()
                             }"
            >
                Paragraph
            </div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().toggleHeading({ level: 1 }).run()
                             }"
            >
                Heading 1
            </div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().toggleHeading({ level: 2 }).run()
                             }"
            >
                Heading 2
            </div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().toggleHeading({ level: 3 }).run()
                             }"
            >
                Heading 3
            </div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().toggleHeading({ level: 4 }).run()
                             }"
            >
                Heading 4
            </div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().toggleHeading({ level: 5 }).run()
                             }"
            >
                Heading 5
            </div>
            <div class="drowdown-item"
                 @click="() => {
                                 props.editor.chain().focus().toggleHeading({ level: 6 }).run()
                             }"
            >
                Heading 6
            </div>
        </div>
    </Dropdown>
</template>
<!--<template>-->
<!--    <Dropdown>-->
<!--        <template #trigger class="holder">-->
<!--            <button>-->
<!--                {{ props.editor.isActive('paragraph') === true ? 'p' : '' }}-->
<!--                {{ props.editor.isActive('heading', {level: 1}) == true ? 'H1' : '' }}-->
<!--                {{ props.editor.isActive('heading', {level: 2}) == true ? 'H2' : '' }}-->
<!--                {{ props.editor.isActive('heading', {level: 3}) == true ? 'H3' : '' }}-->
<!--                {{ props.editor.isActive('heading', {level: 4}) == true ? 'H4' : '' }}-->
<!--                {{ props.editor.isActive('heading', {level: 5}) == true ? 'H5' : '' }}-->
<!--                {{ props.editor.isActive('heading', {level: 6}) == true ? 'H6' : '' }}-->
<!--            </button>-->
<!--        </template>-->
<!--        <div class="drop-down-items">-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().setParagraph().run()-->
<!--                 }"-->
<!--            >-->
<!--                Paragraph-->
<!--            </div>-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().toggleHeading({ level: 1 }).run()-->
<!--                 }"-->
<!--            >-->
<!--                Heading 1-->
<!--            </div>-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().toggleHeading({ level: 2 }).run()-->
<!--                 }"-->
<!--            >-->
<!--                Heading 2-->
<!--            </div>-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().toggleHeading({ level: 3 }).run()-->
<!--                 }"-->
<!--            >-->
<!--                Heading 3-->
<!--            </div>-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().toggleHeading({ level: 4 }).run()-->
<!--                 }"-->
<!--            >-->
<!--                Heading 4-->
<!--            </div>-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().toggleHeading({ level: 5 }).run()-->
<!--                 }"-->
<!--            >-->
<!--                Heading 5-->
<!--            </div>-->
<!--            <div class="dropdown-item"-->
<!--                 @click="() => {-->
<!--                     props.editor.chain().focus().toggleHeading({ level: 6 }).run()-->
<!--                 }"-->
<!--            >-->
<!--                Heading 6-->
<!--            </div>-->
<!--        </div>-->
<!--    </Dropdown>-->
<!--</template>-->