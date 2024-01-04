const { Customer } = require('./../models');

module.exports.createCustomer = async (req, res) => {
  const { body } = req;

  try {
    const createdCustomer = await Customer.create(body);

    if (!createdCustomer) {
      return res.status(400).send('Something went wrong...');
    }
    res.status(201).send(createdCustomer);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};

module.exports.getAllCustomers = async (req, res) => {
  try {
    const foundedCustomers = await Customer.getAll({ limit: 10, offset: 0 });
    res.status(200).send(foundedCustomers);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports.getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundCustomer = await Customer.getById(id);

    if (!foundCustomer) {
      return res.status(404).send('Customer not found ):');
    }

    res.status(200).send(foundCustomer);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports.updateCustomerById = (req, res) => {};

module.exports.deleteCustomerById = (req, res) => {};
