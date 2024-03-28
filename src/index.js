"use strict";
const express = require("express");
const path = require("path");
const fs = require("fs");
const { routers } = require("./routers");
const { DEV_MODE, PORT, UPLOAD_FOLDER } = require("./config");
const { db } = require("./middlewares/db-middleware");
const app = express();

fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use("/", db, routers);

// app.use(handleErrors);

app.listen(PORT, () => {
  DEV_MODE && console.log("Приложение запущено на порту", PORT);
});
