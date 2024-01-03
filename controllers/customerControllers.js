const { Customer } = require('./../models');

module.exports.createCustomer = (req, res) => {};

module.exports.getAllCustomers = (req, res) => {};

module.exports.getCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundCustomer = await Customer.getById(id);

    if (!foundCustomer) {
      return res.status(404).send('customer not found');
    }

    res.status(200).send(foundCustomer);
  } catch (err) {
    res.status(500).send('server error');
  }
};

module.exports.updateCustomerById = (req, res) => {};

module.exports.deleteCustomerById = (req, res) => {};
