const http = require('http');
const app = require('./app');
const colors = require('colors');


const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT ||'3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log("─────────────────────────────────────────\n")
  console.log("Server start :".red)
  console.log('Listening on ' + bind);
  console.log("Site: http://127.0.0.1:5500/frontend/account/login.html ")
  console.log("-----------------------------------------\n")
  console.log("Data connexion :".blue)
  console.log("https://cloud.mongodb.com/v2/622bb08e08c52537ebb16a50#metrics/replicaSet/622bb1287b317b1b8a942734/explorer/myFirstDatabase/things/find")
});

server.listen(port);