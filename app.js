var express = require('express');
var app = express();
var controller = require('./controller.js');

app.get("/I/want/title/", controller.getTitles);
app.get("*", function (request,response) {
	response.status(404).send('Not found');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });