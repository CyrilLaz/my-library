"use strict";
const express = require("express");
const fs = require('fs')
const { routers } = require("./routers");
const { DEV_MODE, PORT,UPLOAD_FOLDER } = require("./config");
const { db } = require("./middlewares/db-middleware");
const app = express();
fs.mkdirSync(UPLOAD_FOLDER,{recursive: true})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", db, routers);

// app.use(handleErrors);

app.listen(PORT, () => {
  DEV_MODE && console.log("Приложение запущено на порту", PORT);
});
