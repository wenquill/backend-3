const yup = require('yup');
const NAME_VAL_SCHEMA = yup.string().trim().min(2).max(32);

module.exports.CREATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  firstName: NAME_VAL_SCHEMA.required(),
  lastName: NAME_VAL_SCHEMA.required(),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(
      /^\+\d{12}$/,
      'Phone number must start with + and contain exactly 13 characters.'
    ),
});

module.exports.UPDATE_CUSTOMER_VALIDATION_SCHEMA = yup.object({
  first_name: NAME_VAL_SCHEMA,
  last_name: NAME_VAL_SCHEMA,
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(
      /^\+\d{12}$/,
      'Phone number must start with + and contain exactly 13 characters.'
    ),
});

module.exports.CREATE_PHONE_VALIDATION_SCHEMA = yup.object({
  brand: NAME_VAL_SCHEMA.required(),
  model: NAME_VAL_SCHEMA.required(),
  price: yup.number().min(0).required(),
  color: yup.string().trim().max(32),
  manufacturing_year: yup.number().integer().min(1970).max(new Date().getFullYear()),
});

module.exports.UPDATE_PHONE_VALIDATION_SCHEMA = yup.object({
  brand: NAME_VAL_SCHEMA,
  model: NAME_VAL_SCHEMA,
  price: yup.number().min(0),
  color: yup.string().trim().max(32),
  manufacturing_year: yup.number().integer().min(1970).max(new Date().getFullYear()),
});
