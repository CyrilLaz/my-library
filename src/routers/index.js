const router = require("express").Router();
const {notFound} = require("../controllers/404");
const { apiRouters } = require("./api");
const { booksRouter } = require("./books");

router.get("/", (req, res) => {
  res.redirect("/books");
});

// api
router.use("/api", apiRouters);

// book router
router.use("/books", booksRouter);

router.use(notFound)

module.exports.routers = router;
