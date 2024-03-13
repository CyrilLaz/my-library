const { auth } = require("../controllers");

const router = require("express").Router();

router.post("/login", auth);

module.exports.userRouter = router;
