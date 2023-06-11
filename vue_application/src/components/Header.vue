<script setup lang="ts">
import Select from "./Select.vue";
import Code from "./icons/Code.vue";
import BuletList from "./icons/BuletList.vue";
import OrderdList from "./icons/OrderdList.vue";
import HorizontalRule from "./icons/HorizontalRule.vue";
import Break from "./icons/Break.vue";
import Undo from "./icons/Undo.vue";
import Redo from "./icons/Redo.vue";
import Stroke from "./icons/Stroke.vue";
import Bold from "./icons/Bold.vue";
import SetComment from "./comment/SetComment.vue";
import SaveDocument from "./SaveDocument.vue";
import SelectAlign from "./SelectAlign.vue";
import store from "../store";
import Edit from "./icons/Edit.vue";
import Eye from "./icons/Eye.vue";
import AddComment from "./icons/AddComment.vue";
import SeeComments from "./icons/SeeComments.vue";
import Flow from "./icons/Flow.vue";
import TableMenu from "./TableMenu.vue";
import BurgerMenu from "./icons/BurgerMenu.vue";

const props = defineProps<{ editor: any }>();
</script>
<template>
    <div class="menu-items flex-wrap" v-if="props.editor">
        <SetComment :editor="editor"/>
        <div class="flex-wrap">
            <button v-if="store.actions.isMobile()" @click="() => store.actions.toggleMenu()"
                    class="toggle-mobile-menu">
                <BurgerMenu color="black" width="20"/>
            </button>
            <SeeComments
                    title="Show all comments" @click="store.actions.toggleShowComments()"
                    :color="store?.state?.showComments ? 'gray' : 'black'" width="20"/>
            <div class="flex flex-wrap gap-2" v-if="store.state.editDocument">
                <AddComment :color="store.state.enableComments ? 'gray' : 'black'" width="20"
                            @click="() => {
                     editor.commands.focus();
                     store.actions.toggleWritingComments()
                        }"
                            title="Enable / Disable comments"
                />
                <div class="devider"></div>
                <Stroke color="" width="20" @click="props.editor.chain().focus().toggleStrike().run()"
                        :disabled="!props.editor.can().chain().focus().toggleStrike().run()"
                        :class="{ 'is-active': props.editor.isActive('strike') }"/>
                <Bold color="black" width="20"
                      @click="props.editor.chain().focus().toggleBold().run()"
                      :disabled="!props.editor.can().chain().focus().toggleBold().run()"
                      :class="{ 'is-active': props.editor.isActive('bold') }"
                />
                <div class="devider"></div>
                <SelectAlign :editor="editor"/>
                <div class="devider"></div>
                <Select :editor="editor"/>
                <div class="devider"></div>
                <BuletList color="black" width="20" @click="props.editor.chain().focus().toggleBulletList().run()"
                           :class="{ 'is-active': props.editor.isActive('bulletList') }"/>
                <OrderdList color="black" width="20" @click="props.editor.chain().focus().toggleOrderedList().run()"
                            :class="{ 'is-active': props.editor.isActive('orderedList') }"/>
                <div class="devider"></div>
                <Code width="20" color="black" @click="props.editor.chain().focus().toggleCodeBlock().run()"
                      :class="{ 'is-active': props.editor.isActive('codeBlock') }"/>
                <div class="devider"></div>
                <HorizontalRule color="black" width="20"
                                @click="props.editor.chain().focus().setHorizontalRule().run()"/>
                <Break color="black" width="20" @click="props.editor.chain().focus().setHardBreak().run()"/>
                <div class="devider"></div>
                <TableMenu :editor="editor"/>
                <div class="devider"></div>
                <Flow color="" width="20" title="Insert workflow chart" @click="props.editor.commands.insertDrawIo()"/>
                <div class="devider"></div>
                <Undo color="black" width="20" @click="props.editor.chain().focus().undo().run()"
                      :disabled="!props.editor.can().chain().focus().undo().run()"/>
                <Redo color="black" width="20" @click="props.editor.chain().focus().redo().run()"
                      :disabled="!props.editor.can().chain().focus().redo().run()"/>
            </div>

        </div>
        <div class="flex items-center flex-wrap">
            <SaveDocument v-if="store.state.editDocument" :editor="editor"/>
            <div>
                <button
                        class="flex"
                        @click="() => {
                store.actions.toggleDocumentEditStatus();
            }">
                    <div
                            class="accent button-with-text"
                            v-if="!store.state.editDocument"
                    >
                        <Edit color="white" width="20"/>
                    </div>
                    <div
                            class="accent-outer button-with-text"
                            v-if="store.state.editDocument"
                    >
                        <Eye color="dodgerblue" width="20"/>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>