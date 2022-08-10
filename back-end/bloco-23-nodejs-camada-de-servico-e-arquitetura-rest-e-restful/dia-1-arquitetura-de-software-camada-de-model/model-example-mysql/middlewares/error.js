// middlewares/error.js


const rescue = (action) => {
  return async function (req, res, next) {
    try {
      await action(req, res, next)
    } catch (err) {
      next(err);
    }
  }
};

const errorFunction = (err, request, response, _next) => {

  if (err.isJoi) {
    return response.status(400)
      .json({ error: { message: err.details[0].message } });
  }

  const statusByErrorCode = {
    notFound: 404,
    conflict: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  response.status(status).json({ error: { message: err.message } });
};

module.exports = {
  rescue,
}