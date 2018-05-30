"use strict";

const express = require("express");
const bodyParser=require("body-parser");
const config=require("config");
const port=config.get("port");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./routes/login"));
app.use(require("./security/tokenMiddleware"));
app.use(require("./routes/products"));
app.use(require("./routes/users"));


app.listen(port, () => console.log(`Listening on port ${port}...`));

