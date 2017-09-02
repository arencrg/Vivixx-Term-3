const HTTP = require('http');
const URL = require('url');

const { jsonResponse } = require('./utils'); //use the exported function

const server = HTTP.createServer((req, res) => {
    try {
      const urlComponents = URL.parse(req.url);
      switch (urlComponents.pathname) { //which route shall we handle?

      case '/example.json':
        jsonResponse(res, { //JSON response
              example: true,
              random: Math.random(),
              time: (new Date()).toUTCString(),
        });
      break;

      case '/error':
      null.somethingWrong();
      break;

      default: //all others
        res.writeHead(404); //not found error
        res.end('You lost, buddy?\nPage not found: ' + urlComponents.pathname);
        break;
      }

    }
    catch(error) { //handle internal exceptions, so we don't just catch
      console.error(error); //for our server logs
      res.writeHead(500); //to tell the user 'internal server error'
      res.end('Girl, mali!');
    }
});

server.on('clientError', (err, socket) => {
  //send raw HTTP 400 down the socket
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(80, function() {
    console.log('Started on port', 80);
});
