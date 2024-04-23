import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import your CSS file for styling
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const Navigate = useNavigate()
  
  
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    axios.post('http://localhost:3001/login',{username, password})
    .then(result=>{console.log(result)
      if(result.data==="success"){
      Navigate("/Home")
      }
      else{
        alert("Incorrect password or Username")
      }
      
    })
    .catch(err=>alert(err))
  };

  // Render the login form if not logged in, otherwise redirect to home
  return(<div>
  
    <div className="back">
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Log in</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
    </div>
  );
}

export default Login;
