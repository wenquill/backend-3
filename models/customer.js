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
      throw new Error(err.detail); // або помилку
    }
  }
  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM customers
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundCustomers = await Customer.pool.query(selectAllQuery);
      return foundCustomers.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async getById (id) {
    try {
      const selectQuery = `
        SELECT *
        FROM customers
        WHERE id = ${id}
      `;
      const foundCustomer = await Customer.pool.query(selectQuery);
      return foundCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async updateById (id, updatedFields) {
    try {
      const updateQueryParams = Object.entries(updatedFields)
        .map(([key, value]) => `${key} = '${value}'`)
        .join(', ');

      const updateQuery = `
      UPDATE customers
      SET ${updateQueryParams}
      WHERE id = ${id}
      RETURNING *
    `;
      const updatedCustomer = await Customer.pool.query(updateQuery);
      return updatedCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }
  static async deleteById (id) {
    try {
      const deleteQuery = `
        DELETE
        FROM customers
        WHERE id = ${id}
        RETURNING *
      `;
      const deletedCustomer = await Customer.pool.query(deleteQuery);
      return deletedCustomer.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getCustomersPhones (id) {
    try {
      const selectQuery = `
        SELECT p.id AS "phone_id", brand, model, price, color, manufacturing_year, amount
        FROM orders o 
            INNER JOIN phones_to_orders po ON o.id = po.order_id
            INNER JOIN phones p ON p.id = po.phone_id
        WHERE o.customer_id = ${id}
        ORDER BY p.id;
      `;

      const foundedPhones = await Customer.pool.query(selectQuery);
      return foundedPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = Customer;
