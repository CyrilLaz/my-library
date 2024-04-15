module.exports.notFound = (req, res, next) => {
  // next({ statusCode: 404, message: "404 | NotFound" });

  res.status(404).send("404 | NotFound");
};
