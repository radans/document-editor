import {reactive, readonly} from "vue";
import {v4 as uuidv4} from "uuid";
import {MenuItem} from "../components/menu/scripts.ts";
import * as _ from "lodash";

export interface CommentInstance {
    uuid?: string
    comments?: any[]
}

export interface UserInterface {
    id: string,
    name: {
        firstName: string,
        lastName: string
    }
}

interface Actions {
    toggleShowFilesTree: object,
}

interface State {
    comments: any[],
    showCommentMenu: boolean,
    showAddCommentSection: boolean,
    activeCommentsInstance: CommentInstance,
    commentText: string,
    showFilesTree: boolean,
    showComments: boolean,
    showMenu: boolean,
    enableComments: boolean,
    showAddFileDialog: boolean,
    editDocument: boolean,
    user: UserInterface
    menuList: MenuItem[]
    selectedMenuItem: MenuItem | null
}

const store = reactive<State>({
    comments: [],
    showCommentMenu: false,
    showAddCommentSection: true,
    activeCommentsInstance: {},
    commentText: '',
    showFilesTree: true,
    showComments: false,
    enableComments: false,
    editDocument: false,
    showMenu: false,
    showAddFileDialog: false,
    selectedMenuItem: null,
    user: {
        id: '',
        name: {
            firstName: '',
            lastName: ''
        }
    },
    menuList: []
})

export interface Store {
    state: State,
    actions: Actions
}

// @ts-ignore
export default {
    state: readonly(store),
    actions: {
        insertMenuItemsToList(val: MenuItem[]) {
            store.menuList = _.uniqBy([...store.menuList, ...val], 'id')
        },
        removeFromMenuList(val: string) {
            store.menuList = store.menuList.filter((obj: MenuItem) => obj.id !== val);
        },
        toggleAddFileDialog() {
            store.showAddFileDialog = !store.showAddFileDialog;
        },
        setFolderForNewFile(val: MenuItem) {
            store.selectedMenuItem = val;
        },
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        setUser: (user: any) => {
            const {id, name} = user;
            store.user = {
                id,
                name
            }
        },
        toggleShowFilesTree: () => {
            store.showComments = false;
            store.showFilesTree = !store.showFilesTree;
        },
        toggleDocumentEditStatus: () => {
            store.editDocument = !store.editDocument;
        },
        setValueShowFilesTree: (value: boolean) => {
            store.showComments = false;
            store.showFilesTree = value;
        },
        toggleShowComments: () => {
            store.showFilesTree = false;
            store.showComments = !store.showComments;
        },
        setValueShowComments: (value: boolean) => {
            store.showFilesTree = false;
            store.showComments = value;
        },
        toggleWritingComments: () => {
            store.enableComments = !store.enableComments;
        },
        findComments: (editor: any) => {
            const tempComments: any[] = []

            editor.state.doc.descendants((node: any, pos: any) => {
                const {marks} = node

                marks.forEach((mark: any) => {
                    if (mark.type.name === 'comment') {
                        const markComments = mark.attrs.comment

                        const jsonComments = markComments ? JSON.parse(markComments) : null

                        if (jsonComments !== null) {
                            tempComments.push({
                                node,
                                jsonComments,
                                from: pos,
                                to: pos + (node.text?.length || 0),
                                text: node.text,
                            })
                        }
                    }
                })
            })

            store.comments = tempComments
        },
        clearComments() {
            store.comments = [];
        },
        toggleMenu: () => {
            store.showMenu = !store.showMenu;
        },
        // removeComment: (commentId: string) => {
        //
        // },
        setCurrentComment: (editor: any) => {
            const newVal = editor.isActive('comment')

            if (newVal) {
                setTimeout(() => (store.showCommentMenu = newVal), 50)

                store.showAddCommentSection = !editor.state.selection.empty

                const parsedComment = JSON.parse(editor.getAttributes('comment').comment)

                parsedComment.comment = typeof parsedComment.comments === 'string' ? JSON.parse(parsedComment.comments) : parsedComment.comments

                store.activeCommentsInstance = parsedComment
            } else {
                store.activeCommentsInstance = {}
            }
        },
        setComment: (editor: any, val?: string) => {
            const localVal = val || store.commentText;


            if (!localVal.trim().length) return

            const activeCommentInstance: CommentInstance = JSON.parse(JSON.stringify(store.activeCommentsInstance))

            const commentsArray = typeof activeCommentInstance.comments === 'string' ? JSON.parse(activeCommentInstance.comments) : activeCommentInstance.comments

            if (commentsArray) {
                commentsArray.push({
                    userName: `${store.user.name.firstName} ${store.user.name.lastName}`,
                    time: Date.now(),
                    content: localVal,
                })

                const commentWithUuid = JSON.stringify({
                    uuid: store.activeCommentsInstance.uuid || uuidv4(),
                    comments: commentsArray,
                })

                // eslint-disable-next-line no-unused-expressions
                editor?.chain().setComment(commentWithUuid).run()
            } else {
                const uuid = uuidv4();
                const commentWithUuid = JSON.stringify({
                    uuid,
                    comments: [{
                        userName: store.user,
                        time: Date.now(),
                        content: localVal,
                    }],
                })

                // eslint-disable-next-line no-unused-expressions
                editor?.chain().setComment(commentWithUuid).run()
            }
            store.commentText = ''
        }
    }
}