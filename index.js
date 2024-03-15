"use strict";
const fs = require("fs");
const express = require("express");
const { routers } = require("./routers");
const { UPLOAD_FOLDER, DEV_MODE, PORT } = require("./config");
const notFound = require("./controllers/404");
const { handleErrors } = require("./middlewires/handleErrors");
const app = express();

fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers);

app.use(notFound);

app.use(handleErrors);

app.listen(PORT, () => {
  DEV_MODE && console.log("Приложение запущено на порту", PORT);
});
