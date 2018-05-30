const express = require("express");
const config=require("config");
const router = express.Router();
const Client = require('node-rest-client').Client;
const jwt = require('jsonwebtoken');
let client = new Client();
const baseUrl=config.get("userProductService.baseUrl")
const resourceUrl=config.get("userProductService.routes.loginUrl");





router.post(`${resourceUrl}`, (req, res) => {

    let args = {
        headers: { "Content-Type": "application/json" },
        data: req.body
    };

    // client.post(`${baseUrl}${resourceUrl}`,args, function (data) {
    //     return res.send(data);
    // });
    return res.send(jwt.sign({ foo: "bar" }, "nesto"));
});





module.exports = router;