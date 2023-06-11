<script setup lang="ts">
import {watch} from 'vue'
import axios from "axios";
import {useRoute} from "vue-router";
import {useEditor, EditorContent} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
// @ts-ignore
import {Markdown as MarkDownExtension} from 'tiptap-markdown';
import {TableRow} from "@tiptap/extension-table-row";
import {TableHeader} from "@tiptap/extension-table-header";
import {TableCell} from "@tiptap/extension-table-cell";
import getToken from "../../../store/getToken.ts";
import Header from "../../../components/Header.vue";
import {TextAlign} from "@tiptap/extension-text-align";
import customComment from "@rcode-link/tiptap-comments";
import drawIoExtension from '@rcode-link/tiptap-drawio';
import store from "../../../store";
import OutterComment from "../../../components/comment/OutterComment.vue";
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all highlight.js languages
import {lowlight} from 'lowlight'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import tableExtension from "../../../components/extensions/tableExtension.ts";

const route = useRoute();

watch(() => route.query, () => {
    fetchData()
})


watch(() => store?.state.editDocument, () => {
    editor.value?.setEditable(store?.state.editDocument ?? false);
})
const editor = useEditor({
    content: '# Content',
    editable: store?.state.editDocument,
    extensions: [
        StarterKit,
        customComment.configure({
            user: {
                firstName: store.state.user.name.firstName,
                lastName: store.state.user.name.lastName,
                id: store.state.user.id
            }
        }),
        tableExtension.configure({
            resizable: true,
            allowTableNodeSelection: true
        }),
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
        TableRow,
        TableHeader,
        drawIoExtension.configure({
            HTMLAttributes: undefined,
            allowBase64: false,
            inline: false,
            openDialog: 'dblclick'
        }),
        TableCell,
        CodeBlockLowlight.configure({
            lowlight,
        }),
        // BubbleMenu.configure({
        //     pluginKey: new PluginKey('bubbleMenuOne'),
        //     shouldShow: ({editor}) => {
        //         console.log('table', editor.isActive('table'))
        //         return editor.isActive('table');
        //     }
        // }),
        // @ts-ignore
        MarkDownExtension,
    ],

    onCreate({editor}) {
        store.actions.findComments(editor)
    },

})

const fetchData = async () => {
    if (!route.query.documentId) {
        return;
    }
    const token = await getToken();
    store.actions.clearComments();
    await axios.get(`${token.serverUrl}/api/http/projects/id:${route.query.folder}/documents/${route.query.documentId}?$fields=documentBody`, {
        headers: {
            'Authorization': `Bearer ${token.token}`, 'Accept': 'application/json'
        }
    }).then((res) => {
        editor.value?.commands.clearContent()

        try {
            if (editor.value) {
                editor.value.commands.setContent(JSON.parse(res.data.documentBody.text).content, true);
                editor.value.storage.comment.comments = JSON.parse(res.data.documentBody.text).storage.comments;
            }
        } catch (e) {
            editor.value?.commands.setContent(res.data.documentBody.text, true);
        }

    });
}

watch(() => route.query.documentId, () => {
    store?.actions?.setValueShowFilesTree(false);
    store?.actions?.setValueShowComments(false);
})
fetchData();
</script>

<template>
    <div class="editor-container">
        <Header :editor="editor"/>
        <editor-content :editor="editor"/>
    </div>
    <OutterComment :editor="editor" v-if="store?.state?.showComments"/>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
