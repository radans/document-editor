<script lang="ts">
import type {ToastOptions} from 'vue3-toastify';
import type {PropType} from 'vue';

export default {
    name: 'Msg',
    props: {
        deleteComment: Function,
        closeToast: Function as PropType<(e?: MouseEvent) => void>,
        toastProps: Object as PropType<ToastOptions>,
    },
};
</script>

<template>
    <div>
        <h4>Are you sure you want to delete this comment?</h4>
        <div class="flex gap-2">
            <button
                    class="accent-outer"
                    @click="($event) => { closeToast && closeToast($event) }"
            >
                No
            </button>
            <button
                    class="accent"
                    @click="($event) => {
                    closeToast && closeToast($event)
                    if(deleteComment){
                        deleteComment()
                    }
                }"
            >
                Yes
            </button>
        </div>
    </div>
</template>