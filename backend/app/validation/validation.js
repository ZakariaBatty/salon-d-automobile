const Joi = require('joi');

// Owner validation
const ownerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(4).max(30),
    lastName: Joi.string().required().min(3).max(30),
    cin: Joi.string().required(),
    email: Joi.string().required(),
    rib: Joi.number().required(),
    telephone: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

// Car validation
const carValidation = (data) => {
  const schema = Joi.object({
    registration_Number: Joi.string().required(),
    name: Joi.string().required(),
    mark: Joi.string().required(),
    color: Joi.string().required(),
    price: Joi.number().required(),
    fuel: Joi.string().required(),
    is_Saled: Joi.string().required(),
  });
  return schema.validate(data);
};

// client validation
const clientValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().min(4).max(30),
    lastName: Joi.string().required().min(4).max(30),
    cin: Joi.string().required(),
    email: Joi.string().required(),
    telephone: Joi.string().required(),
    globalTries: Joi.number(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

// place validation
const palceValidation = (data) => {
  const schema = Joi.object({
    palceNumber: Joi.number().required(),
    is_free: Joi.boolean(),
  });
  return schema.validate(data);
};

module.exports = {
  ownerValidation,
  carValidation,
  clientValidation,
  palceValidation,
};
