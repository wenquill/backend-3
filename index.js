const http = require('http');
const app = require('./app');
require('./models');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const httpServer = http.createServer(app);
httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening host ${HOST} port ${PORT}`)
);
