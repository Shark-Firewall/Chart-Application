import React from "react";
import "../App.css";
import Header from "./Header";
import Body from "./Body";
import Base from "./Base";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Chat() {
  const [user, setuser] = useState("");
  let location = useLocation();

  useEffect(() => {
    setuser(location.state);
  }, [location]);

  console.log(user);
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
