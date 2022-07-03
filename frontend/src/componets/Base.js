import React from "react";
import "../App.css";

export default function Base() {
  return (
    <div className="input-container">
      <textarea
        cols={30}
        rows={1}
        placeholder={"Enter your message..."}
      ></textarea>
    </div>
  );
} 
