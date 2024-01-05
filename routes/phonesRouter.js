const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { validation, pagination } = require('./../middleware');

// /api/phones
const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(validation.validatePhoneOnCreate, phoneControllers.createPhone)
  .get(pagination.paginatePhones, phoneControllers.getAllPhones);

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhoneById)
  .patch(validation.validatePhoneOnUpdate, phoneControllers.updatePhoneById)
  .delete(phoneControllers.deletePhoneById);

module.exports = phonesRouter;
