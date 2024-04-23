import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





function Signup() {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signUp', {userName, password})
    .then(result=>{console.log(result)
      if(result.data==="success"){
      Navigate("/")
      }
      else{
        alert("User already exists")
      }
  })
  .catch(err=>alert(err))
  };

  

  return (
    <div className="back"> {/* Added the 'back' class here */}
      <div className="login-container">
        <h2>Signup</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange = {(e) => setUserName(e.target.value)} />
          </div>
        
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" onChange = {(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" />
          </div>
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
