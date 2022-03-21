import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const Users = () => {
    const [list,setList]= useState([]);
    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data:{data}})=>{
             setList(data)
            console.log(data)
        })
    },[])
  return (
    <div>
       <div>
       {list.map((e)=>{
           return  <>   <Link to={`/users/${e.id}`}  key={e.id}>  {e.first_name}</Link> <br />  </>
        })}
     </div>
        
    </div>
  )
}

export default Users