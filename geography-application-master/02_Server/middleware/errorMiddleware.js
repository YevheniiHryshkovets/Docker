const errorMiddleware = function(err, req, res, next) {
  console.log(err); // to see properties of message in our console
  res.status(422).json({ error: err.message });
};

module.exports = errorMiddleware;
