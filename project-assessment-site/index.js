var express = require("express");
var app = express();
var http = require('http');

app.get('/', (req, res) => {
 
var options = {
  host: '127.0.0.1:31511',  // process.env.OFFICE_SERVICE_HOST,
  path: '/office'
 };

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    return str;
  });
}

res = http.request(options, callback).end();
 res.send('we got: %s', res )
})

app.listen(8021, () => {
    console.log("Project Assessment Website: running on port 80");
});
