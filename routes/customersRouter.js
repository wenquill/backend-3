const { Router } = require('express');
const { customerControllers } = require('./../controllers');
const { validation, pagination } = require('./../middleware');
// /api/customers
const customersRouter = Router();

customersRouter
  .route('/')
  .post(validation.validateCustomerOnCreate, customerControllers.createCustomer)
  .get(pagination.paginateCustomer, customerControllers.getAllCustomers);

customersRouter
  .route('/:id')
  .get(customerControllers.getCustomerById)
  .patch(customerControllers.updateCustomerById)
  .delete(customerControllers.deleteCustomerById);

module.exports = customersRouter;
