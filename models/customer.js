class Customer {
  static async create ({ firstName, lastName, email, tel }) {
    try {
      // сформувати запит
      const insertQuery = `
        INSERT INTO customers (first_name, last_name, email, tel)
        VALUES ('${firstName}', '${lastName}', '${email}', '${tel}')
        RETURNING *
      `;
      const createdCustomer = await Customer.pool.query(insertQuery); // виконати його
      return createdCustomer.rows[0]; // повернути результат
    } catch (err) {
      console.log('err :>> ', err); // або помилку
    }
  }
  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM customers
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundCustomers = await Customer.pool.query(selectAllQuery);
      return foundCustomers.rows;
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async getById (id) {
    try {
      const selectQuery = `
        SELECT *
        FROM customers
        WHERE ${id}
      `;
      const foundCustomer = await Customer.pool.query(selectQuery);
      return foundCustomer.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async updateById (id, { firstName, lastName, email, tel }) {
    try {
      const updateQuery = `
        UPDATE customers
        SET first_name = ${firstName}, 
            last_name = ${lastName}, 
            email = ${email}, 
            tel = ${tel}
        WHERE ${id}
        RETURNING *
      `;
      const updatedCustomer = await Customer.pool.query(updateQuery);
      return updatedCustomer.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
  static async deleteById (id) {
    try {
      const deleteQuery = `
        DELETE
        FROM customers
        WHERE ${id}
        RETURNING *
      `;
      const deletedCustomer = await Customer.pool.query(deleteQuery);
      return deletedCustomer.rows[0];
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
}

module.exports = Customer;