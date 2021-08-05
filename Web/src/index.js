const fs = require("fs");

const routes = require('../routes/routes');

const express = require("express");
app = express();

const http = require("http");
const https = require("https");
const httpPort = 8080;
const httpsPort = 4433;

var key = fs.readFileSync(
	"/home/g4lile0/Desktop/Social-Bot/Web/certs/selfsigned.key"
);
var cert = fs.readFileSync(
	"/home/g4lile0/Desktop/Social-Bot/Web/certs/selfsigned.crt"
);

var credentials = {
	key: key,
	cert: cert,
};

app.use(express.static(__dirname + "/public"));

app.use('/', routes);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(httpPort, () => {
	console.log("http://localhost:" + httpPort);
});

httpsServer.listen(httpsPort, () => {
	console.log("https://localhost:" + httpsPort);
});
