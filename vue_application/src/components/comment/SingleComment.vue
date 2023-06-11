<template>
    <div class="comment">
        <div class="comment-body">
            <div class="comment-details">
                <strong class="text-md">{{ obj.user.firstName }} {{
                    obj.user.lastName
                    }}</strong>

                <span class="text-sm">{{ formatDate(obj.date) }}</span>
            </div>
            <span class="content">{{ obj.comment }}</span>
            <div v-if="obj.parent_id" class="replay-to">
                Reply to: {{ obj.parent_title }}
            </div>
        </div>
        <div class="comment-options" v-if="!reply">
            <button class="accent-outer"
                    @click="() => showNotification()"
            >Delete
            </button>
            <button class="accent" @click="replyToThisComment">
                Replay
            </button>
        </div>
        <div v-if="reply" class="comment-reply">
            <input v-model="commentText"/>
            <div>
                <button
                        class="accent"
                        @click="replyToComment">
                    Reply
                </button>
                <button class="accent-outer" @click="() => reply = false">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {CommentInterface, Comment as PostCommentInterface} from "@rcode-link/tiptap-comments";
import {Editor} from "@tiptap/vue-3";

import {h, ref} from "vue";
import format from "date-fns/format";
import {toast} from "vue3-toastify";
import DeleteQuestion from "../notifications/DeleteQuestion.vue";

const {obj, editor, threadId} = defineProps<{ obj: CommentInterface, editor: Editor | undefined, threadId: string }>()

const commentText = ref<string>('');
const reply = ref<boolean>(false);

const dateTimeFormat = 'dd.MM.yyyy HH:mm'

const formatDate = (d: any) => (d ? format(new Date(d), dateTimeFormat) : null);

const replyToComment = () => {
    editor?.commands?.addComments({
        comment: commentText.value ?? null,
        parent_id: obj.uuid ?? null,
    } as PostCommentInterface)
    commentText.value = '';
    reply.value = false;
}

const replyToThisComment = () => {
    reply.value = true;
    if (editor) {
        editor.storage.comment.comment_id = threadId;
    }
}
const showNotification = () => {
    toast.error(
        ({closeToast, toastProps}) => h(DeleteQuestion, {closeToast, toastProps, deleteComment, comment: obj.comment}),
        {
            closeOnClick: false,
            autoClose: 8000,
            position: toast.POSITION.BOTTOM_RIGHT,
        },
    );
};
const deleteComment = () => {

    console.log({
        threadId, uuid: obj.uuid
    })
    if (obj.uuid != null) {
        editor?.commands?.removeSpecificComment(threadId, obj.uuid)
    }
}
</script>
<style>

.main-comment h2 {
    margin-top: 8px;
}

.main-comment .comment-details .text-sm {
    font-size: 8px;
    align-self: flex-end;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

input {
    border: 1px solid rgba(12, 12, 13, 0.2);
    border-radius: 5px;
    padding: 5px 5px;
    outline: none;
}

.text-sm {
    font-size: 0.5rem;
}

.comment-details {
    grid-area: details;
}

.comment-options {
    grid-area: options;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.comment-reply {
    grid-area: reply;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.comment {
    display: grid;
    margin-top: 10px;
    grid-template-columns: 6fr 1fr;
    gap: 5px;
    grid-template-areas: 'details options''reply reply';
}

h3 {
    padding-left: 5px;
}

.comment-details {
    display: flex;
    flex-direction: column;
}

.content {
    text-align: justify;
    max-height: 300px;
    overflow: auto;
    display: block;
}

.replay-to {
    font-size: 0.7rem;
    font-weight: bold;
}
</style>