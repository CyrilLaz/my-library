const router = require("express").Router();

const { apiRouters } = require("./api");

// api
router.use("/api", apiRouters);

module.exports.routers = router;
