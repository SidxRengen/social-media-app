import  { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [day,setday] = useState(["","","",""])
    const date = new Date()
    // setime(date.getDay())
    // setime("12")
    return (
    <div className='Nav'>
        <div className="logo"><Link to={"/"}>Users</Link></div>
        <div className="create"><Link to={"/Create"}>Create</Link></div>
        <div className="blank"></div>
        <div className="time"><button className='fulltime' onClick={()=>{ setday([date.getDay(),
        date.getHours()+"hr",date.getMinutes()+"min",date.getSeconds()+"sec"])}}>Click to get Time</button></div>
        <div className="time">{day[1]} {day[2]} {day[3]}</div>
    </div>
  )
}
