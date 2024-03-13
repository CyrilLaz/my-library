"use strict";

const express = require("express");
const { routers } = require("./routers");

const { PORT = 3000, DEV_MODE = true } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routers);

app.listen(PORT, () => {
  DEV_MODE && console.log("Приложение запущено на порту", PORT);
});
