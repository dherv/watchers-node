// "use strict";
// var express = require("express");
import express from "express";
// import socketIo from "socket.io"
import next, { NextApiRequest, NextApiResponse } from "next"
const app = express();
// explicitly create the http server and pass the express app to it
const server = require("http").Server(app);
// then pass the server to socket.io
// const io = socketIo(server);
// setup next variables
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
  app.get("*", (req: NextApiRequest, res: NextApiResponse) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err: Error) => {
    if (err) throw err;
    console.log(`Application now running on port: ${port}`);
  });
});
