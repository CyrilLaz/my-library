const {
  getAllBooks,
  getBookById,
  createBook,
  editBook,
  deleteBook,
  downloadBookById,
} = require("../controllers/books");
const getFile = require("../middlewires/file");

const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.get("/:id/download", downloadBookById);
router.post("/", getFile.single("book-file"), createBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
