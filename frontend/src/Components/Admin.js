import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Admin.css'
import Updatestudent from './Updatestudent'

export default function Admin() {

    const[detail,setDetail]=useState([])
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const [studata ,setstudata ]=useState()
    const originalData = useRef([]);

    useEffect(() => {
      axios.get('http://localhost:3001/register/getdetails')
        .then(res => {
          setDetail(res.data); // Store data normally
          originalData.current = res.data; // Keep a copy of the full data
        })
        .catch(err => console.log(err));
    }, []);


      const inputref=useRef(null)
      useEffect(()=>{
        inputref.current.focus()
      })


const handleSearch = () => {
  const query = studata?.toLowerCase() || "";
  const filteredData = originalData.current.filter(x =>  // Use `originalData.current`
    x.firstname.toLowerCase().includes(query) ||
    x.lastname.toLowerCase().includes(query) ||
    x.skills.some(skill => skill.toLowerCase().includes(query)) || 
    x.cgpa==studata
  );
  setDetail(filteredData);
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/register/delete/${id}`) // Updated URL
      .then(res => {
          alert('Deleted Successfully');
          setDetail(prev => prev.filter(item => item._id !== id)); // Remove item from UI
      })
      .catch(err => console.log(err));
};


    const handleEdit=(data)=>{
      setData(data)
      navigate(`/updateform/${data._id}`)
    }

  return (
    <div>
      <nav className='adminnav'>    {/* Index.css */}
      <h2 className='admintxt'>Admin Page</h2>
        <NavLink to='/admindashboard'>Students Dashord</NavLink>
        <NavLink to='/admincompany'>Company</NavLink>
      </nav>

      <div id='search'>
      <input type='search' id='studentssearch' placeholder='Search Students...' ref={inputref}  value={studata} onChange={(e)=>{setstudata(e.target.value)}}/>
      <button id='search-btn' onClick={handleSearch}>Search</button>
      </div>

      {detail.map(x=>(
      <div className='firstname'>
        <h3 className='sname'>{x.firstname} {x.lastname}</h3>
        <div className='admin-btns'>
        <button className='admin-btn' onClick={()=>handleEdit(x)}>Update</button>
        <button className='admin-btn' onClick={()=>handleDelete(x._id)}>Delete</button>
        <button onClick={()=>{navigate(`/details/${x._id}`)}} className='admin-btn'>View Details</button>
        </div>

      </div>
      ))}
    </div>
  )
}
