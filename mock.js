
/*

Kontrakt:

/api/lista GET

  [
  {"id": 1, "imie": "Jan", "nazwisko": "Nowak"},
    {"id": 2, "imie": "Tomasz", "nazwisko": "Kot"},
    {"id": 3, "imie": "Stanisław", "nazwisko": "Kowal"}
  ]

 */

const http = require('http');
const port = 3200;

const server = http.createServer( (request, response) => {
  console.log('przyszlo zapytanie');
  if (request.method === 'GET' && request.url.startsWith('/api/lista')) {
    response.setHeader('Content-type', 'application/json');

    response.end(`
        [
          {"id": 1, "imie": "Jan", "nazwisko": "Nowak` +
      Math.random()
      + `"},
          {"id": 2, "imie": "Tomasz", "nazwisko": "Kot"},
          {"id": 3, "imie": "Stanisław", "nazwisko": "Kowal"}
        ]
    `);
  } else {
    response.end('Nie znam takiego endpointa');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log('Mock Server nasluchuje na porcie ' + port);
})
