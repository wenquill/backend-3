const {
  CREATE_CUSTOMER_VALIDATION_SCHEMA,
  UPDATE_CUSTOMER_VALIDATION_SCHEMA,
  CREATE_PHONE_VALIDATION_SCHEMA,
  UPDATE_PHONE_VALIDATION_SCHEMA
} = require('./../utils/validationSchemas');

module.exports.validateCustomerOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_CUSTOMER_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(422).send('Validation error');
  }
};

module.exports.validateCustomerOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await UPDATE_CUSTOMER_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(422).send('Validation error');
  }
};

module.exports.validatePhoneOnCreate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await CREATE_PHONE_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(422).send('Validation error');
  }
};

module.exports.validatePhoneOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await UPDATE_PHONE_VALIDATION_SCHEMA.validate(body);
    next();
  } catch (err) {
    res.status(422).send('Validation error');
  }
};
