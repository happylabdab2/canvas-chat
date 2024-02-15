import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 493 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    ws.send(data);
  });

});

console.log(location.url ,'Server started on port 493');