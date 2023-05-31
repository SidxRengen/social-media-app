import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Users.css";
import { Link } from "react-router-dom";
export default function Users() {
  const [user, setuser] = useState([]);

  const apidata = async () => {
    const data = await axios.get("http://localhost:5000/api/user/getuser");
    setuser(data.data);
    return data.data;
  };

  const delUser=async(_id)=>{
    await axios.delete("http://localhost:5000/api/user/deleteuser/"+_id);
    const data = await axios.get("http://localhost:5000/api/user/getuser");
    setuser(data.data);
  }

  useEffect(() => {
    apidata();
  }, []);

  return (
    <div className="users">
      <div className="head">
        <div className="name">Name</div>
        <div className="age">Age</div>
        <div className="contact">Contact</div>
        <div className="del"></div>
      </div>
      {user.map((el) => {
        const { age, name, contact,_id} = el;
        return (
          <>
          <div className="user" key={_id}>
            <div className="name">{name}</div>
            <div className="age">{age}</div>
            <div className="contact">{contact}</div>
            <div className="del"><button className="del_b" onClick={()=>delUser(_id)}>Delete</button></div>
            <div className="del"><button className="update_b"onClick={()=>sessionStorage.setItem("id",_id)}><Link to="./Update">Update</Link></button></div>
          </div>
          </>
        );
      })}
    </div>
  );
}
