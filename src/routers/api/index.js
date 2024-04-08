const { booksRouter } = require("./books");

const router = require("express").Router();

router.use("/books", booksRouter);

module.exports.apiRouters = router;
