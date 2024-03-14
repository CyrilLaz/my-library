"use strict";
const fs = require("fs");
const express = require("express");
const { routers } = require("./routers");
const { UPLOAD_FOLDER, DEV_MODE, PORT } = require("./config");

const app = express();

fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers);

// app.use(handleErrors);

app.listen(PORT, () => {
  DEV_MODE && console.log("Приложение запущено на порту", PORT);
});
