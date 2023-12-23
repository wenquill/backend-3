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

pool
  .query('SELECT CURRENT_DATE')
  .then(res => console.log('res', res.rows[0]))
  .catch(err => console.log('err', err));
