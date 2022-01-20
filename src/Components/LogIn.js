import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login({setToken ,setIsAdmin}) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chickLogIn, setchickLogIn] = useState("");

  const Navigate = useNavigate();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };


  const checkLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email: email,
        password: password,
      });
      if(response.data.isAdmin == true){
        setToken(response.data.token)
        setIsAdmin(response.data.isAdmin)
        localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem("admin",JSON.stringify(response.data.isAdmin))
Navigate("/admin")
      }else{
        setToken(response.data.token);
        setIsAdmin(response.data.isAdmin)
        localStorage.setItem("token",JSON.stringify(response.data.token))
        localStorage.setItem("admin",JSON.stringify(response.data.isAdmin))

      Navigate("/MenueList");
    }
  }

    
    
    
    catch (error) {
     if(error.response.status === 403){
       setchickLogIn("the password isn't correct")

     }else if(error.response.status === 404){
      setchickLogIn("the email isn't correct")
     }
    }

 
  };
    return (
        <div className="signUp" >
           <h3> Email: </h3>
            <input className="inputSignUp" type="text" name="username"   onChange={(e) => {
          changeEmail(e);
        }} />
           <h3> Password: </h3>

            <input className="inputSignUp" type="password"   onChange={(e) => {
          changePassword(e);
        }} id="" name="password" />
           
              <br/>
          
              <button className="btnLogIn" onClick={() => {
          checkLogin();
        }}      className="w3-opacity w3-bar-item w3-button w3-yellow " to="/login"
        >Log in</button>
        <br/>
        <h3 className="wrongPass"> {chickLogIn} </h3>

            <label className="newCustomer">You dont have an account?  </label>
            <Link  to={`/signup`} >
            <a   className="w3-bar-item w3-text "  >Join Us</a>
            </Link>
    </div>
 
    )
}
