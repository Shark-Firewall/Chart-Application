import React from "react";
import Main from "./Componets/Main";
import Chat from "./Componets/Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "success",
              },
            },
          }}
        ></Toaster>
      </div>
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
