const { Router } = require("express");

const router = Router();

router.use((req, res) => {
  res.status(404).send("404 | NotFound");
});

module.exports.notFoundRouter = router;
