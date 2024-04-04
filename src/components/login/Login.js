import React, {  } from "react";
import { useRef } from "react";
import {Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signIn } from "../../redux/reducers/loginSlice";
 
const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const dispatch=useDispatch();
 
  const onSubmit = (e) => {
    e.preventDefault();
 
    const user={
      email:email.current.value,
      password:password.current.value,
    }

      if(user.email && user.password){
        dispatch(signIn(user))
        window.location.reload()
      }else{
        alert('Please enter all the details!')
      }
  };
 
  return (
    <div>
      <h1>Login</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="email" ref={email} placeholder="Email:" />
        <input type="password" ref={password} placeholder="Password:" />
        <button type="submit">Login</button>
      </form>
      <p>Not registered? <Link to="/registration">Register here</Link>.</p>
    </div>
  );
};
 
export default Login;