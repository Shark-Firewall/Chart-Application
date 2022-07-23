import React, { useEffect } from "react";
import Login from "./componets/login";
import Chat from "./componets/Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import socketIO from "socket.io-client";

const ENDPOINT = "http://localhost:4000/";

function App() {
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("connect", () => {
      alert("connected");
    });
  });

  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/chat" component={Chat} />
      </Router>
    </>
  );
}

export default App;
