let express = require("express");
let routes = express.Router();

const fs = require("fs");

const ip = require("ip");

//GET home route
routes.get("/", (req, res) =>
  // read default file

  fs.readFile(
    "/home/g4lile0/Desktop/Social-Bot/Web/src/public/index.ejs",
    (error, data) => {
      if (error) {
        res.send("Error 404");
      } else {
        res.write(data);
        res.end();
      }
      //define user IP
      let ip_raw = req.connection.remoteAddress;
      let ips = ip_raw.split("::ffff:").pop();

      //atribute for write Stream
      let stream = fs.createWriteStream(
        "/home/g4lile0/Desktop/Social-Bot/Web/logs/ip.txt",
        { flags: "a" }
      );

      // write this ip into a text file
      stream.once("open", function (fd) {
        stream.write(`${ips}\n`);
        stream.end();
      });
    }
  )
);
//GET register route
routes.get("/register", (req, res) =>
  fs.readFile(
    "/home/g4lile0/Desktop/Social-Bot/Web/src/public/register.ejs",
    (error, data) => {
      if (error) {
        res.send("Error 404");
      } else {
        res.write(data);
        res.end();
      }
    }
  )
);
//GET login route
routes.get("/login", (req, res) =>
  fs.readFile(
    "/home/g4lile0/Desktop/Social-Bot/Web/src/public/login.ejs",
    (error, data) => {
      if (error) {
        res.send("Error 404");
      } else {
        res.write(data);
        res.end();
      }
    }
  )
);
module.exports = routes;
