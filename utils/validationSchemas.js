const yup = require('yup');

module.exports.CREATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(32).required(),
  lastName: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(
      /^\+\d{12}$/,
      'Phone number must start with + and contain exactly 13 characters.'
    ),
});

module.exports.UPDATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  first_name: yup.string().trim().min(2).max(32),
  last_name: yup.string().trim().min(2).max(32),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(
      /^\+\d{12}$/,
      'Phone number must start with + and contain exactly 13 characters.'
    ),
});

module.exports.CREATE_PHONE_VALIDATION_SCHEMA = yup.object({
  brand: yup.string().trim().min(2).max(32).required(),
  model: yup.string().trim().min(2).max(32).required(),
  price: yup.number().min(0).required(),
  color: yup.string().trim().max(32),
  manufacturing_year: yup.number().integer().min(1970).max(new Date().getFullYear()),
});

module.exports.UPDATE_PHONE_VALIDATION_SCHEMA = yup.object({
  brand: yup.string().trim().min(2).max(32),
  model: yup.string().trim().min(2).max(32),
  price: yup.number().min(0),
  color: yup.string().trim().max(32),
  manufacturing_year: yup.number().integer().min(1970).max(new Date().getFullYear()),
});
