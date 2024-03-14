const router = require("express").Router();
const notFound = require("../controllers/404");
const { booksRouter } = require("./books");
const { userRouter } = require("./user");

// user router
router.use("/user", userRouter);

// book router
router.use("/books", booksRouter);

router.use(notFound);

module.exports.routers = router;
