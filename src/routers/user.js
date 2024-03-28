const { auth } = require("../controllers/user");

const router = require("express").Router();

router.post("/login", auth);

module.exports.userRouter = router;
