const db = require("../db");
/**
 * @type import('../../types').TController
 */
module.exports.db = (req, res, next) => {
  req.db = db;
  next();
};
