import React  , {useState , useEffect}from 'react'
import { useNavigate } from "react-router-dom";
import {CgMoreVerticalAlt} from "react-icons/cg"
import axios from 'axios'
export default function MenueList({token}) {
    const [menu, setMenu] = useState([])

    const Navigate = useNavigate();


    useEffect(async() => {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/menu`)
        setMenu(result.data);
     },[])
     const goTopage =(id) => {
       console.log(id);
        Navigate(`/menu/${id}`)
      } 


    
    return (
        

// <div className="container" id="main1" className="tab">

// <div className="menu">
//   <div className="header">
//   <h2 className="menu-group-heading" id="menu">  Ḿenu ..</h2>
//   </div>
//   <div className="menu-group" >
//   {menu.map((element,i )=>{
//  return (
//      <div  className="menu-item" id="item1" key={i}>
//          <img src={element.FoodImg} className="menu-item-image" id="Test" onClick={()=>{goTopage(element._id)}}/>
//          <div  className="menu-item-text">
//          <h5 className="menu-item-heading">
//          <span className="menu-item-name" >{element.Foodname}</span>
//          <span className="menu-item-price">SR: {element.FoodPrice}</span>
//          </h5>
//          <p className="menu-item-description"> {element.FoodDescription}</p>
// <button  onClick={()=>{goTopage(element._id)}} className="w3-panel  w3-opacity w3-yellow w3-border"><CgDetailsMore/></button>
//          </div>

//      </div>
 
//  )

//   })}

// </div>
// </div>

// </div>
<>
<div className="container" id="main1" className="tab">
      <div className="menu">
        <h2 className="menu-group-heading"> FOOD Ḿenu ..</h2>
        
        <div className="menu-group" >
        {menu.map((element,i )=>{
            return (
                <div className="menu-item" id="item1" key={i}>
                <img onClick={()=>{goTopage(element._id)}} src={element.FoodImg} className="menu-item-image"/>
                <div className="menu-item-text">
                  <h3 className="menu-item-heading">
                    <span className="menu-item-name">{element.Foodname}</span>
                    <span className="menu-item-price">SR:{element.FoodPrice} </span>
                    <span className="menu-item-cart"><button  onClick={()=>{goTopage(element._id)}}><CgMoreVerticalAlt/></button></span>
    
    
    
                  </h3>
                  <p className="menu-item-description">{element.FoodDescription} </p>
                </div>
              </div>
           
            )
      
        })}
        </div>
        </div>
        </div>
</>
    )} 
