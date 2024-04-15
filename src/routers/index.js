const router = require("express").Router();

const { notFound } = require("../controllers/404");
const { apiRouters } = require("./api");

// api
router.use("/api", apiRouters);

router.use(notFound)

module.exports.routers = router;
