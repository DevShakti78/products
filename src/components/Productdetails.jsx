import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
    const {id}=useParams();
    const [user,setUser]=useState([]);
   useEffect(()=>{
   axios.get(`https://reqres.in/api/users/${id}`).then((({data:{data}})=> {
    
     console.log("response:",data)
     setUser(data)
    }
     ) )
   console.log("fetch",user)
   },[])
  return (
    <div>Productdetails
        <h3>{user.first_name}</h3>
    </div>
  )
}

export default Productdetails