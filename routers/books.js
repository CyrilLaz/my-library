const {
  getAllBooks,
  getBookById,
  createBook,
  editBook,
  deleteBook,
} = require("../controllers");

const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
