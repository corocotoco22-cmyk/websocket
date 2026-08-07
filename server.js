const { WebSocketServer } = require('ws');
const server = new WebSocketServer({ port: process.env.PORT || 8080 });

server.on('connection', (ws) => {
  console.log('Dispositivo conectado!');

  ws.on('message', (data) => {
    server.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(data.toString());
      }
    });
  });
});

console.log('Servidor WebSocket rodando!');