// import axios from 'axios'
// import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import {FaCcVisa} from 'react-icons/fa'
// import {FaCcMastercard} from 'react-icons/fa'
// import {SiContactlesspayment} from 'react-icons/si'
// import {FaCcDiscover} from 'react-icons/fa'
// import "../Test.css"
// import { Button } from 'semantic-ui-react';
// import { MdSentimentNeutral } from 'react-icons/md';

// export default function Payment({}) {

//   const [email, setemail] = useState("")
//   const [pay, setPay] = useState(false)
//   const [correctEmail,setCorrectEmail]=useState("")



// const Navigate = useNavigate()


// const data = "This is data from Child Component to the Parent Component."

//   const addEmail =(e)=>{
//     setemail(e.target.value)
//   }
//   const sendEmail = async(id) =>{
//     console.log("hiii1")
//     try{
//       const sendMail = await axios.post("http://localhost:5000/send-email",{
//         email:email
//       })
//         Navigate("/orderSuccessful")
         
     

// console.log("hiii3")
//     }catch(err){

//     }
//     console.log("hiii")

//   }

//   const cardPay =()=>{
//     setPay(true)
//   }

//   const ckekEmail=()=>{
//     setCorrectEmail("note: Please make sure your email is active, we will contact you there")

//   }
//   return (
//    <div className="page">
//    <div>
//    <label for="cname">Your name</label>
//             <input type="text" id="cname" name="cardname"  className="inputPay"/>
//    </div>
//    <div>
//    <label for="cname" >Your Email</label>
//             <input type="text" id="cname" name="cardname" className="inputPay" onChange={(e) => {
//           addEmail(e);
//         }} onClick={() => {
//           ckekEmail();
//         }} />
//         <br/>
//         <p>{correctEmail}</p>
//    </div>
//    <div  className="payBox">
//    <h3 className="payment">Payment</h3>
//    <p>please select how would like to pay</p>
//    <button onClick={() => {
//           cardPay();
//         }}   className="payBtn"><SiContactlesspayment/>pay with card</button>
//          {pay===true? 
//          <div> 
//             <label for="fname">Accepted Cards</label>
//             <div class="icon-container">
//               <i  className="visa"><FaCcVisa/> </i>
//               <i className="masterCard"><FaCcMastercard/> </i>
//               <i className="discover" ><FaCcDiscover/> </i>
//               <label for="cname">Name on Card</label>
//             <input type="text" id="cname" name="cardname" placeholder="John More Doe" className="inputPay"/>
//             </div>
//             <div class="row">
//               <div class="col-50">
//                 <label for="expyear">Exp Year</label>
//                 <input type="text" id="expyear" name="expyear" placeholder="2018" className="inputPay"/>
//               </div>
//               <div class="col-50">
//                 <label for="cvv">CVV</label>
//                 <input type="text" id="cvv" name="cvv" placeholder="352" className="inputPay"/>
//               </div>
//          </div>
        
//          </div>
         
         
         
//          :
//          <div> <input type="checkbox" />Cash on Delivery
//   </div>
//            }
          

//         <input type="submit" value="Continue to checkout" class="btn" onClick={() => {
//           sendEmail()}} />

//    </div>

//       </div>  
//   )

// }
