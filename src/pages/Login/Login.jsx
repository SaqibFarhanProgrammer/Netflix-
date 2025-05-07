import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";


const Login = () => {
 
  const {name , setname } = useState("")
  const {email , setemail } = useState("")  
  const {password , setpassword } = useState("")
 
  const handleSubmit = (e) => {
    e.preventDefault(); // 

    // Yahan API call ya auth logic laga sakte ho
  };

  return (
    <div className="login">
      <img src={logo} alt="" className="logo-login" />
      <div className="login-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}> 
          <input value={name} type="text" placeholder="Username" onChange={(e)=>{e.target.value == setname}} required />
          <input onChange={(e)=>{e.target.value == setemail}} value={email} type="Email" placeholder="Email" required />
          <input  onChange={(e)=>{e.target.value == setpassword} } value={password} type="Password" placeholder="Password" required />
          <button className="btn">Sign In</button>
          <div className="help">
            <div className="left">

            <input type="checkbox"  />
            <label>Remember </label>

            </div>
            <div className="right">
              <p>Need Help?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
