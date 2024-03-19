const {
  getBookById,
  createBook,
  editBook,
  deleteBook,
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

router.post("/create", uploadFile.single("book-file"), createBook);
router.get("/:id", getBookById);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
