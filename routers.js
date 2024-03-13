const router = require("express").Router();
const {
  auth,
  getAllBooks,
  getBookById,
  createBook,
  editBook,
  deleteBook,
} = require("./controllers");

// user router
router.post("/api/user/login", auth);

// book router
router.get("/api/books", getAllBooks);
router.get("/api/books/:id", getBookById);
router.post("/api/books", createBook);
router.put("/api/books/:id", editBook);
router.delete("/api/books/:id", deleteBook);

module.exports.routers = router;
