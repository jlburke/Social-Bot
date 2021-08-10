// Libriries import
const fs = require("fs");

const routes = require("../routes/routes");

const express = require("express");
app = express();

const http = require("http");
const https = require("https");

const httpPort = 80;
const httpsPort = 443;


//Certificate define for SSL
var key = fs.readFileSync(
  "/home/g4lile0/Desktop/Social-Bot/Web/certs/private.key"
);
var cert = fs.readFileSync(
  "/home/g4lile0/Desktop/Social-Bot/Web/certs/certificate.crt"
);


var credentials = {
  key: key,
  cert: cert,
};

//routing
app.use(express.static(__dirname + "/public"));

app.use("/", routes);

//Server Init
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(httpPort, () => {
  console.log("http://socialbots.ddns.net");
});

httpsServer.listen(httpsPort, () => {
  console.log("https://socialbots.ddns.net" );
});
