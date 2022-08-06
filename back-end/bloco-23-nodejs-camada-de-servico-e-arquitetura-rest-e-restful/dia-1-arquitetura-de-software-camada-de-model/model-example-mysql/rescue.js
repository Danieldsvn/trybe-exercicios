const rescue = action => async (req, res, next) => {
  try {
    await action(req, res, next);
  } catch(err) {
    next(err);
    console.log(err.message);
  }
}

module.exports = rescue; 