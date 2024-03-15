module.exports.handleErrors = (err, req, res, _) => {
  res
    .status(err.statusCode)
    .send((err.message && { error: err.message }) || null);
};
