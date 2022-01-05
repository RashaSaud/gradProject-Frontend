import React  , {useState , useEffect}from 'react'
import {BsCart4} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import {CgMoreVertical} from "react-icons/cg"

import axios from 'axios'
export default function MenueList({token}) {
    const [menu, setMenu] = useState([])

    const Navigate = useNavigate();


    useEffect(async() => {
        const result = await axios.get("http://localhost:5000/menu")
        setMenu(result.data);
     },[])
     const goTopage =(id) => {
       console.log(id);
        Navigate(`/menu/${id}`)
      } 
// const addTocart =()=>{
//   alert("added to cart")
// }
    
    return (
        

<div className="container" id="main1" className="tab">

<div className="menu">
  <div className="header">
  <h2 className="menu-group-heading" id="menu">  Ḿenu ..</h2>
  </div>
  <div className="menu-group" >
  {menu.map((element,i )=>{
 return (
     <div  className="menu-item" id="item1" key={i}>
         <img src={element.FoodImg} className="menu-item-image" onClick={()=>{goTopage(element._id)}}/>
         <div  className="menu-item-text">
         <h5 className="menu-item-heading">
         <span className="menu-item-name">{element.Foodname}</span>
         <span className="menu-item-price">SR: {element.FoodPrice}</span>
         </h5>
         <p className="menu-item-description"> {element.FoodDescription}</p>

         </div>

     </div>
 )

  })}

</div>
</div>
</div>
    )}
