const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(new Date().toISOString() + ": server started on port "+port+ "server ");