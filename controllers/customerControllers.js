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
  const { pagination } = req;

  try {
    const foundedCustomers = await Customer.getAll(pagination);
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

module.exports.updateCustomerById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(body);

  try {
    const updCustomer = await Customer.updateById(id, body);

    if (!updCustomer) {
      return res.status(400).send('Something went wrong...');
    }

    res.status(200).send(updCustomer);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};

module.exports.deleteCustomerById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await Customer.deleteById(id);

    if (!deletedCustomer) {
      return res.status(404).send('Customer not found');
    }

    res.status(204).send(deletedCustomer);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};

module.exports.getCustomerPhones = async (req, res) => {
  const { id } = req.params;

  try {
    const foundedPhones = await Customer.getCustomersPhones(id);

    if (!foundedPhones.length) {
      return res.status(404).send('Phones not found');
    }

    res.status(200).send(foundedPhones);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};
