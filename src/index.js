"use strict";
const express = require("express");
const path = require("path");
const { routers } = require("./routers");
const { PORT, NODE_ENV } = require("./config");
const { db } = require("./middlewares/db-middleware");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", db, routers);

// app.use(handleErrors);

if (NODE_ENV === "production") {
  app.listen(PORT);
} else {
  app.listen(PORT, () => {
    console.log("Приложение запущено на порту", PORT);
  });
}
