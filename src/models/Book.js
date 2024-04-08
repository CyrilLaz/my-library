const { Schema, model } = require("mongoose");

const bookScheme = new Schema({
  __v: { type: Number, select: false },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  authors: { type: String, default: "" },
  favorite: { type: Boolean, default: false },
  fileCover: { type: String },
  fileName: { type: String },
});

module.exports.Book = model("Book", bookScheme);
