import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = "";
};

function Main() {
  const [name, setname] = useState("");

  return (
    <div className="login-container">
      <div className="login-section">
        <h2 className="Login-logo">S-Chart</h2>
        <input
          className="input-field"
          type="text"
          id="joinInput"
          placeholder="Enter your Name"
          onChange={(e) => setname(e.target.value)}
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          <button onClick={sendUser} className="joinbtn">
            Login In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
export { user };
