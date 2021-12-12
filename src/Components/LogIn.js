import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Login({setToken}) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      setToken(response.data.token);
      console.log(response.data.token);
      Navigate("/ToDoList");
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <div >
           <h3> Email: </h3>
            <input className="inputSignUp" type="text" name="username"   onChange={(e) => {
          changeEmail(e);
        }} />

           <h3> Password: </h3>

            <input className="inputSignUp" type="password"   onChange={(e) => {
          changePassword(e);
        }} id="" name="password" />
            <Link  to={`/`}>
            <input className="btnLogIn" type="submit" name="submit" value="Log In"  onClick={() => {
          checkLogin();
        }} />
            </Link> <br />
            <label for="" className="newCustomer">You dont have an account?  </label>
            <Link  to={`/signup`}>
            <button className="regBtn" >Join Us</button>
            </Link>
    </div>
    )
}
