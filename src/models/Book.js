const { v4: uuid } = require("uuid");

class Book {
  /** @param {import('../../types').IBook} */
  constructor({
    id = uuid(),
    title = "",
    description = "",
    authors = "",
    favorite = false,
    fileCover = "",
    fileName = "",
    fileBook = "",
    countView = 0,
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
    this.countView = countView;
  }
}

module.exports = { Book };
