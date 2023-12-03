import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

const serverURL = 'http://localhost:3001';

function Login(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${serverURL}/login`, { email, password })
      .then(result => {
        console.log(result.data);
  
        if (result.data.status === "Success") {
          const user = result.data.user;
          const userRole = user?.role;
  
          if (userRole === "admin") {
            navigate('/upload');
          } else {
            navigate('/home');
          }
        } else {
          console.error('Login failed:', result.data.status);
        }
      })
      .catch(error => {
        console.error('Axios Error:', error);
        // Handle other errors (e.g., network error, server error)
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}


export default Login;
