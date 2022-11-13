import React, { useContext, useEffect } from 'react'
import '../style/Home.css'
import data from '../contect/Usecontect'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const contect = useContext(data);
  const {datas , fatchuser} = contect;
  
  const history = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('token')) {
      fatchuser() 
    }
    else{
      alert("Login here")
      history('login')
    }
    //react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className='container-home'>
        <h5 className='heading'>WELCOME</h5>
        <h5 className='design-data'>{datas.name}</h5>
        <p className='paea'>WE ARE THE <span id='design'> MERN  DEVELOPER</span> </p>
      </div>
    </>
  )
}

export default Home