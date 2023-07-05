import {useState, useEffect } from "react"
import axios from 'axios'
import{MdClose} from 'react-icons/md'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase/Config";

export default function AdminPage({token }) {
    const [menu, setMenu] = useState([])
    const [price, setPrice] = useState([])

    const [postN, setPostN] = useState()
    const [postImg, setPostImg] = useState([])
    const [postD, setPostD] = useState([])
    const [postPrice, setPostPrice] = useState([])
    const [postImg1, setPostImg1] = useState([])
    const [postImg2, setPostImg2] = useState([])
    const [progress, setProgress] = useState(0);
//testttttt12  jiasjaisjaiji 

    useEffect(async() => {
      console.log("hhhiii from UseEffect")
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/menu`,
          {
            headers:{authorization: "Bearer " + token},
        });
        setMenu(result.data);
     },[])
//test
   
     const formHandler = (e) => {
      e.preventDefault();
      const file = e.target[0].files[0];
      uploadFiles(file);
    };

    const uploadFiles = (file) => {
      if (!file) return;
      const sotrageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(sotrageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setPostImg(downloadURL)
          });
        }
      );
    };

  

const Test =async(id,index)=>{
    console.log("HHhi")

    const deleteMenu = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/menu/${id}`,{
  headers:{authorization: "Bearer " + token},
});

  const copiedArr= [...menu];
copiedArr.splice(index,1);
setMenu(copiedArr);

  

}



const handleSubmit =async  (id,i) => {

const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`,{newPrice:price},
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
  const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/menu`,{foodName:postN, 
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
          <div>
                                 <h1 className="test" > Admin panel </h1>
                                 <hr/>

        <div className="adminP">
<h3>menu update</h3>
                 {menu.map((element , i)=>{  
                                 return (    

                     <div  className="menu-item-text" key={i} >
                         <h3  className="menu-item-name">{element.Foodname}</h3>
                         <img className="menu-item-image" src={element.FoodImg}/>
                         <h4 className="menuDes w3-row-padding">{element.FoodDescription}</h4>
                         <h5>SR :{element.FoodPrice}</h5>
                         <button className="btnDelete" onClick={() => {
          Test(element._id, i);
        }} className="x"><MdClose/></button>
        <input type="text" 
          onChange={(e)=>{setPrice(e.target.value)}} value={price}   />
       
        <button onClick={() => {
          handleSubmit(element._id,i,
            )      

          }} className="upload">update</button>
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
                            <input type="text" placeholder="Food img2" onChange={(e)=>{setPostImg2(e.target.value)}} value={postImg2}/> 
                            <button  onClick={() => {addPost()}} className="upload">New Post</button>

  <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit" className="upload">upload</button>
      </form>
      <hr />
      <h6>Uploading done {progress}%</h6>
                   
                            </div>
                            </div>
    </div>
    </div>
    )
                          }