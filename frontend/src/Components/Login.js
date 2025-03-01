import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import Person from '../Components/assets/person.png'
import Lock from '../Components/assets/Signuplock.png'
import Mail from '../Components/assets/email.png'
import './Login.css'
import axios from 'axios'

export default function Login(props) {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const auth=useAuth()
  const navigate=useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    
    axios.post('http://localhost:3001/authentication/login', { email, password })
      .then(res => {
        if (res.status === 200) {
          auth.login(res.data.email)
          alert('Login Successful!')
          navigate('/');
          
          if (email === 'admin@example.com')
             { 
            navigate('/admin');
          }
        }
      })
      .catch(err => {
        console.log(err);
        alert('Invalid email or password');
      });
  }
  

  // const inputref=useRef(null) //Auto Focusing the Username input
  // useEffect(()=>{
  //   inputref.current.focus()
  // },[])
  
  return (
    <div>
      <h3 className='ltop'>Login</h3>
      <form className='loginform'  onSubmit={handleSubmit}>

          <div className='lemail'>
            <div className='img2'><img src={Mail} className='image'/></div>
            <input type='mail' name='email' id='lemail' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} required/><br></br>
          </div>

          <div className='lpass'>
            <div className='img3'><img src={Lock} className='image'/></div>
          <input type='Password' id='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} required/><br></br>
          </div>

          <button id='loginbtn' type='submit'>Login</button>
      </form>
    </div>
  )
}













// import React, { useState } from 'react';
// import { useAuth } from './Auth';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const auth = useAuth();
//   const navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();

//     axios.post('http://localhost:3001/authentication/login', { email, password })
//       .then(res => {
//         if (res.status === 200) {
//           auth.login(res.data.email);
//           localStorage.setItem('userEmail', res.data.email);
//           alert('Login Successful!');
//           if (email === 'admin@example.com') {
//             navigate('/admin');
//           } else {
//             navigate('/profile'); // Redirect to Profile page
//           }
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         alert('Invalid email or password');
//       });
//   }

//   return (
//     <div>
//       <h3>Login</h3>
//       <form onSubmit={handleSubmit}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
