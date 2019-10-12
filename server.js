"use strict";

const app = require("express")();
// explicitly create the http server and pass the express app to it
const server = require("http").Server(app);
// then pass the server to socket.io
const io = require("socket.io")(server);
// setup next variables
const next = require("next");
const dev = process.env.NODE_ENV != "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
// set env varibales
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;

// Sockets - // Sockets - io.sockets.on("connect", socket => {...})

// Next
nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Application now running on port: ${port}`);
  });
});
