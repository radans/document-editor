const axios = require("axios");

async function pluginInstallation(serverUrl, bearer) {
    const response = await axios.post(`${serverUrl}/oauth/token`,
        new URLSearchParams({
            'grant_type': 'client_credentials'
        }), {
            headers: {
                'Authorization': `Basic ${bearer}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    const addedExtension = await axios.patch(
        `${serverUrl}/api/http/applications/ui-extensions`,
        {
            'contextIdentifier': 'global',
            'extensions': [
                {
                    'className': 'ApplicationHomepageUiExtensionIn',
                    'iframeUrl': 'https://space-documents.rcode.link'
                },
                {
                    'className': 'TopLevelPageUiExtensionIn',
                    'displayName': 'Documents',
                    'uniqueCode': `${Number(Math.random() * 1000).toFixed(0)}`,
                    'iframeUrl': 'https://space-documents.rcode.link'
                }
            ]
        },
        {
            headers: {
                'Authorization': `Bearer ${response.data.access_token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    );
}

module.exports = pluginInstallation