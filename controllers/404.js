module.exports = (req, res, next) => {
  res.status(404).send("404 | NotFound");
};