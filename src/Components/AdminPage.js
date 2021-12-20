import {useState, useEffect } from "react"
import axios from 'axios'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import{FcFullTrash} from 'react-icons/fc'

export default function AdminPage({token }) {
    const [menu, setMenu] = useState([])
    
    useEffect(async() => {
        const result = await axios.get("http://localhost:5000/menu");
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

  

// }
// const updateMenue= async(id,i)=>{
//   console.log("hhhi")
// const newName= prompt("Enter New Value:")
// console.log("lll")

//   const upDateMenu = await axios.put(`http://localhost:5000/update/${id}`,
//   {   headers:{authorization: "Bearer " + token},

// })  
// setMenu(upDateMenu.data)

// console.log("dddd")

// if(upDateMenu.data.isAdmin==true){
//   setMenu(upDateMenu.data)
//   console.log(upDateMenu,"lll")
// };


// }

}

        
          

        
        // if (deletMenu.data == "deleted"){
        //   const copiedArr= [...menu];
        // copiedArr.splice(i,1);
        // setMenu(copiedArr);
        

          
    return (
     
        <div className="mnueBox">
                 {menu.map((element , i)=>{  
                                 return (    
                     <div key={i} >
                         <h3  className="menuDes w3-row-padding">{element.Foodname}</h3>
                         <img className="imgsMenue w3-row-padding" src={element.FoodImg}/>
                         <h4 className="menuDes w3-row-padding">{element.FoodDescription}</h4>
                         <h5 className="menuDes w3-row-padding"> SR :{element.FoodPrice}</h5>
                         <button className="btnDelete" onClick={() => {
          Test(element._id, i);
        }} ><FcFullTrash/></button>
        {/* <button onClick={()=>{updateMenue(i)}}> <GrUpdate/></button> */}
                         <hr/>

                     </div>
                                 )
                            })}


        </div>
    )
}


