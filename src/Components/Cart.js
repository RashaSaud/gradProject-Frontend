import React from 'react'
import {useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {FaCcVisa, FaToriiGate} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'
import {SiContactlesspayment} from 'react-icons/si'
import {FaCcDiscover} from 'react-icons/fa'
import "./Cart.css"
import axios from 'axios'
import {MdAvTimer} from 'react-icons/md'
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
export default function Cart({token,setToken}) {

    const [menu, setMenu] = useState([])


    //for payment Page 
    const [payment ,setPayment]=useState(false)
  const [email, setemail] = useState("")
  const [pay, setPay] = useState(false)
  const [correctEmail,setCorrectEmail]=useState("")
  const [enterTopay, setEntertopay] = useState(false)

  const p = useParams();
const navigate = useNavigate();

    useEffect(async() => {
        console.log("hhhiii from UseEffect")
          const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`,
            {
              headers:{authorization: "Bearer " + token},
          });
          setMenu(result.data);
          console.log(result.data ,"resutttt for get")

       },[])

       const deleteItem = async (id,index)=>{
          
            console.log(token ,"tt")
               console.log("hii1")
               const del = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${id}`,{
                   headers:{authorization: "Bearer "+ token}
               });

  setMenu(del.data);
       }

       const deleteAllItem = async (id,i)=>{
          
        console.log(token ,"tt")
           console.log("hii1")
           const delAll = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/deleteAllItem/${id}`,{
            headers:{authorization: "Bearer "+ token}

           });
         setMenu(delAll.data)

   }

       const Test = async (id)=>{
        try{
            console.log("Hiii ");
       const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addTocart/${id}`,{},
       {
           headers:{authorization: "Bearer " + token}
    })
      
    console.log("dddd",result.data);
    setMenu(result.data)
    
    }catch (error) {
    console.log(error.response.data);
    } }
    console.log(menu,"mmmmm")



    const T = async (id)=>{
      try{
         setPayment(!payment)
         setEntertopay(!enterTopay)

      }catch (error) {
  console.log(error.response.data);
      } 
      }




       const addEmail =(e)=>{
         setemail(e.target.value)
           }


const sendEmail = async(index) =>{
    console.log("hiii1")
       try{
        const sendMail = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/send-email`,{
        email:email
         })
         navigate("/orderSuccessful")
         
      const clearCart = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/clearCart`,{
        headers:{authorization: "Bearer " + token}

      })
      setMenu(clearCart)

}catch(err){
  console.log(err)
}}
  

       const cardPay =()=>{
         setPay(!pay)
       }
 



     const ckekEmail=()=>{
       setCorrectEmail(`note: Please make sure your email is active,
             we will contact you there`)}
console.log(menu,"hii from menu")
    return (
      menu.length ? 
    <>
  
     <header id="site-header">
    <div className="container">
      <h4>Your Shoping Cart ..</h4>
     


    </div>

  </header>
  <div className="container">
{menu.map((element,i )=>{

  return(
    <div>

        <section id="cart"> 
      <article className="product">
        <header>
          <a className="remove" onClick={() => {deleteAllItem(element.itemId._id)}} >
            <img src={element.itemId.FoodImg} alt=""/>

            <h3>Remove product</h3>
          </a>
        </header>

        <div className="content">

          <h1>{element.itemId.Foodname}</h1>
          {element.itemId.FoodDescription}
          
        </div>
       
        <footer className="content">
          <span className="qt-minus"   onClick={() => {deleteItem(element.itemId._id)}} >-</span>
          <span className="qt">{element.quantity}</span>
          <span className="qt-plus"  onClick={() => {Test(element.itemId._id)}} >+</span>

          <h2 className="price">
            
         SR: {element.itemId.FoodPrice}
          </h2>


        </footer>
      </article>
</section>
      </div>


  )
  
})}

<div className="Subtotal">Total Price:</div>
      <div className="items">
      {menu.reduce((total, item)=>total+(item.itemId.FoodPrice*item.quantity),0)}SR

      </div>

    </div>
    <div className="prices">
    
    {enterTopay===false?  
    <div>
      <br/>
    <button className="orderNow" onClick={() => {T()}}>click to pay</button>
      <br/> <br/>
      </div>

      :""}

    </div>

    {payment===true? 
    <div>
      <br/>
      <div  className="paymentDiv">

   <label for="cname">Your name</label>
            <input type="text" id="cname" name="cardname"  className="inputPay" />
   </div>
   <div  className="paymentDiv">
   <label for="cname" >Your Email</label>
            <input type="text" id="cname" name="cardname" className="inputPay"    onChange={(e) => {
          addEmail(e);
        }} onClick={() => {
          ckekEmail();
        }}  />
        
        <br/>
        <p>{correctEmail}</p>
   </div>
   <div  className="paymentDiv">
   <h3 className="payment">Payment</h3>
   <p>please select how would like to pay</p>
   <button onClick={() => {
          cardPay();
        }}   className="payBtn">1- <SiContactlesspayment/>pay with card</button>

        {pay===true?<div className="paymentDiv">
          <br/>
          <label for="fname">Accepted Cards:</label>
            <div class="icon-container">
              <i  className="visa"><FaCcVisa/> </i>
              <i className="masterCard"><FaCcMastercard/> </i>
              <i className="discover" ><FaCcDiscover/> </i>
              <br/>
              <label for="cname">Name on Card</label>
              <br/>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" className="inputPay"  />
            </div>
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" className="inputPay" />
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" className="inputPay" />
                <br/>
                <button onClick={() => {
          sendEmail()}} className="payBtn">Order Now<MdAvTimer/></button>
              </div>
         </div>
            

        </div>
        :
        
        <div> 2-<input type="checkbox" /> Cash on Delivery<br/>
        <br/>
         <button onClick={() =>{sendEmail()}}className="payBtn" >Order Now<MdAvTimer/></button>
         </div>}
        </div>
    </div>
:""}
    </>: 
    <div className="emptyCart">
    <img className="imagee" src="data:image/png;base64,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"/>
    </div>
    ) }
