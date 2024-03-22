/**
 *@typedef {import("../types").TController} TController
 */
const { Book } = require("../models/Book.js");

/**@type TController */
const getBookById = (req, res) => {
  const { id } = req.params;

  const book = req.db.books.find((book) => book.id === id);
  if (!book) {
    res.status(404).send();
    return;
  }
  res.sendFile(book.fileBook);
};

/**@type TController */
const createBook = (req, res, next) => {
  if (!req.file) {
    res.status(400).json({ error: "No File" });
    return;
  }
  const { body, file, db } = req;
  const newBook = new Book({
    ...body,
    fileName: file.originalname,
    fileBook: file.path,
  });
  db.books.push(newBook);

  res.redirect("/books");
};

/**@type TController */
const downloadBookById = (req, res, next) => {
  const { id } = req.params;

  const file = req.db.books.find((book) => book.id === id);

  if (!file) {
    res.status(404).send({ error: "file not exist" });
    return;
  }
  res.download(file.fileBook, file.fileName, (err) => {
    if (err) {
      res.status(500).send({ error: "Error File" });
    }
  });
};
/**@type TController */
const editBook = (req, res) => {
  const { id } = req.params;
  const { body, db } = req;
  const idx = db.books.findIndex((book) => book.id === id);

  if (!~idx) {
    res.status(404).send();
    return;
  }
  if (!body.favorite) {
    body.favorite = false;
  }
  db.books[idx] = { ...db.books[idx], ...body };
  res.redirect(`/books/${db.books[idx].id}`);
};

/**@type TController */
const deleteBook = (req, res) => {
  const { id } = req.params;
  const idx = db.books.findIndex((book) => book.id === id);

  if (!~idx) {
    res.status(404).send();
    return;
  }
  db.books.splice(idx, 1);
  res.send("ok");
};

module.exports = {
  downloadBookById,
  getBookById,
  createBook,
  editBook,
  deleteBook,
};
