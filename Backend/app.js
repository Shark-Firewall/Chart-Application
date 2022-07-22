const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");
require("dotenv").config();

const app = express();
// creating server configuration
app.use(cors());

const server = http.createServer(app);

const io = socketIO(server);

app.get("/", (req, res) => {
  res.send("Welcome");
});

io.on("connection", () => {
  console.log("Connection established");
});

server.listen(process.env.PORT, () => {
  console.log(`listening on port http://localhost:${process.env.PORT}`);
});
