const {
  getBookById,
  createBook,
  editBook,
  deleteBook,
  downloadBookById,
  getAllBooks,
} = require("../../controllers/books");
const uploadFile = require("../../middlewares/file");

const router = require("express").Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.get("/:id/download", downloadBookById);
router.post("/", uploadFile.single("book-file"), createBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
