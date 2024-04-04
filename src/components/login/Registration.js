import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../login/Registration.css";
import { useDispatch } from 'react-redux';
import { signUp } from "../../redux/reducers/loginSlice";
 
const Registration = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmPassword = useRef(null);
 
  const onSubmit = (e) => {
    e.preventDefault();

    const user={
      name:name.current.value,
      email:email.current.value,
      password:password.current.value,
    }

    if(user.password!==confirmPassword.current.value){
      alert('Password does not match!')
      return;
    }

    if(user.name && user.email && user.password){
      dispatch(signUp(user))
      navigate('/login')
    }else{
      alert('Please enter all the details!')
    }
  
  };
 
  return (
    <div>
      <h1>Register</h1>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" ref={name} placeholder="Name:" />
        <input type="email" ref={email} placeholder="Email:" />
        <input type="password" ref={password} placeholder="Password:" />
        <input type="password" ref={confirmPassword} placeholder="Confirm Password:" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
 
export default Registration;