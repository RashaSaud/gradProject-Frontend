import React ,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const addName = (e) => {
        setName(e.target.value);
      };
      const addEmail = (e) => {
        setEmail(e.target.value);
      };
      const addPass = (e) => {
        setPassword(e.target.value);
      };
      const addUser = async () => {
        console.log({
          name: name,
          email: email,
          password: password,
        });
        
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {
        name: name,
        email: email,
        password: password,
      });
      if (response.status === 201){
          Navigate("/Login")
      }
      };
    return (
  

        <div className="signUp">
        <h1 className="signUpTitle">Join Us:</h1>
        <input className="inputSignUp"
          onChange={(e) => {
            addName(e);
          }}
          placeholder="enter your name"
        />
        <br/>
        <input className="inputSignUp"
          onChange={(e) => {
            addEmail(e);
          }}
          placeholder="enter your email"
        />
              <br/>
  
  
        <input className="inputSignUp"
          onChange={(e) => {
            addPass(e);
          }}
          type="password"
          placeholder="enter your password"
        />
                  <br/>
  
  
        <button className="btnSignUp" className="w3-opacity w3-bar-item w3-button w3-yellow"
          onClick={() => {
            addUser();
          }}
        >
          sign up
        </button>
        </div>

    
   
  
  
    );
  }