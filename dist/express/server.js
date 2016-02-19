var express = require('express');
var app = express()
var path = require ('path');

// Setting templating engine
app.set('view engine', 'jade');
// Setting views location
app.set('views', path.join(__dirname + '/views'));

// Static Files middleware
app.use(express.static(path.join(__dirname + '/../public')));

app.get('*', function (req, res) {
  res.render('index');
});


var server = app.listen(3000, function () {
  console.log('Listening on http://localhost:' + server.address().port);
  console.log("Hit 'Ctrl + C' to stop the server");
});
