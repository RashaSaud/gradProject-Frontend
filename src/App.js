import React  , {useState ,useEffect }from 'react'
import Home from "./Components/Home"
import Navbar  from './Components/NavBar'
import { Route , Routes} from "react-router-dom";
import NotFound from "./Components/NotFound";
import LogIn from "./Components/LogIn"
import SignUp from './Components/SignUp';
import MenueList from './Components/MenueList';
import Cart from './Components/Cart';
import AdminPage from './Components/AdminPage';
import CookPage from './Components/CookPage';
import Successful from './Components/Successful';
require("dotenv").config();

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL,"backend url");
  
  const [token, setToken] = useState("");
  const [isAdmin ,setIsAdmin]= useState(false)

  useEffect(() => {
   
  const adminFlag= JSON.parse(localStorage.getItem("admin"))
  console.log( typeof adminFlag,"typeoff adminFlag")

  const token= JSON.parse(localStorage.getItem("token"))
  console.log(typeof token,"typeof token")

  if(adminFlag != null){
    setIsAdmin(adminFlag);
  }
  if(token != null){
    setToken(token);
  }

  }, []);

  return <>
  <div>

      <Navbar token={token}  setToken={setToken} setIsAdmin={setIsAdmin} isAdmin={isAdmin}/> 
      <Routes>
        <Route exact path="/Login" element={ <LogIn  setToken={setToken} setIsAdmin={setIsAdmin} />}/>
        <Route  exact path="/Signup" element={<SignUp />} />
        <Route exact path="/MenueList" element={<MenueList token={token}/>}/>
  <Route exact path="/Cart" element={<Cart token={token} isAdmin={isAdmin}/>}/>
{isAdmin === true?   <Route exact path="/admin" element={<AdminPage token={token} setToken={setToken} setIsAdmin={setIsAdmin}/>}/>
:""}  
<Route exact path="menu/:id" element={<CookPage   token={token} />}/>
        <Route  exact path="/" element={<Home />} />
        
        <Route  exact path="/orderSuccessful" element={<Successful />} />

        <Route exact path="*" element={<NotFound />} />

        </Routes>
      </div>
  </>
  }
  

export default App;