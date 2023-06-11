<script lang="ts" setup>
import store from '../../store/index.ts';
import {BubbleMenu, Editor} from "@tiptap/vue-3";
import {Comment as PostCommentInterface} from "@rcode-link/tiptap-comments";

const props = defineProps<{ editor: Editor }>()
import {ref} from "vue";

const commentTest = ref<string>()
</script>
<template>
    <BubbleMenu
            v-if="props.editor && store?.state?.enableComments"
            :tippy-options="{ duration: 100, placement: 'bottom' }"
            :editor="props.editor"
    >
        <div class="comment-container">
            <textarea
                    v-model="commentTest"
                    cols="30"
                    rows="4"
                    placeholder="Add new comment..."
            />

            <section class="flex justify-end gap-2">
                <button class="accent" @click="() => {
                    if(!commentTest){
                        return null;
                    }
                    props.editor.commands.addComments({
                        comment: commentTest
                        } as PostCommentInterface)
                commentTest = '';
                }">
                    Add &nbsp; <kbd> ⏎ </kbd>
                </button>
                <button class="accent-outer white-text" @click="() => commentTest = ''">
                    Clear
                </button>
            </section>
        </div>
    </BubbleMenu>
</template>
<style scoped>
.comment-container {
    background: white;
    border: 1px solid whitesmoke;
    border-radius: 5px;

}

textarea {
    border: 1px solid rgba(12, 12, 13, 0.2);
    border-radius: 5px;
    padding: 5px 5px;
    outline: none;
}
</style>