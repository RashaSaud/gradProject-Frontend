import React from 'react'
import { Link } from 'react-router-dom'
import {BiFoodMenu} from 'react-icons/bi'
import {BsCart4 } from "react-icons/bs"
import "../App.css"


export default function NavBar({token , setToken}) {
// const logedOut =()=>{
//     localStorage.removeItem("token");
//         localStorage.removeItem("admin");
// }
    return (
        <div className="w3-panel w3-center  ">

{(token)?(
            <div className="w3-panel w3-center w3-opacity w3-bar w3-border">
                <Link className="w3-bar-item w3-button w3-yellow" to="/">Home </Link>
                <Link  className="w3-bar-item w3-button " to="/MenueList">ϻenu <BiFoodMenu/></Link>
                <Link  className="w3-bar-item w3-button " to="/Cart">Cart <BsCart4/> </Link>

                <Link   className="w3-bar-item w3-button " to="/" 
                onClick={() => {setToken("");
                    localStorage.clear();

                  }} 
                
                >Log out</Link>
</div>
           

            
         
        ):(
         
          
            <div className="w3-panel w3-center w3-opacity w3-bar w3-border">
                                <Link className="w3-bar-item w3-button w3-yellow" to="/">Home </Link>

                <Link className="w3-bar-item w3-button w3-blue" to="/login">LOG IN </Link>
                <Link  className="w3-bar-item w3-button " to="/signUp">SIGN UP</Link>
        </div>
 
        )}
        </div>
    )
}
