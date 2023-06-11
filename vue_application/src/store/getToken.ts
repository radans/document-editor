export interface tokenInterface {
    token: string,
    serverUrl: string
}

export default async (): Promise<tokenInterface> => {
    return new Promise((resolve) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = e => resolve(e.data);
        window.parent.postMessage({
            type: "GetUserTokenRequest",
            permissionScope: "global:Profile.View global:Project.View global:Documents.View global:Documents.Edit global:DocumentFolders.Create global:Documents.Archive    ",
            askForConsent: true
        }, "*", [channel.port2]);
    });
}