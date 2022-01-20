import React  , {useState , useEffect}from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {BsCartDashFill} from 'react-icons/bs'
import {BsCartCheckFill} from 'react-icons/bs'
export default function CookPage({token ,setToken}) {
    const [oneItem, setOneItem] = useState([])
    const [button, setButton] = useState(false)

const p=useParams();
    useEffect(async() => {

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/menue/${p.id}`,
        {
            headers:{authorization: "Bearer " + token}
        })
        setOneItem(response.data)
        console.log(response.data,"uuunnnnnnn")

    },[])

   
console.log(oneItem,"onnnneeee item")
const Test = async ()=>{
    try{
        console.log("Hiii ");
   const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addTocart/${p.id}`,{},
   {
       headers:{authorization: "Bearer " + token}
})
  setButton(!button)
console.log("dddd",result.data);

}catch (error) {
console.log(error.response.data);
} }
  

    return (
          
        
        <div className="cookPage"> 
             <div>
         <h1 className="FoodName">{oneItem.Foodname} </h1>
 
         <hr/>
         <br/>
         <div className="Projects">
            <Carousel>
                <Carousel.Item> 
                    <img
                    className="imgss1"
                    src={oneItem.FoodImg}
                    alt="First slide"
                    />
                 <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item> 
            <Carousel.Item>
                <img className="imgss1" src={oneItem.miniImg1}/>
                <Carousel.Caption>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img  className="imgss1" src={oneItem.miniImg2}/>
                <Carousel.Caption>
                    </Carousel.Caption>
            </Carousel.Item>
            </Carousel> 
        </div>
      
                 <div >
                 <h3 className="FoodName">Discription :</h3>
                 <p className="FoodDes">{oneItem.FoodDescription}</p>
                 <br/></div>
                 <h3  className="FoodName">Price :</h3>
                 <p>{oneItem.FoodPrice} SR</p>
                 {button===false? 
                 <h1>
                    <span className="menu-item-button "><button className="onePage-item-button" onClick={() => {Test()}}>
                        <BsCartDashFill/></button>

                        </span>
                    

</h1>:

<div>
<h1>
                    <span className="menu-item-button "><button className="onePage-item-button" onClick={() => {Test()}}>
                    <BsCartCheckFill/>
</button>

                        </span>
                    

</h1>
                    
    </div>
}
             
             
       </div>
   </div>
   
    );
}