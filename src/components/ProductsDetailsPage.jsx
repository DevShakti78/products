import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

export const ProductsDetailsPage = () => {
  const [product,setProduct]=useState({ "name" : "loading",
  "price": "...",
  "image":"....",
  "id" : ".."});
  const [notfound,setNotfound]=useState(true)
  const {id}=useParams();
  console.log(id)
 useEffect( ()=>{
  axios.get(`http://localhost:3004/products/${id}`).then((res)=>{
    //  console.log(res)
     setProduct(res.data)
     console.log(product)
    }).catch((err)=>{
      console.log("not found error",err)
      setNotfound(false)
    })
    },[ ]);
  return (
    <>
    {(notfound) ?   <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
       
        <img src={`${product.image}`} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
      </div> : <NotFoundPage/> }
    
    </>
  )
};
