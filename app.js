var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
 res.sendfile('./Updated Website/neat/Home.html');
});

app.get('/Art.html', function (req, res) {
 res.sendfile('./Updated Website/neat/Art.html');
});

app.get('/Youtube.html', function (req, res) {
 res.sendfile('./Updated Website/neat/Youtube.html');
});

app.get('/Contact.html', function (req, res) {
 res.sendfile('./Updated Website/neat/Contact.html');
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
