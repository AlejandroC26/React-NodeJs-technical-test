const { userSchema } = require('../schemas/store.user.schema');

const validationMiddleware = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details });
  }
  next();
};

module.exports = validationMiddleware;