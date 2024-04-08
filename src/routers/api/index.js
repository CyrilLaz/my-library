const { booksApiRouters } = require("./books");

const router = require("express").Router();

router.use("/books", booksApiRouters);

module.exports.apiRouters = router;
