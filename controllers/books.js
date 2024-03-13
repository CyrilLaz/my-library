/**
 *@typedef {import("../types").TController} TController
 */
const db = require("../db.js");
const { Book } = require("../models.js");

/**@type TController */
const getAllBooks = (req, res) => {
  res.send(db.books);
};

/**@type TController */
const getBookById = (req, res) => {
  const { id } = req.params;

  const book = db.books.find((book) => book.id === id);
  if (!book) {
    res.status(404).send();
    return;
  }
  res.send(book);
};

/**@type TController */
const createBook = (req, res) => {
  const { body } = req;

  const newBook = new Book(body);
  db.books.push(newBook);

  res.send(newBook);
};

/**@type TController */
const editBook = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const idx = db.books.findIndex((book) => book.id === id);

  if (!~idx) {
    res.status(404).send();
    return;
  }
  db.books[idx] = { ...db.books[idx], ...body };
  res.send(db.books[idx]);
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
  getAllBooks,
  getBookById,
  createBook,
  editBook,
  deleteBook,
};
