const http = require('http');
const theme = require('./dist/index.js');
const resume = require('@jsonresume/schema/sample.resume.json');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const lang = url.searchParams.get('lang') || 'en';
  
  const html = theme.render(resume, { language: lang });
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3456, '0.0.0.0', () => {
  console.log('Resume preview at http://localhost:3456');
  console.log('Try: ?lang=it, ?lang=de, ?lang=fr, ?lang=es, ?lang=ja, ?lang=zh');
});
