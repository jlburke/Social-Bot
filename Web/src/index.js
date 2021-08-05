const express = require("express");
const http = require("http");
const https = require("https");
const fs = require("fs");
const httpPort = 8080;
const httpsPort = 4433;
app = express();

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

//GET home route
app.get("/", (_req, res) =>
	// read default file

	fs.readFile(__dirname + "/public/index.ejs", (error, data) => {
		if (error) {
			res.send("Error 404");
		} else {
			res.write(data);
			res.end();
		}
	})
);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(httpPort, () => {
	console.log("Http server listing on port : " + httpPort);
});

httpsServer.listen(httpsPort, () => {
	console.log("Https server listing on port : " + httpsPort);
});
