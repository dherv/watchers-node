// "use strict";
// var express = require("express");
import express from "express";
import GraphQLHTTP from "express-graphql";
// import socketIo from "socket.io"
import next, { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import schema from "../graphql/schema/schema";

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
const mongodbUrl = process.env.NODE_ENV === "production" ? process.env.MONGODB_PROD : process.env.MONGODB_DEV
// mongodb
if (mongodbUrl) {
  mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  );
  mongoose.connection.once("open", () => {
    console.log("connection to database");
  });
}


// Sockets - // Sockets - io.sockets.on("connect", socket => {...})

// Middlewares
app.use(
  "/graphql",
  GraphQLHTTP({
    schema,
    graphiql: true
  })
);

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
