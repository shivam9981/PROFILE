import React, { useContext, useEffect, useState } from 'react'
import '../style/Contect.css'
import Contectdata from '../contect/Usecontect'

import { useNavigate } from 'react-router-dom';


const Contect = () => {
  let style = {
    fontSize: '48px',
    color: 'red',
  };

  const history = useNavigate()

  const context = useContext(Contectdata);
  const { datas, fatchuser, addmessage } = context;
  const [value, setvalue] = useState({})
  useEffect(() => {
    if (localStorage.getItem('token')) {
      fatchuser()
      setvalue({...value , name:datas.name , email : datas.email , mobile:datas.mobile })
    }
    else{
      alert("login here")
      history('/signup')
    }
    // react-hooks/exhaustive-deps
  }, [])

  const onchange = (e) => {
    setvalue({...value , [e.target.name]:e.target.value })
  }

  const handleclick = (e)=>{
    e.preventDefault()
    addmessage(value)
  }
  return (
    <>
      <div className='contect-contect'>
        <div className='contect-de'>
          <div className='contect-dsign'>
            <label><i className='fa fa-phone' style={style}></i></label>
            <div className='box-div'>
              <h2>Phone</h2>
              <p>+91 9981392889</p>
            </div>
          </div>
          <div className='contect-dsign'>
            <label><i className='fa fa-envelope-open' style={style}></i></label>
            <div className='box-div'>
              <h2>Email</h2>
              <p>shivamgee6@gmail.com</p>
            </div>
          </div>
          <div className='contect-dsign'>
            <label><i className='fa fa-book' style={style}></i></label>
            <div className='box-div'>
              <h2>Address</h2>
              <p>Radha Vallabh Ward Gadarwara</p>
            </div>
          </div>
        </div>
        <div className='contect-form'>
          <h4>Get In Touch</h4>
          <div className='contect-de' id='response'>
            <input placeholder='Your Name' type="text" name='name' className='inp' onChange={onchange} value={value.name} />
            <input type="text" placeholder='Your Email' name='email' className='inp' value={value.email} onChange={onchange} />
            <input type="phone" placeholder='Your Phone' name='mobile' className='inp' value={value.mobile} onChange={onchange} />
          </div>
          <textarea id='textbox' placeholder='Message' name='textbox' value={value.textbox} onChange={onchange} />
          <button type="button" className="btn btn-primary " onClick={handleclick}>SEND MESSAGE</button>
        </div>
      </div>
    </>
  )
}

export default Contect