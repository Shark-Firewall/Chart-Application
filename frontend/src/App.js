import React, { useEffect } from "react";
import Login from "./componets/login";
import "./App.css";
// import Header from "./componets/Header";
// import Body from "./componets/Body";
// import Base from "./componets/Base";
import socketIO from "socket.io-client";

const ENDPOINT = "http://localhost:4000/";

function App() {
  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });
  useEffect(() => {
    socket.on("connect", () => {
      alert("connected");
    });
  }, []);

  return (
    <>
      <Login />
      {/* <div className="body">
        <div className="App">
          <Header />
          <Body />
          <Base />
        </div>
      </div> */}
    </>
  );
}

export default App;
