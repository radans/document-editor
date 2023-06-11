var express = require('express');
const axios = require("axios");
const {vueDir} = require("../helpers");
const pluginInstallation = require("../space/pluginInstallation");
var router = express.Router();

/* GET home page. */
/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile(vueDir + "index.html");
});
router.get('/iframe/app-homepage', function (req, res, next) {
    res.sendFile(vueDir + "index.html");
});

router.post('/', async (req, res) => {
    const {clientId, clientSecret, serverUrl} = req.body;
    const bearer = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    try {
        console.log({
            body: req.body
        })
        await pluginInstallation(serverUrl, bearer);

        res.json({response: 'ok'})

    } catch (e) {
        console.log(e.response.data, e.response.status);
        res.status(500);
    }
})
module.exports = router;
