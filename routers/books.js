/**
 *@typedef {import("../types").TController} TController
 */

const {
  createBook,
  editBook,
  downloadBookById,
  renderBookListView,
  renderCreateBookView,
  renderBookView,
  renderUpdateBookView,
} = require("../controllers/books");
const uploadFile = require("../middlewares/file");
const router = require("express").Router();

router.get("/", renderBookListView);

router.get("/create", renderCreateBookView);

router.get("/:id", renderBookView);
router.get("/:id/download", downloadBookById);
router.get("/:id/update", renderUpdateBookView);

router.post("/create", uploadFile.single("book-file"), createBook);
router.post("/:id/update", editBook);
// router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
