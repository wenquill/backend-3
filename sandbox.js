const { Pool } = require('pg');

// connect to database
const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'admin',
  port: 5432,
};

const pool = new Pool(connectionOptions);

// disconnect from database before the app is off
process.on('beforeExit', () => pool.end());

// // query with promises (then, catch)
// pool
//   .query('SELECT CURRENT_DATE')
//   .then(res => console.log('res: ', res.rows[0]))
//   .catch(err => console.log('err', err));

// // query with promises (async, await)
// // anonymous selfcalled function
// (async function () {
//   try {
//     const res = await pool.query('SELECT CURRENT_DATE');
//     console.log('res: ', res.rows[0]);
//   } catch (err) {
//     console.log('err', err);
//   }
// })();

// // pool
// //   .query('SELECT * FROM customers')
// //   .then(res => console.log('res', res.rows))
// //   .catch(err => console.log('err', err));

// // query with callbacks
// pool.query('SELECT CURRENT_DATE', (err, res) => {
//   if (!err) {
//     console.log('res: ', res.rows[0]);
//   }
// });

// // select customer by id
// // way 1 - template literal
// const id = 1;
// (async () => {
//   try {
//     const customer = await pool.query(`
//         SELECT *
//         FROM customers 
//         WHERE id = ${id}`);
//     console.log('ound customer id = 1: ', customer.rows[0]);
//   } catch (err) {
//     console.log('err: ', err);
//   }
// })();

// // way 2 - another parameter: array with all parameters
// (async () => {
//   try {
//     const customer = await pool.query(
//       `
//         SELECT *
//         FROM customers 
//         WHERE id = $1`,
//       [id]
//     );
//     console.log('found customer id = 1: ', customer.rows[0]);
//   } catch (err) {
//     console.log('err: ', err);
//   }
// })();

// const first_name = 'Petro1';
// const last_name = 'Petrenko1';
// (async () => {
//   try {
//     const customer = await pool.query(
//       `
//           SELECT *
//           FROM customers 
//           WHERE first_name = $1 AND last_name = $2`,
//       [first_name, last_name]
//     );
//     console.log('found customer: ', customer.rows[0]);
//   } catch (err) {
//     console.log('err: ', err);
//   }
// })();

// const customer_id = 1;
// const created_at = '2023-10-10';
// (async () => {
//   try {
//     const customer = await pool.query(
//       `
//         INSERT INTO orders(customer_id, created_at)
//         VALUES ($1, $2)
//         RETURNING *
//       `,
//       [customer_id, created_at]
//     );
//     console.log('created customer: ', customer.rows[0]);
//   } catch (err) {
//     console.log('err: ', err);
//   }
// })();

// MODEL

class User {
  static async create ({ firstName, lastName, email, tel }) {
    try {
      // сформувати запит
      const insertQuery = `
        INSERT INTO customers(first_name, last_name, email, tel)
        VALUES('${firstName}', '${lastName}', '${email}', '${tel}')
        RETURNING *`;

      // виконати його
      const createdCustomer = await pool.query(insertQuery);

      //повернути результат
      return createdCustomer;
    } catch (err) {
      console.log('err: ', err);
    }
  }
  static getAll ({ limit, offset }) {}
  static getById (id) {}
  static updateById (id, body) {}
  static deleteById (id) {}
}