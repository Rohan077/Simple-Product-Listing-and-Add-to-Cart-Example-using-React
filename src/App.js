// App.js
import React, { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
 
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";
 
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact index element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          exact
          path="login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          exact
          path="home"
          element={isLoggedIn ? <Home /> : <Navigate replace to={"/login"} />}
        />
        <Route exact path="*" element={<h1>Error Page!</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;