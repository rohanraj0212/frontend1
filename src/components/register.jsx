import React, { useState, useEffect } from 'react'
import "./register.css"
import { Link } from 'react-router-dom'
//import "./dream.img"
//import axios from "axios"
import dream from ".//dream.jpg"

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    const [formErr, setErr] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const chng = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = (e) => {
        // //     const{name,email,phone,password,cpassword}=user
        // //     if(name && email && phone && password && (password===cpassword)){
        // //         axios.post("http://localhost:3001/register",user).then((res)=>{console.log(res)
        // //     // localStorage.setItem('token',res.data.token)
        // // }
        // //     )
        // //         setUser({cpassword:'',email:'',name:'',password:'',phone:''});
        // //     }else{
        // //         alert("Invalid input");
        // //     }
        e.preventDefault();
        setErr(Validate(user));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErr);
        if (Object.keys(formErr).length === 0 && isSubmit) {
                console.log(user)
        }
    }, [formErr])
    const Validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
            errors.name = "**name required!!**";
        }
        if (!values.email) {
            errors.email = "**email required!!**";
        }
        else if(!regex.test(values.email)){
            errors.email="**Please enter valid email address**"
        }
        if (!values.phone) {
            errors.phone = "**Mobile number required!!**";
        }
        else if(values.phone.length!==10 || isNaN(values.phone)){
            errors.phone="**Invalid Mobile number**";
        }
        else if(values.phone.charAt(0)!=="9" && values.phone.charAt(0)!=="8" && values.phone.charAt(0)!=="7" && values.phone.charAt(0)!=="6"){
            errors.phone="**Invalid Mobile number**";
        }

        if (!values.password) {
            errors.password = "**password field required!!**";
        }
        else if(values.password.length<6){
            errors.password="**Password must be more than 6 characters**"
        }
        if (!values.cpassword) {
            errors.cpassword = "**Kindly confirm your password**";
        }
        else if(values.cpassword.length < 6){
            errors.password="**Password must be more than 6 characters**"
        }

        if(values.password!==values.cpassword){
            errors.cpassword="**Invalid Password**"
        }
        return errors
    }
    //let clicked=

    return (
        <>
            <div className='main'>
                <div className='register'>
                    <h1>Register</h1>

                    <input type="text" name="name" value={user.name} placeholder='Full Name' onChange={chng} autoComplete="off"></input>
                    <br/>
                    <span>{formErr.name}</span>
                    <br/>
                    <input type="email" name="email" value={user.email} placeholder='Email' onChange={chng} autoComplete="off"></input>
                    <br/>
                    <span>{formErr.email}</span>
                    <br/>
                    <input type="text" name="phone" value={user.phone} placeholder='Phone' onChange={chng} autoComplete="off"></input>
                    <br/>
                    <span>{formErr.phone}</span>
                    <br/>
                    <input type="password" name="password" value={user.password} placeholder='Password' onChange={chng} autoComplete="off"></input>
                    <br/>
                    <span>{formErr.password}</span>
                    <br/>
                    <input type="password" name="cpassword" value={user.cpassword} placeholder='Re-enter Password' onChange={chng} autoComplete="off"></input>
                    <br/>
                    <span>{formErr.cpassword}</span>


                    <div>
                        <button className='btn' onClick={register}>Register</button>
                    </div>
                    <div>or</div>
                    <div>
                        <Link to="/login">
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={dream} />
                </div>
            </div>
        </>
    )
}

export default Register