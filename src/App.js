import Login from "./components/login";
import Register from "./components/register";
import Homepage from "./components/homepage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials=true;

function App () {

  const [user, setuser] = useState({})
  //const[]

 // const[user,setLoginUser]=useState({})
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">
        {
          user && user._id ? <Homepage setloginuser={setuser}/> : <Login setloginuser={setuser}/>
        }
       
      
    </div>}/>
        <Route path="login" element={<div className="App">
      <Login setloginuser={setuser}/>
    </div>}/>
        <Route path="register" element={<div className="App">
      <Register/>

    </div>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
