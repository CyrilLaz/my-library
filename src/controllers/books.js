/**
 *@typedef {import("../../types.js").TController} TController
 */
const { Book } = require("../models/Book.js");

/**@type TController */
const renderBookListView = (req, res) => {
  const { books } = req.db;
  res.render("book/index", { books, title: "Список всех книг" });
};

/**@type TController */
const renderCreateBookView = (req, res) => {
  res.render("book/create", { title: "Новая книга" });
};

/** @type TController */
const renderBookView = (req, res) => {
  const { id } = req.params;
  const { books } = req.db;
  const book = books.find((book) => book.id === id);
  if (!book) {
    res.status(404).send();
    return;
  }
  res.render("book/view", { title: "Информация о книге", book });
};

/** @type TController */
const renderUpdateBookView = (req, res) => {
  const { id } = req.params;
  const { books } = req.db;
  const book = books.find((book) => book.id === id);
  if (!book) {
    res.status(404).send();
    return;
  }
  res.render("book/update", { title: "Изменить информацию о книге", book });
};

/**@type TController */
const createBook = (req, res, next) => {
  const { body, db } = req;
    if (!body.title) {
      res.status(400).json({ error: "No Title" });
      return;
    }

  const newBook = new Book(body);
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
  renderUpdateBookView,
  renderBookView,
  renderCreateBookView,
  renderBookListView,
  downloadBookById,
  createBook,
  editBook,
  deleteBook,
};
