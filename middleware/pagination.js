module.exports.paginateCustomer = (req, res, next) => {
  // page + results --> limit + offsets

  const { page = 1, results = 10 } = req.query;

  req.pagination = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  next();
};

module.exports.paginatePhones = (req, res, next) => {
  const { page = 1, results = 10 } = req.query;

  req.pagination = {
    limit: Number(results),
    offset: (page - 1) * results,
  };

  next();
};