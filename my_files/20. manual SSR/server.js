const { createServer } = require('http');

const server = createServer((req, res) => {
  res.end('hello world');
});

server.listen(8000, () => console.log('listening on 8000'));
