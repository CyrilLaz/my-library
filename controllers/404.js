const router = require("express").Router();

router.use((req, res, next) => {
  res.status(404).send("404 | NotFound");
});

module.exports.notFoundRouter = router;
