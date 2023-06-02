const Joi = require('joi');

const userSchema = Joi.object({
    fullname: Joi.string().required(),
    id_country: Joi.number().required(),
});

module.exports = {
  userSchema,
};