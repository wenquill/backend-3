class Phone {
  static async create ({ brand, model, price, color, manufactoring_year }) {
    try {
      const insertQuery = `
        INSERT INTO phones (brand, model, price, color, manufactoring_year)
        VALUES ('${brand}', '${model}', '${price}', '${color}', '${manufactoring_year}')
        RETURNING *
      `;
      const createdPhone = await Phone.pool.query(insertQuery);
      return createdPhone.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getAll ({ limit, offset }) {
    try {
      const selectAllQuery = `
        SELECT *
        FROM phones
        ORDER BY id
        LIMIT ${limit} OFFSET ${offset}
      `;
      const foundPhones = await Phone.pool.query(selectAllQuery);
      return foundPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getById (id) {
    try {
      const selectQuery = `
        SELECT *
        FROM phones
        WHERE id = ${id}
      `;
      const foundPhone = await Phone.pool.query(selectQuery);
      return foundPhone.rows[0];
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
      UPDATE phones
      SET ${updateQueryParams}
      WHERE id = ${id}
      RETURNING *
    `;
      const updatedPhone = await Phone.pool.query(updateQuery);
      return updatedPhone.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async deleteById (id) {
    try {
      const deleteQuery = `
        DELETE
        FROM phones
        WHERE id = ${id}
        RETURNING *
      `;
      const deletedPhone = await Phone.pool.query(deleteQuery);
      return deletedPhone.rows[0];
    } catch (err) {
      throw new Error(err.detail);
    }
  }

  static async getCustomersPhones (customerId) {
    try {
      const selectQuery = `
        SELECT p.id AS "phone_id", brand, model, price, color, manufacturing_year, amount
        FROM orders o 
            INNER JOIN phones_to_orders po ON o.id = po.order_id
            INNER JOIN phones p ON p.id = po.phone_id
        WHERE o.customer_id = ${customerId}
        ORDER BY p.id;
      `;

      const foundedPhones = await Phone.pool.query(selectQuery);
      return foundedPhones.rows;
    } catch (err) {
      throw new Error(err.detail);
    }
  }
}

module.exports = Phone;
