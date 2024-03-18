"use strict";
const express = require("express");
const { routers } = require("./routers");
const { DEV_MODE, PORT } = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routers);

// app.use(handleErrors);

app.listen(PORT, () => {
  DEV_MODE && console.log("Приложение запущено на порту", PORT);
});
