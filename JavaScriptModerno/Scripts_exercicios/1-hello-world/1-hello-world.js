// Hello World

// Carrega o módulo http 
const http = require('http');

// Definimos um web server a partir do pacote http
const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

// Criamos o serviço web server
server.listen(4040, () => {
  console.log('O servidor foi iniciado. Abra o navegador e digite http://localhost:4040');
});
