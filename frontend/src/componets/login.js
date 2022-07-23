import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

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
        <Link to="/Chat">
          <button as={Link} to="/Chat" onClick={submitHandler}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
export { user };
