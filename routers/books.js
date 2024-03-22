/**
 *@typedef {import("../types").TController} TController
 */

const {
  createBook,
  editBook,
  downloadBookById,
} = require("../controllers/books");
const uploadFile = require("../middlewares/file");
const router = require("express").Router();

router.get("/", (req, res) => {
  const { books } = req.db;
  res.render("book/index", { books, title: "Список всех книг" });
});

router.get("/create", (req, res) => {
  res.render("book/create", { title: "Новая книга" });
});

router.get(
  "/:id",
  /** @type TController */ (req, res) => {
    const { id } = req.params;
    const { books } = req.db;
    const book = books.find((book) => book.id === id);
    if (!book) {
      res.status(404).send();
      return;
    }
    res.render("book/view", { title: "Информация о книге", book });
  }
);
router.get("/:id/download", downloadBookById);
router.get("/:id/update", /** @type TController */ (req, res) => {
  const { id } = req.params;
  const { books } = req.db;
  const book = books.find((book) => book.id === id);
  if (!book) {
    res.status(404).send();
    return;
  }
  res.render("book/update", { title: "Изменить информацию о книге", book });
});

router.post("/create", uploadFile.single("book-file"), createBook);
router.post("/:id/update", editBook);
// router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
