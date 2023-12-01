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
      console.log(result.data)
      if(result.data == "Success"){
        navigate('/home') 
      }
     
    })
  .catch(error => {
    console.error('Axios Error:', error);
    if (error.response) {
      console.error('Server responded with:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received from the server');
    } else {
      console.error('Error setting up the request:', error.message);
    }
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
