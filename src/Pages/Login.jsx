import React from "react";
import './CSS/Login.css'
const Login = () => {
  return (
    <div className="login">
     
        <h1>Login</h1>
        <div className="login-fields">
          <div className="email-field">
          <label for=''>Email</label>
          <input type="email" value='' /></div>
          <div className="password-field">
          <label for="">Password</label>
          <input type="password" value='' /></div>
          </div>
       
        <button className="sign-in-btn">Sign In</button>
        <div className="sign-up-container">
          
         <div className="signUp-btn"> <button >Sign Up</button></div>
        </div>

      </div>
   
  );
};

export default Login;
