import React from 'react'
import {useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {GrTrash} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'
import {FiMinus} from 'react-icons/fi'

import axios from 'axios'
export default function Cart({token,isAdmin}) {

    const [menu, setMenu] = useState([])
    const [quantity ,setQuantity]=useState()
    const p = useParams();

    useEffect(async() => {
        console.log("hhhiii from UseEffect")
          const result = await axios.get("http://localhost:5000/cart",
            {
              headers:{authorization: "Bearer " + token},
          });
          setMenu(result.data);
          console.log(result.data ,"resutttt for get")

       },[])

       const deleteItem = async (id,index)=>{
          
            console.log(token ,"tt")
               console.log("hii1")
               const del = await axios.delete(`http://localhost:5000/delete/${id}`,{
                   headers:{authorization: "Bearer "+ token}
               });
              //  setMenu(del.data)

  setMenu(del.data);
       }

       const deleteAllItem = async (id,i)=>{
          
        console.log(token ,"tt")
           console.log("hii1")
           const delAll = await axios.delete(`http://localhost:5000/deleteAllItem/${id}`,{
               headers:{authorization: "Bearer "+ token}
           });
         setMenu(delAll.data)

   }

       const Test = async (id)=>{
        try{
            console.log("Hiii ");
       const result = await axios.post(`http://localhost:5000/addTocart/${id}`,{},
       {
           headers:{authorization: "Bearer " + token}
    })
      
    console.log("dddd",result.data);
    setMenu(result.data)
    
    }catch (error) {
    console.log(error.response.data);
    } }
    console.log(menu,"mmmmm")

    return (

    <div className="menu-group" >
      
        {menu.map((element,i )=>{

       return (
           <div  className="menu-item" id="item1" key={i}>
               <img src={element.itemId.FoodImg} className="menu-item-image"/>
               <div  className="menu-item-text">
               <h5 className="menu-item-heading">
               <span className="menu-item-name">{element.itemId.Foodname}</span>
               <span className="menu-item-price">SR: {element.itemId.FoodPrice}</span>
               </h5>
               <p className="menu-item-description"> {element.itemId.FoodDescription}</p>
      <button  onClick={() => {deleteAllItem(element.itemId._id)}} className="qtyBtn"><GrTrash/></button>
      <br/>
      <br/>
    <button  onClick={() => {deleteItem(element.itemId._id)}} className="qtyBtn"><FiMinus/></button> quantity:{element.quantity}<button onClick={() => {Test(element.itemId._id)}}  className="qtyBtn"><AiOutlinePlus /></button>
               </div>

           </div>
       )
      
        })}

    
      </div>

    )

  }
