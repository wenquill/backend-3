const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { validation, pagination } = require('./../middleware');

// /api/phones
const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phoneControllers.createPhone)
  .get(pagination.paginatePhones, phoneControllers.getAllPhones);

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhoneById)
  .patch(phoneControllers.updatePhoneById)
  .delete(phoneControllers.deletePhoneById);

phonesRouter.post('/', (req, res) => {});
phonesRouter.get('/', (req, res) => {});
phonesRouter.get('/:id', (req, res) => {});
phonesRouter.patch('/:id', (req, res) => {});
phonesRouter.delete('/:id', (req, res) => {});

module.exports = phonesRouter;
