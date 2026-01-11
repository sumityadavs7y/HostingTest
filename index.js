const http = require('http');
const envconfig = require('./envconfig');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello This is the some other branch.\n TEST_ENV value is: ' + envconfig.env.TEST_ENV);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

