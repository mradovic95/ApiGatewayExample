const express = require('express');
const config=require("config");

const router = express.Router();
const jwtSecret=config.get("security.jwtSecret");
const jwt = require('jsonwebtoken');



router.use("/", (req, res, next) => {

    console.log(req.headers.token);
    jwt.verify(req.headers.token, jwtSecret, (err, decodedToken) =>
    {
        //console.log(decodedToken);
        req.decodedToken=decodedToken;
        if (err || !decodedToken)
        {
            return res.status(401).send("Invalid token");
        }
        return next();
    });

});

module.exports = router;