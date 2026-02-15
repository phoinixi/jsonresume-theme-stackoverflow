const http = require('http');
const theme = require('./dist/index.js');
const resume = require('@jsonresume/schema/sample.resume.json');

const html = theme.render(resume);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3456, '0.0.0.0', () => {
  console.log('Resume preview at http://localhost:3456');
});
