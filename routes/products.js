"use strict";

const express = require("express");
const config=require("config");
const router = express.Router();
const Client = require('node-rest-client').Client;

const client = new Client();
const baseUrl=config.get("userProductService.baseUrl");
const resourceUrl=config.get("userProductService.routes.productUrl");

router.get(resourceUrl, (req, res) => {
    client.get(`${baseUrl}${resourceUrl}`, function (data) {
        return res.send(data);
    });
});

router.get(`${resourceUrl}/:id`, (req, res) => {

    let args = {
        path: { "id": req.params.id }
    };

    client.get(`${baseUrl}${resourceUrl}/`+"${id}", args,function (data) {
        return res.send(data);
    });
});

router.post(`${resourceUrl}`, (req, res) => {

    let args = {
        headers: { "Content-Type": "application/json" },
        data: req.body
    };

    client.post(`${baseUrl}${resourceUrl}`,args, function (data) {
        return res.send(data);
    });
});


router.delete(`${resourceUrl}/:id`, (req, res) => {

    let args = {
        path: { "id": req.params.id }
    };

    client.delete(`${baseUrl}${resourceUrl}/`+"${id}",args, function (data) {
        return res.send(data);
    });
});

router.put(`${resourceUrl}`, (req, res) => {

    let args = {
        headers: { "Content-Type": "application/json" },
        data: req.body
    };

    client.put(`${baseUrl}${resourceUrl}`,args, function (data) {
        return res.send(data);
    });
});



module.exports = router;