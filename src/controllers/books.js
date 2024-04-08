/**
 *@typedef {import("../../types.js").TController} TController
 */
const { UPLOAD_FOLDER } = require("../config.js");
const { Book } = require("../models/Book.js");

/**@type TController */
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**@type TController */
const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      res.sendStatus(404);
      return;
    }
    res.send(book);
  } catch (error) {
    res.status(500).send(error);
  }
};

/**@type TController */
const createBook = async (req, res, next) => {
  const { body, file } = req;

  const newBook = new Book({ ...body, fileName: file.filename });
  try {
    await newBook.save();
    res.json(newBook.toObject());
  } catch (error) {
    res.status(500).json(error);
  }
};

/**@type TController */
const downloadBookById = async (req, res, next) => {
  const { id } = req.params;
  let book;
  try {
    book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ error: "file not exist" });
      return;
    }
  } catch (error) {
    res.status(500).json(error);
    return;
  }

  res.download(
    require("path").join(UPLOAD_FOLDER, book.fileName),
    book.fileName,
    (err) => {
      if (err) {
        res.status(500).send({ error: "Error File" });
      }
    }
  );
};

/**@type TController */
const editBook = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const book = await Book.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    });
    if (!book) {
      res.sendStatus(404);
      return;
    }
    await book.save();
    res.send(book.toObject());
  } catch (error) {
    res.status(500).json(error);
  }
};

/**@type TController */
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getBookById,
  getAllBooks,
  downloadBookById,
  createBook,
  editBook,
  deleteBook,
};
