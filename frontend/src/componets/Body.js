import React from "react";
import "../App.css";

function Body() {
  return (
    <div className="message_area">
      <div className="message incoming">
        <h4>Admin</h4>
        <p>Rajnish Kumar</p>
      </div>
      <div className="message outgoing">
        <h4>Opp</h4>
        <p>Mamta Singh</p>
      </div>
    </div>
  );
}

export default Body;
