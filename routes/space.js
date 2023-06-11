var express = require('express');
const axios = require("axios");
const pluginInstallation = require("../space/pluginInstallation");
var router = express.Router();

router.post('/auth', async (req, res) => {
    const {clientId, clientSecret, serverUrl, className} = req.body;
    const bearer = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    try {
        console.log({
            body: req.body
        })
        switch (className) {
            case 'ApplicationUninstalledPayload':
                break;
            case 'InitPayload':
                await pluginInstallation(serverUrl, bearer);
                break;
        }
        res.json({response: 'ok'})

    } catch (e) {
        console.log(e.response.data, e.response.status);
        res.status(500);
    }
})

module.exports = router;