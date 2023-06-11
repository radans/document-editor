import getToken from "../../store/getToken.ts";
import axios from "axios";
import store from "../../store";

export interface MenuItem {
    name: string,
    id: string,
    type: "project" | "folder" | 'subfolders' | 'file',
    parentId: string | null,
    projectId: string | null
}

export const loadProjects = async () => {
    const token = await getToken();
    const response = await axios.get(`${token.serverUrl}/api/http/projects`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    });
    return response.data.data.map((obj: any) => {
        return {
            type: 'project',
            id: obj.id,
            name: obj.name,
            parentId: null
        } as MenuItem
    });
}
export const fetchFolders = async (route: any) => {
    const token = await getToken();
    const folderIds = route.query.folderId?.toString().split(';');
    if (!folderIds) {
        return;
    }
    const lastFolderId = folderIds[folderIds.length - 1];
    const folderType = folderIds.length === 0 ? 'folder' : 'subfolders';
    const response = await axios.get(`${token.serverUrl}/api/http/projects/id:${route.query.projectId}/documents/folders/${lastFolderId}/${folderType}`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    })

    return response.data.data.map((obj: any) => {
        return {
            type: folderType,
            id: obj.id,
            projectId: route.query.projectId,
            name: obj.name,
            parentId: lastFolderId === 'root' ? route.query.projectId : lastFolderId.replace('id:', '')
        } as MenuItem
    });
}

export const fetchDocuments = async (route: any) => {
    const token = await getToken();
    const folderIds = route.query.folderId?.toString().split(';');
    if (!folderIds) {
        return;
    }
    const lastFolderId = folderIds[folderIds.length - 1];
    const response = await axios.get(`${token.serverUrl}/api/http/projects/id:${route.query.projectId}/documents/folders/${lastFolderId}/documents`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    });
    return response.data.data.map((obj: any) => {
        return {
            type: 'file',
            id: obj.id,
            projectId: route.query.projectId,
            name: obj.title,
            parentId: lastFolderId === 'root' ? route.query.projectId : lastFolderId.replace('id:', '')
        } as MenuItem
    });
}

export const createDocument = async (folder: MenuItem, docName: string) => {

    const token = await getToken();
    const response = await axios.post(`${token.serverUrl}/api/http/projects/id:${folder.projectId}/documents`, {
        "name": docName,
        "folder": folder.id,
        "bodyIn": {
            "className": "TextDocumentBodyCreateTypedIn",
            "docContent": {
                "className": "MdTextDocumentContent",
                "markdown": ""
            }
        }
    }, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    });
    return [{
        type: 'file',
        id: response.data.id,
        name: response.data.title,
        parentId: folder.id,
        projectId: folder.projectId
    } as MenuItem]
}

export const createFolder = async (folder: MenuItem, docName: string) => {
    const token = await getToken();

    const folderId = folder.type === 'project' ? 'root' : `id:${folder.id}`;
    const response = await axios.post(`${token.serverUrl}/api/http/projects/id:${folder.type === 'project' ? folder.id : folder.projectId}/documents/folders`, {
        "name": docName,
        "parentFolder": folderId,
    }, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    });
    return [{
        type: 'folder',
        id: response.data.id,
        name: response.data.name,
        parentId: folder.id,
        projectId: folder.projectId
    } as MenuItem]
}

export const deleteFileOrFolder = async (item: MenuItem, doc: string) => {
    const token = await getToken();
    await axios.delete(`${token.serverUrl}/api/http/projects/${item.type === 'project' ? item.id : item.projectId}/documents/${doc}${item.id}`, {
        headers: {
            'Authorization': `Bearer ${token.token}`,
            'Accept': 'application/json'
        }
    })
    store.actions.removeFromMenuList(item.id);
}