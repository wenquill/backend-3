const { Router } = require('express');

// /api/customers
const customersRouter = Router();

customersRouter
  .route('/')
  .post((req, res) => {})
  .get((req, res) => {});

customersRouter
  .route('/:id')
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});

module.exports = customersRouter;