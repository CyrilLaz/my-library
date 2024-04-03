/**
 *@typedef {import("../../types").TController} TController
 */

const {
  createBook,
  editBook,
  renderBookListView,
  renderCreateBookView,
  renderBookView,
  renderUpdateBookView,
} = require("../controllers/books");

const router = require("express").Router();

router.get("/", renderBookListView);

router.get("/create", renderCreateBookView);

router.get("/:id", renderBookView);
router.get("/:id/update", renderUpdateBookView);

router.post("/create", createBook);
router.post("/:id/update", editBook);
// router.delete("/:id", deleteBook);

module.exports.booksRouter = router;
