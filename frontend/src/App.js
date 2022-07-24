import React from "react";
import Main from "./Componets/Main";
import Chat from "./Componets/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<h1>404! Page not Found !</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
