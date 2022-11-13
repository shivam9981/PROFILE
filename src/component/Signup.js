import React, { useState } from 'react'
import logo from '../image/logo.jpeg'
import {  Link } from "react-router-dom";
import '../style/Signup.css'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
const [value , setvalue] = useState({
  name:"" , email:"" , phone:"" , password:"" , cpassword:""
})
  

const history = useNavigate();
const handleclick = async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:8000/Api/Auth/signup`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: value.name, email: value.email, mobile: value.phone, password: value.password })      
    });

    const data = await response.json();
    
    if(data.success){
      alert("User Register Succesfully")
      localStorage.setItem('token' , data.authtoken);
      history('/login')
    }
    else{
      alert("Enter a valid Emaill")
    }
    
  }

  const onchange = (e)=>{
    setvalue({...value , [e.target.name]:e.target.value})
  }


  return (
    <>
      <div className='container'>
        <div className='inner-conatiner'>
          <div className='dseign-container'>
            <h5>SIGNIN</h5>
            <div className='text-design' >
              <label>
                <i className="fa fa-address-book"></i>
              </label>
              <input type="text" className='inp-class' placeholder='Your Name' value={value.name}  name='name'  onChange={onchange}  required/>
            </div>
            <div className='text-design'>
              <label>
                <i className='fa fa-envelope-open'></i>
              </label>
              <input type="text" className='inp-class' placeholder='Your Email' name='email' value={value.email} onChange={onchange} required/>
            </div>
            <div className='text-design'>
              <label>
                <i className='fa fa-user-circle'></i>
              </label>
              <input type="number" className='inp-class' placeholder='Phone Number' name='phone' value={value.phone} onChange={onchange} required/>
            </div>
            <div className='text-design'>
              <label>
                <i className="fa fa-pinterest-p"></i>
              </label>
              <input type="password" className='inp-class' placeholder='Your Password' name='password' value={value.password} onChange={onchange} required/>
            </div>
            <div className='text-design'>
              <label>
                <i className='fa fa-pinterest-p'></i>
              </label>
              <input type="password" className='inp-class' placeholder='Conform Password' name='cpassword' value={value.cpassword} onChange={onchange} required/> 
            </div>
            <div>
            <button type="button" className="btn btn-primary" onClick={handleclick}>SUBMIT</button>
            </div>

          </div>
          <div className='dseign-container'>
            <img src={logo} alt = "Image not found" id='imagedesign'/>
            <Link to='/login'>I Am Already Registeer</Link>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup