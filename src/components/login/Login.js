import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../login/Login.css";
 
const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
 
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
 
    if (
      username.current.value === "admin@mail.com" &&
      password.current.value === "admin123"
    ) {
      console.log("form submitted...");
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      alert("Wrong password or email!");
    }
  };
 
  return (
    <div>
      <h1>Login</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="email" ref={username} placeholder="Username:" />
        <input type="password" ref={password} placeholder="Password:" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
 
export default Login;