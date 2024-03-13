
const router = require("express").Router();
const { booksRouter } = require("./books");
const { userRouter } = require("./user");

// user router
router.use("/user", userRouter);

// book router
router.use("/books", booksRouter);


module.exports.routers = router;
