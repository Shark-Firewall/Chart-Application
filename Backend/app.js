const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http); 
const cors = require("cors");
require("dotenv").config();

// creating server configuration
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

http.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
