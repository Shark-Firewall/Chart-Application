import React from "react";
import "../App.css";
import Header from "./Header";
import Body from "./Body";
import Base from "./Base";

function Chat() {
  return (
    <div className="body">
      <div className="App">
        <Header />
        <Body />
        <Base />
      </div>
    </div>
  );
}

export default Chat;
