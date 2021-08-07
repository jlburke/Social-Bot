var express = require('express');
var routes = express.Router();

const fs = require("fs");


//GET home route
routes.get('/',  (req, res) =>
	// read default file

	fs.readFile("/home/g4lile0/Desktop/Social-Bot/Web/src/public/index.ejs", (error, data) => {
		if (error) {
			res.send("Error 404");
		} else {
			res.write(data);
			res.end();
		}
	})

    );

	routes.get('/register',  (req, res) =>
	// read default file
	res.send("ok")
    );
module.exports = routes;