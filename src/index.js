"use strict";
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { routers } = require("./routers");
const { PORT, NODE_ENV, MONGO_URL } = require("./config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", routers);

// app.use(handleErrors);

(async () => {
  try {
    await mongoose.connect(MONGO_URL);
    if (NODE_ENV === "production") {
      app.listen(PORT);
    } else {
      app.listen(PORT, () => {
        console.log("Приложение запущено на порту", PORT);
      });
    }
  } catch (error) {
    console.log(error);
  }
})();
