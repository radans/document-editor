<template>
    <section class="outer-comment-container">
        <h3>All comments</h3>
        <article
                v-for="(comment, i) in editor?.storage?.comment.comments"
                :key="i + 'external_comment'"
                :class="{'active': editor?.storage?.comment.comment_id === comment.threadId, 'thread': true}"
        >
            <article
                    v-for="obj in comment.comments"
                    class="sub-comment"
            >
                <SingleComment :editor="editor" :key="obj.uuid" :threadId="comment.threadId" :obj="obj"/>
            </article>

        </article>
    </section>
</template>

<script setup lang="ts">
import {Editor} from "@tiptap/vue-3";
import SingleComment from "./SingleComment.vue";

const {editor} = defineProps<{ editor: Editor | undefined }>()

</script>


<style>
.outer-comment-container {
    background: white;
}

.main-comment {
    min-width: 300px;
}

.main-comment h2 {
    margin-top: 8px;
}

.main-comment.active {
    border: 1px solid gray;
}

.main-comment .comment-details .text-md {
    align-self: flex-start;
}

.main-comment .comment-details {
    display: flex;
    justify-content: space-between;
    gap: 4px;
}

.main-comment {
    transition: all 0.1s ease-in-out;
    border-bottom: 1px solid gray;
    padding: 1rem;
    margin: 1rem;
    backdrop-filter: blur(5px);
}

.sub-comment {
    width: 100%;
}


.comments-container {
    padding-top: 15px;
    z-index: 999;
}

.thread {
    margin: 5px;
    border-radius: 5px;
    transition: all .2s ease-in;
    padding: 5px;
    border: 1px solid rgba(12, 12, 13, .2);
}

.thread.active {
    border: 1px solid black;
    transform: translateX(-20px);
    background: white;
    transition: all .2s ease-out;
}

h3 {
    padding-left: 15px;
    margin: 0;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid rgba(12, 12, 13, .2);
    border-left: 1px solid rgba(12, 12, 13, .2);
}
</style>