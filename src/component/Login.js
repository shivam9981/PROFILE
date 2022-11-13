import React , {useState} from 'react'
import logo from '../image/login.jpg'
import { Link } from "react-router-dom";
import '../style/Signup.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const history = useNavigate()
  const [value , setvalue] = useState("")
  const handleclick = async ()=>{
    const response = await fetch(`http://localhost:8000/Api/Auth/login`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({email:value.email , password: value.password})
    })
    const data = await response.json();
    if (data.success) {
      localStorage.setItem('token' , data.authtoken)
      history('/')
      alert("welcome")
    }
    else{
      alert("Enter your valid detail")
    }
  }

  const onchange = (e)=>{
    setvalue({...value , [e.target.name]:e.target.value})
  }
  return (
    <>
      <div className='container'>
        <div className='inner-conatiner-login'>
          <div className='dseign-container'>
            <h5>LOGIN HERE</h5>
            <div className='text-design'>
              <label>
                <i className='fa fa-envelope-open'></i>
              </label>
              <input type="text" className='inp-class' placeholder='Your Email' name='email' onChange={onchange} />
            </div>
            <div className='text-design'>
              <label>
                <i className="fa fa-pinterest-p"></i>
              </label>
              <input type="password" className='inp-class' placeholder='Your Password' name='password' onChange={onchange} />
            </div>
            
            <div>
            <button type="button" className="btn btn-primary" onClick={handleclick}>SUBMIT</button>
            </div>
          </div>
          <div className='dseign-container'>
            <img src={logo} alt = "Image not found" id='imagedesign'/>
            <Link to='/signup'>G0 To Registeer</Link>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login