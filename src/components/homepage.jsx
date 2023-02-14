import React from 'react'
import "./homepage.css"
import { Navigate} from 'react-router-dom'
//import { Link } from 'react-router-dom'
const Homepage = () => {

  // const out=()=>{
  //   setloginuser(Navigate("/login"))
  // }
  return (
    <div className='homepage'>
        <h1>Hello Homepage</h1>
        <div>
          <button>Logout</button>
        </div>
    </div>
  )
}

export default Homepage