import express from 'express'

const server = require('express');
const router = server.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});
module.exports = router;
