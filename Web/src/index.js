const fs = require("fs");

const routes = require("../routes/routes");

const express = require("express");
app = express();

const http = require("http");
const https = require("https");

const httpPort = 80;
const httpsPort = 443;

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

app.use("/", routes);
app.use("/register", routes);


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(httpPort, () => {
  console.log("http://localhost:" + httpPort);
});

httpsServer.listen(httpsPort, () => {
  console.log("https://localhost:" + httpsPort);
});
