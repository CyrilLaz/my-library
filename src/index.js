"use strict";
const mongoose = require('mongoose')
const express = require("express");
const { routers } = require("./routers");
const { PORT, MONGO_URL, NODE_ENV } = require("./config");
const notFound = require("./controllers/404");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routers);

app.use(notFound);

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