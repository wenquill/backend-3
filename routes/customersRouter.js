const { Router } = require('express');
const { customerControllers } = require('./../controllers');

// /api/customers
const customersRouter = Router();

customersRouter
  .route('/')
  .post(customerControllers.createCustomer)
  .get(customerControllers.getAllCustomers);

customersRouter
  .route('/:id')
  .get(customerControllers.getCustomerById)
  .patch(customerControllers.updateCustomerById)
  .delete(customerControllers.deleteCustomerById);

module.exports = customersRouter;
