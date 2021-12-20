import React  , {useState , useEffect}from 'react'
import {BsCart4} from "react-icons/bs"
import axios from 'axios'
export default function MenueList({}) {
    const [menu, setMenu] = useState([])

   

    useEffect(async() => {
        const result = await axios.get("http://localhost:5000/menu");
        setMenu(result.data);
     },[])

     

    
    return (
        
        <div className="mnueBox">
         
                 {menu.map((element , i)=>{  
                                 return (    
                     <div key={i} >
                         <h3  className="menuDes w3-row-padding">{element.Foodname}</h3>
                         <img className="imgsMenue w3-row-padding" src={element.FoodImg}/>
                         <h4 className="menuDes w3-row-padding">{element.FoodDescription}</h4>
                         <h5 className="menuDes w3-row-padding"> SR :{element.FoodPrice}</h5>
                         <button ><BsCart4/> </button>
                         <hr/>
                     </div>
                                 )
                            })}


            <h1>Teeeesttcdsstt</h1>
        </div>
    )
}
