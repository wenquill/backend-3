const { Phone } = require('./../models');

module.exports.createPhone = async (req, res) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);

    if (!createdPhone) {
      return res.status(400).send('Something went wrong...');
    }
    res.status(201).send(createdPhone);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};

module.exports.getAllPhones = async (req, res) => {
  const { pagination } = req;
  const { brand } = req.query;

  try {
    const foundedPhones = await Phone.getAll(pagination, brand);
    res.status(200).send(foundedPhones);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports.getPhoneById = async (req, res) => {
  const { id } = req.params;

  try {
    const foundedPhone = await Phone.getById(id);

    if (!foundedPhone) {
      return res.status(404).send('Phone not found ):');
    }

    res.status(200).send(foundedPhone);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports.updatePhoneById = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(body);

  try {
    const updatedPhone = await Phone.updateById(id, body);

    if (!updatedPhone) {
      return res.status(400).send('Something went wrong...');
    }

    res.status(200).send(updatedPhone);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};

module.exports.deletePhoneById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPhone = await Phone.deleteById(id);

    if (!deletedPhone) {
      return res.status(404).send('Phone not found');
    }

    res.status(204).send(deletedPhone);
  } catch (err) {
    console.log('error: ', err);
    res.status(500).send('Server error');
  }
};
