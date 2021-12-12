import React  , {useState }from 'react'
import Home from "./Components/Home"
import Navbar  from './Components/NavBar'
import {BrowserRouter , Link , Route , Routes} from "react-router-dom";
import NotFound from "./Components/NotFound";
import LogIn from "./Components/LogIn"
import SignUp from './Components/SignUp';
function App() {
  const [token, setToken] = useState("")

  return (
    <div>
    <Navbar  token={token} setToken={setToken}/>
    <Routes>
      <Route  exact path="/" element={<Home />} />
      <Route exact path="*" element={<NotFound />} />
      <Route exact path="/Login" element={ <LogIn setToken={setToken}/>}/>
      <Route  exact path="/Signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;