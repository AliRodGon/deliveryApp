import axios from 'axios';
import React, {useEffect, useState, Fragment} from 'react';


// const url = "http://localhost:5000/api/auth/register"
const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [username, setUsername]= useState('');
    const [answer, setAnswer]=useState('')
    // 
    
    const handleLogin = e => {
      e.preventDefault()



      const data = { username, email, password }
      const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
      };
      fetch("http://localhost:5000/api/auth/login", requestOptions)
            .then(response=>response.json())
            .then(response => setAnswer(response)

            
            )
            if (!answer.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || answer.status;
                  return Promise.reject(error);
              }
            
     
    };



  return (

    <div className='login'>
            <h1>{answer}</h1>
          <h1>Login</h1>
          <input type="text" className='inputBox' placeholder='Usuario'
                onChange={(e)=>setUsername(e.target.value)} value={username} />
          <input type="text" className='inputBox' placeholder='eMail'
                onChange={(e)=>setEmail(e.target.value)} value={email} />
          <input type="text" className='inputBox' placeholder='Contraseña'
                onChange={(e)=>setPassword(e.target.value)} value={password} />
          <button type="submit" onClick={handleLogin}>LOGIN</button>      
    </div>

  )
};

export default Login;
