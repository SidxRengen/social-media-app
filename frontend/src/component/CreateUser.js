import React, { useState } from 'react'
import "./CreateUser.css"
import axios from 'axios'
export default function CreateUser() {
  const [newuser,setnewuser] = useState({name:"",age:"",contact:""})
  const Create = async(event)=>{
      await axios.post("http://localhost:5000/api/user/createuser",newuser)
      event.preventDefault()
  }
  const HandleChange=(e)=>{
      setnewuser({...newuser,[e.target.name]:e.target.value})
  }
  return (
    <div className='CreateUser'>
      <form method="post" className='newuser'>
        <label>Name</label>
        <input type="text" name="name" onChange={HandleChange}  />
        <label>Age</label>
        <input type="number" name="age" onChange={HandleChange} />
        <label>Phone Number</label>
        <input type="text" name="contact" onChange={HandleChange} />
        <button type="button" onClick={Create} className='submit'>Submit</button>
      </form>      
    </div>
  )
}
