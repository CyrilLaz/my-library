const router = require("express").Router();
const notFound = require("../controllers/404");
const { booksRouter } = require("./books");
const { userRouter } = require("./user");

router.get("/", (req, res) => {
  res.redirect("/books");
});

// user router
router.use("/user", userRouter);

// book router
router.use("/books", booksRouter);


module.exports.routers = router;
