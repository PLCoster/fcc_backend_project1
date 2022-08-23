// Create express server
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Serve static files from 'public' folder
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Send index.html on requests to root
// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Sample API endpoint
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// 404 page not found:
app.get('*', function (req, res) {
  res.send('Whoops! That page does not exist!');
});

// listen for requests on e.g. http://localhost:3000/ if not otherwise specified
const portNum = process.env.PORT ? process.env.PORT : 3000;
var listener = app.listen(portNum, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
