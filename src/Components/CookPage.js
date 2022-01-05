import React  , {useState , useEffect}from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {AiOutlinePlusCircle} from 'react-icons/ai'
// import {FaRegCommentDots} from 'react-icons/fa'

export default function CookPage({token ,setToken}) {
    const [oneItem, setOneItem] = useState([])
const p=useParams();
    useEffect(async() => {

        const response = await axios.get(`http://localhost:5000/menue/${p.id}`,
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
   const result = await axios.post(`http://localhost:5000/addTocart/${p.id}`,{},
   {
       headers:{authorization: "Bearer " + token}
})
  
console.log("dddd",result.data);

}catch (error) {
console.log(error.response.data);
} }
  

    return (
          
        
        <div className="cookPage"> 
             <div>
         <h1 className="FoodName">{oneItem.Foodname} </h1>
{/*        
         <img  src={oneItem.FoodImg}/>
         <img src={oneItem.miniImg1}/>
         <img src={oneItem.miniImg2}/> */}
 
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
                    <img
                    className="imgss1"
                    src={oneItem.miniImg1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                    className="imgss1"
                    src={oneItem.miniImg2}
                    alt="Third slide"
                    />

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
                 <h1>
                    <span className="menu-item-button "><button className="onePage-item-button" onClick={() => {Test()}}>
                        <AiOutlinePlusCircle/></button>
                        </span>
                    {/* <span className="menu-item-button "><button className="menu-item-button"><FaRegCommentDots/></button></span> */}

</h1>
             
             
       </div>
   </div>
   
//    onClick={()=>{addTocart(element.id)}}
    );
}