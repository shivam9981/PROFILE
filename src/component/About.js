import React ,{useEffect,useContext, useState} from 'react'
import '../style/About.css'
import img from '../image/profile.jpeg'
import contect from '../contect/Usecontect'


import { useNavigate } from 'react-router-dom';

const About = () => {

const context = useContext(contect)

const history = useNavigate()

const {fatchuser,datas} = context;
const [data , setdata] = useState({
  _id:"4545454456460",
  name:"Shivam Gupta",
  email:"shiavm@gmail.com",
  mobile:"123456789"
})
useEffect(() => {
  if (localStorage.getItem('token')) {
    fatchuser()
    setdata(datas)
  }
  else{
    alert("login here")
    history('/signup')
  }
}, [])


  return (
    <>
      <div id='container'>
        <div id='inner-cont'>
          <div id='left-cont'>
            <img className='img-set' src={img} alt='Image not found' />
            <h2>About me</h2>
            <p id='clssses'>I am full stack web developer and this website created by me . use technology in MongoDB ReactJs NodeJs ExpressJs it`s MERN</p>
          </div>
          <div className='classdiv'>
            <div className='up-div'>
              <div className='up-inner'>
                <h5 id='names'>{data.name}</h5>
                <p id='perfor'>Profession : <spam id="spm-in">Web developer</spam></p>
              </div>
              <div>
                <p id='rank'> Ranking: 5/10</p>
              </div>
            </div>
            <div id='doun-div'>
              <p id='para-info'>Personal Information</p>
              <div className='lasr-sec-one'>
                <div className='last-sec-div'>
                  <h4>User_id</h4>
                  <h4>Name</h4>
                  <h4>Email</h4>
                  <h4>Phone_No</h4>
                  <h4>Work</h4>
                </div>
                <div className='last-sec-div'>
                  <p>{data._id}</p>
                  <p>{data.name}</p>
                  <p>{data.email}</p>
                  <p>{data.mobile}</p>
                  <p>Web development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default About