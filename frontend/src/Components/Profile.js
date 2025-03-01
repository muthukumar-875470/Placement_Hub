import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const auth=useAuth()
  const navigate=useNavigate()
  function handleLogout(){
    auth.logout(null)
    alert('Logged Out')
    navigate('/login')
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}














// import React, { useEffect, useState } from 'react';
// import { useAuth } from './Auth';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Profile() {
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const userEmail = auth.user || localStorage.getItem('userEmail'); // Get email from context or storage

//     if (userEmail) {
//       axios.get(`http://localhost:3001/register/getdetailsbyemail/${encodeURIComponent(userEmail)}`)
//         .then(res => {
//           setData(res.data);
//           setLoading(false);
//         })
//         .catch(err => {
//           setError('Failed to fetch details');
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//       setError('No user logged in');
//     }
//   }, [auth.user]);

//   function handleLogout() {
//     auth.logout();
//     alert('Logged Out');
//     navigate('/login');
//   }

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>Hai {data.firstname}!</h1>
//       <p><strong>Email:</strong> {data.email}</p>
//       <p><strong>Name:</strong> {data.firstname} {data.lastname}</p>
//       <p><strong>College:</strong> {data.collegename}</p>
//       <p><strong>Branch:</strong> {data.degree} {data.course}</p>
//       <p><strong>GitHub:</strong> <a href={data.github} target="_blank" rel="noopener noreferrer">{data.github}</a></p>
//       <p><strong>LinkedIn:</strong> <a href={data.linkedin} target="_blank" rel="noopener noreferrer">{data.linkedin}</a></p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }
