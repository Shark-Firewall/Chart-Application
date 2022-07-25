import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import socketIO from "socket.io-client";

const ENDPOINT = "http://localhost:4000/";

function Chat() {
  const [user, setuser] = useState("");
  const [msg, setMsg] = useState("");
  const [allmessages, setAllmessages] = useState([]);
  let location = useLocation();

  const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });
  }, []);

  useEffect(() => {
    setuser(location.state);
  }, [location]);

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newMessage = { time: new Date(), msg, name: user };
      setAllmessages([...allmessages, newMessage]);
    }
  };

  return (
    <div className="body">
      <div className="App">
        <div className="brand">
          <h4>Shark</h4>
        </div>
        <div className="message_area">
          {allmessages.map((msg) => {
            return user === msg.name ? (
              <div className="message outgoing">
                <h4>{msg.name}</h4>
                <p>{msg.msg}</p>
              </div>
            ) : (
              <div className="message incoming">
                <h4>{msg.name}</h4>
                <p>{msg.msg}</p>
              </div>
            );
          })}
        </div>
        <div className="input-container">
          <textarea
            cols={30}
            rows={1}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            placeholder={"Enter your message..."}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Chat;
