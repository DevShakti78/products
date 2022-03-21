import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [list,setList]= useState([]);
  console.log(list)
 useEffect(()=>{
 axios.get("http://localhost:3004/products").then((res)=>{
  setList(res.data)
  console.log(list) 
 })
 },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
      
        {list.map((el) => {
          return <>   <Link to={`/products/${el.id}`} key={el.id} >{/* Show product image and name */ el.name}</Link> <br /> </>;
        })}
      
        
      </div>
    </>
  );
};
