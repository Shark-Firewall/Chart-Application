import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Main() {
  let navigate = useNavigate();
  const [error, seterror] = useState("");
  const [user, setuser] = useState("");

  const handlerChange = (e) => {
    setuser(e.target.value);
  };
  const validation = () => {
    if (!user) {
      seterror("Please enter your name");
      return false;
    }
    seterror("");
    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      navigate("/chat", { state: user });
    }
  };
  return (
    <div className="login-container">
      <div className="login-section">
        <h2 className="Login-logo">S-Chart</h2>
        <form onSubmit={submitHandler} className="form-section">
          <input
            className="input-field"
            type="name"
            placeholder="Enter your Name"
            name="name"
            onChange={handlerChange}
          />
          <button type="submit" className="btn-1">
            Login In
          </button>
          {error ? <p>{error}</p> : null}
        </form>
      </div>
    </div>
  );
}
