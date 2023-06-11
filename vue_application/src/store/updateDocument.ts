import axios from 'axios';
import getToken from "./getToken.ts";
import {toast, ToastOptions} from "vue3-toastify";

export default async (content: any, storage: any, query: any) => {
    const token = await getToken();
    const response = await axios.patch(
        `${token.serverUrl}/api/http/projects/id:${query.projectId}/documents/${query.documentId}`,
        {
            'updateIn': {
                'className': 'TextDocumentBodyUpdateIn',
                'docContent': {
                    'className': 'MdTextDocumentContent',
                    'markdown': JSON.stringify({content, storage})
                }
            }
        },
        {
            headers: {
                'Authorization': `Bearer ${token.token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );

    if (response.status === 200) {
        toast.info("Document saved", {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
        } as ToastOptions);
        return 'ok';
    }

    toast.update("Something when wrong", {
        autoClose: 1000,
        position: toast.POSITION.BOTTOM_RIGHT,
    } as ToastOptions);
    return 'error'
}