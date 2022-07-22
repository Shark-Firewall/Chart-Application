import React, { useState } from "react";
import "../App.css";
import { Outlet, Link } from "react-router-dom";
import 

let user;

function Login() {
  const [userName, setuserName] = useState("");
  const onChangeHandler = (e) => {
    setuserName(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    user = userName;
  };
  return (
    <div className="login-container">
      <div className="login-section">
        <h2 className="Login-logo">S-Chart</h2>
        <input
          type="text"
          placeholder="Enter your Name"
          value={userName}
          onChange={onChangeHandler}
        ></input>
        <Link to="/chat">
          <button onClick={submitHandler}>Submit</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
export { user };
