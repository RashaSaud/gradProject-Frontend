import {useState, useEffect } from "react"
import axios from 'axios'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import{FcFullTrash} from 'react-icons/fc'
// import ImageUploading from "react-images-uploading";
// import { useNavigate } from "react-router-dom";
import{MdPostAdd} from 'react-icons/md'


export default function AdminPage({token }) {
    const [menu, setMenu] = useState([])
    const [price, setPrice] = useState([])

    const [postN, setPostN] = useState()
    const [postImg, setPostImg] = useState([])
    const [postD, setPostD] = useState([])
    const [postPrice, setPostPrice] = useState([])
    const [postImg1, setPostImg1] = useState([])
    const [postImg2, setPostImg2] = useState([])


    useEffect(async() => {
      console.log("hhhiii from UseEffect")
        const result = await axios.get("http://localhost:5000/menu",
          {
            headers:{authorization: "Bearer " + token},
        });
        setMenu(result.data);
     },[])

   

  

const Test =async(id,index)=>{
    console.log("HHhi")

    const deletedTask = await axios.delete(`http://localhost:5000/menu/${id}`,{
  headers:{authorization: "Bearer " + token},
});

  const copiedArr= [...menu];
copiedArr.splice(index,1);
setMenu(copiedArr);

  

}
// const changePrice =(e)=>{
//   setPrice(e.target.value)

// }

const handleSubmit =async  (id,i) => {

const response = await axios.put(`http://localhost:5000/update/${id}`,{newPrice:price},
{ headers:{authorization: "Bearer " + token}

})
const copiedArray =[...menu]
copiedArray[i]= response.data
console.log(id ,"idddd")
 setMenu(copiedArray)
 console.log(response.data ,"gggggg")

 setPrice('');

} ; 

const addPost = async ()=>{
  const res = await axios.post("http://localhost:5000/menu",{foodName:postN, 
  foodImg:postImg , 
  foodDescription:postD,
   foodPrice:postPrice,
   MiniImg1:postImg1,
   MiniImg2:postImg2 

  })
  const copiedArr = [...menu]
  copiedArr.push(res.data)
  setMenu(copiedArr)

}




    return (
      // className="container" id="main1" className="tab" className="menu-group"
          <div>
                                 <h1 className="admin" > Admin page </h1>
                                 <hr/>
        <div className="adminP">

                 {menu.map((element , i)=>{  
                                 return (    

                     <div  className="menu-item-text" key={i} >
                         <h3  className="menu-item-name">{element.Foodname}</h3>
                         <img className="menu-item-image" src={element.FoodImg}/>
                         <h4 className="menuDes w3-row-padding">{element.FoodDescription}</h4>
                         <h5>SR :{element.FoodPrice}</h5>
                         <button className="btnDelete" onClick={() => {
          Test(element._id, i);
        }} ><FcFullTrash/></button>
        <input type="text" 
          onChange={(e)=>{setPrice(e.target.value)}} value={price}   />
       
        <button onClick={() => {
          handleSubmit(element._id,i,
            )      

          }}>update</button>
                         <hr/>
                     </div>
                                 )
                            })}
               
                            <div>
                            <input type="text" placeholder="Food Name"   onChange={(e)=>{setPostN(e.target.value)}} value={postN} />
                            <input type="text" placeholder="Food Des" onChange={(e)=>{setPostD(e.target.value)}} value={postD}/>
                            <input type="text" placeholder="Food img" onChange={(e)=>{setPostImg(e.target.value)}} value={postImg}/>
                            <input type="text" placeholder="Food price" onChange={(e)=>{setPostPrice(e.target.value)}} value={postPrice}/>
                            <input type="text" placeholder="Food img1" onChange={(e)=>{setPostImg1(e.target.value)}} value={postImg1}/>
                            <input type="text" placeholder="Food img2" onChange={(e)=>{setPostImg2(e.target.value)}} value={[postImg2]}/>
                              <button  onClick={() => {addPost()}}><MdPostAdd/></button>
                            </div>
    </div>
    </div>
    )
                          }