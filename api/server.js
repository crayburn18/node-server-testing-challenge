const express = require("express");

const server = express();
const peopleRouter = require("./people/router");

server.use(express.json());

server.use("/api/people", peopleRouter);

module.exports = server;